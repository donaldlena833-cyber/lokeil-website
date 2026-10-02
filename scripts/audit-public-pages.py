"""Audit public response contracts without browser automation or external dependencies."""
import argparse
import concurrent.futures
from html import unescape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET


CANONICAL = 'https://lokeilremodeling.com'
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}


def normalize(value):
    return ' '.join(unescape(value).split())


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.title = ''
        self.description = ''
        self.canonical = ''
        self.headings = []
        self.hidden_h1 = False
        self.schemas = []
        self.links = set()
        self.images = set()
        self.text = []
        self.table_cells = []
        self.figure_captions = []
        self.cell_text = ''
        self.caption_text = ''
        self.script = None
        self.script_text = ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href', '')
        if tag == 'h1':
            self.headings.append('')
            self.hidden_h1 |= any('hidden' in a or 'display:none' in a.get('style', '').replace(' ', '') for _, a in self.stack)
        if tag == 'a' and any(t == 'main' for t, _ in self.stack):
            self.links.add(attrs.get('href', ''))
        if tag == 'img':
            self.images.add(attrs.get('src', ''))
        if tag == 'script':
            self.script = attrs.get('type', '')
            self.script_text = ''
        if tag in {'th', 'td', 'caption'}:
            self.cell_text = ''
        if tag == 'figcaption':
            self.caption_text = ''
        if tag not in VOID:
            self.stack.append((tag, attrs))

    def handle_endtag(self, tag):
        if tag in {'th', 'td', 'caption'}:
            self.table_cells.append(normalize(self.cell_text))
        if tag == 'figcaption':
            self.figure_captions.append(normalize(self.caption_text))
        if tag == 'script':
            if self.script == 'application/ld+json':
                try:
                    self.schemas.append(json.loads(self.script_text))
                except json.JSONDecodeError:
                    self.schemas.append({'invalid_json': True})
            self.script = None
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                self.stack = self.stack[:index]
                break

    def handle_data(self, data):
        tags = {t for t, _ in self.stack}
        if self.script is not None:
            self.script_text += data
            return
        if 'style' in tags:
            return
        self.text.append(data)
        if tags & {'th', 'td', 'caption'}:
            self.cell_text += data
        if 'figcaption' in tags:
            self.caption_text += data
        if 'title' in tags:
            self.title += data
        if 'h1' in tags and self.headings:
            self.headings[-1] += data


def flatten_schemas(value):
    if isinstance(value, list):
        return [item for entry in value for item in flatten_schemas(entry)]
    if isinstance(value, dict):
        return [value] + flatten_schemas(value.get('@graph', []))
    return []


def fetch(url, accept='text/html', user_agent='LOKEIL public response audit'):
    request = urllib.request.Request(url, headers={'Accept': accept, 'User-Agent': user_agent})
    try:
        response = urllib.request.urlopen(request, timeout=30)
    except urllib.error.HTTPError as error:
        response = error
    with response:
        return response.status, {key.lower(): ', '.join(response.headers.get_all(key)) for key in set(response.headers.keys())}, response.read().decode('utf-8', errors='replace')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('base')
    parser.add_argument('--output', required=True)
    args = parser.parse_args()
    base = args.base.rstrip('/')
    sitemap_status, _, xml = fetch(base + '/sitemap.xml', '*/*')
    if sitemap_status != 200:
        raise SystemExit('Sitemap did not return 200')
    tree = ET.fromstring(xml)
    urls = [element.text for element in tree.findall('{*}url/{*}loc')]
    errors = []

    def check(canonical):
        path = urllib.parse.urlsplit(canonical).path or '/'
        issues = []
        status, headers, html = fetch(base + path)
        page = Page()
        page.feed(html)
        if status != 200 or 'text/html' not in headers.get('content-type', ''):
            issues.append('HTML status or media type')
        if len(page.headings) != 1 or not normalize(page.headings[0]):
            issues.append('one nonempty main heading required')
        if page.hidden_h1:
            issues.append('main heading is inside a hidden server container')
        if not page.title or not page.description or page.canonical.rstrip('/') != canonical.rstrip('/'):
            issues.append('title, description, or canonical missing or wrong')
        if 'name="robots" content="noindex' in html:
            issues.append('canonical URL marked noindex')
        schemas = flatten_schemas(page.schemas)
        if any(schema.get('invalid_json') for schema in schemas):
            issues.append('invalid structured data JSON')
        business = next((schema for schema in schemas if schema.get('@id') == CANONICAL + '/#business'), None)
        if not business or CANONICAL not in business.get('url', '') or 'https://www.yelp.com/biz/lokeil-ridgewood' not in business.get('sameAs', []):
            issues.append('canonical business identity or Yelp profile missing')
        services = [schema for schema in schemas if schema.get('@type') == 'Service']
        if path.count('/') == 1 and path.endswith('-queens') and (not services or any(schema.get('provider', {}).get('@id') != CANONICAL + '/#business' for schema in services)):
            issues.append('service not linked to the canonical business')
        text = normalize(' '.join(page.text))
        for schema in schemas:
            if schema.get('@type') == 'FAQPage':
                for question in schema.get('mainEntity', []):
                    if normalize(question.get('name', '')) not in text or normalize(question.get('acceptedAnswer', {}).get('text', '')) not in text:
                        issues.append('FAQ markup differs from the rendered answers')
        md_status, md_headers, markdown = fetch(base + path, 'text/markdown')
        if md_status != 200 or 'text/markdown' not in md_headers.get('content-type', '') or not markdown.startswith('# '):
            issues.append('Markdown status, heading, or media type')
        if 'accept' not in md_headers.get('vary', '').lower() or not any(value.rstrip('/') == canonical.rstrip('/') for value in re.findall(r'<([^>]+)>', md_headers.get('link', ''))):
            issues.append('Markdown variation or canonical link missing')
        process_images = [image for image in page.images if image.startswith('/process/stories/')]
        decoded_images = [urllib.parse.parse_qs(urllib.parse.urlsplit(image).query).get('url', [image])[0] for image in page.images]
        editorial_images = [image for image in decoded_images if image.startswith('/editorial/')]
        guide_images = [image for image in decoded_images if image.startswith('/process/guides/')]
        for cell in page.table_cells:
            if cell and cell not in normalize(markdown):
                issues.append('comparison table information missing from Markdown')
        for caption in page.figure_captions if path.startswith('/blog/') else []:
            if caption and caption not in normalize(markdown):
                issues.append('illustration caption missing from Markdown')
        for image in guide_images:
            if image not in markdown:
                issues.append('guide illustration missing from Markdown')
            asset_status, _, _ = fetch(base + image, '*/*')
            if asset_status != 200:
                issues.append('guide illustration asset missing')
        for schema in schemas:
            if schema.get('@type') == 'BlogPosting':
                for citation in schema.get('citation', []):
                    if citation not in page.links or citation not in markdown:
                        issues.append('article citation missing from visible links or Markdown')
        for link in page.links:
            if link.startswith('/blog/') and (CANONICAL + link) not in urls:
                issues.append('article link points outside the published URL set: ' + link)
        if process_images or editorial_images:
            other_stories = {link for link in page.links if link.startswith('/blog/') and link != path}
            if len(other_stories) < (2 if editorial_images else 3):
                issues.append('useful related article links missing')
            if not any(link.endswith('-queens') for link in page.links):
                issues.append('photo story has no service link')
            if 'By LOKEIL Renovation' not in text:
                issues.append('visible article author missing')
            for image in process_images + editorial_images:
                asset_status, _, _ = fetch(base + image, '*/*')
                if asset_status != 200:
                    issues.append('photo process asset missing')
        if any(re.search(r'/blog/bathroom-remodeling-(astoria|jackson-heights|long-island-city|ridgewood|sunnyside|woodside)-nyc-planning-guide$', link) for link in page.links):
            issues.append('retired location page remains in main navigation')
        return {'path': path, 'title': normalize(page.title), 'html': status, 'markdown': md_status,
                'server_visible_h1': not page.hidden_h1, 'photo_story': bool(process_images or editorial_images),
                'comparison_cells': len(page.table_cells), 'guide_illustrations': len(guide_images), 'issues': issues}

    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(check, urls))
    for row in results:
        errors.extend(f"{row['path']}: {issue}" for issue in row['issues'])
    titles = [row['title'] for row in results]
    if len(titles) != len(set(titles)):
        errors.append('duplicate public page titles')

    protocols = []
    for accept, expected in [('text/html', 404), ('text/markdown', 404), ('application/json', 406)]:
        path = '/not-a-lokeil-page' if expected == 404 else '/services'
        status, _, _ = fetch(base + path, accept)
        protocols.append({'path': path, 'accept': accept, 'status': status, 'expected': expected})
        if status != expected:
            errors.append(f'{path}: expected {expected} for {accept}, got {status}')
    alternating = []
    for accept in ['text/html', 'text/markdown', 'text/html', 'text/markdown']:
        status, headers, _ = fetch(base + '/bathroom-remodeling-queens', accept)
        correct = status == 200 and accept in headers.get('content-type', '')
        alternating.append({'accept': accept, 'status': status, 'type': headers.get('content-type'), 'correct': correct})
        if not correct:
            errors.append('alternating representation returned the wrong content')
    bots = []
    for agent in ['Googlebot', 'bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'meta-externalagent']:
        status, _, html = fetch(base + '/services', 'text/html', agent)
        bot_page = Page()
        bot_page.feed(html)
        correct = status == 200 and bool(bot_page.headings) and not bot_page.hidden_h1
        bots.append({'simulated_user_agent': agent, 'status': status, 'server_visible_content': correct})
        if not correct:
            errors.append(f'{agent}: smoke request did not receive visible content')
    report = {'base': base, 'canonical_pages': len(results), 'photo_stories': sum(row['photo_story'] for row in results),
              'results': results, 'protocol_checks': protocols, 'alternating_representations': alternating,
              'simulated_crawler_checks': bots, 'errors': errors,
              'limits': 'These HTTP checks do not prove real crawler visits, indexing, citations, visual quality, or lead delivery.'}
    Path(args.output).write_text(json.dumps(report, indent=2))
    print(json.dumps({'canonical_pages': len(results), 'photo_stories': report['photo_stories'], 'errors': errors}, indent=2))
    raise SystemExit(1 if errors else 0)


if __name__ == '__main__':
    main()
