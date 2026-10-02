import { coreServices, galleryItems, siteData } from '../../siteData';
import { blogPosts, getBlogPost } from '../../blog/blogData';
import { isPublishedPost, relatedBlogPosts } from '../../blog/relatedPosts';
import { serviceMarkdown } from '../../services/markdown';
import { privacyIntro, privacySections } from '../../privacy/content';
import { estimateDeliveryConfig } from '../../../lib/estimateDelivery';

const serviceList = coreServices.map((service) => `- ${service.title}: ${service.summary}`).join('\n');
function contactMarkdown() {
  const deliveryEnabled = Boolean(estimateDeliveryConfig(process.env));
  return [
    '# Let’s talk about your room.',
    'LOKEIL Renovation offers project specific estimates for bathroom remodeling, kitchen remodeling, tile, flooring, cabinet installation, plaster or drywall repair, interior painting, and other interior work.',
    deliveryEnabled ? '## Tell us about your project' : '## Prepare your estimate email',
    deliveryEnabled ? 'Submit your brief through the form on the contact page. A successful response means the request was accepted for email delivery to LOKEIL, not that an appointment or project is booked.' : 'Fill in what you know on the contact page, then open the brief in your email app or copy it into webmail. LOKEIL receives it only when you send the email.',
    'The brief starts with your neighborhood or ZIP code, type of work, and what you want to change. Phone, timing, and how you found LOKEIL are optional. You can preview the brief before sending. Attach current room photos and approximate measurements to your estimate email.',
    ...(deliveryEnabled ? ['Web submission also requires your name and reply email.'] : []),
    `Phone: ${siteData.phoneDisplay}\nEmail: ${siteData.email}`,
    '## When to reach us',
    ...siteData.hours.map((hour) => `${hour.label}: ${hour.value}`),
    '## Based in Ridgewood',
    'Serving Queens, Brooklyn, Manhattan, the Bronx, and Staten Island, with selected projects in Long Island and Westchester County. Share your neighborhood first. We can discuss the address and building access when planning a visit.',
    `Project gallery: ${siteData.siteUrl}/gallery\nServices: ${siteData.siteUrl}/services\nPlanning guides: ${siteData.siteUrl}/blog`,
    `Yelp: ${siteData.yelp}\nInstagram: ${siteData.instagram}\nPrivacy: ${siteData.siteUrl}/privacy`,
    `Source: ${siteData.siteUrl}/contact`,
  ].join('\n\n');
}
const pages: Record<string, string> = {
  "/terms": "# Terms and conditions\n\nUpdated September 13, 2026.\n\n\n## About this website\n\nThese terms apply to your use of lokeilremodeling.com, operated by LOKEIL Renovation. Use the site to learn about the business and contact us about relevant requests.\n\n\n## Estimates and remodeling work\n\nPhotos and service descriptions help explain the type of interior work offered. An inquiry or preliminary estimate does not book a project or establish a final price. Site conditions, measurements, materials, building requirements, scope, schedule, and payment terms must be agreed separately before work begins.\n\n\n## Responsible use\n\nProvide accurate information and share only content you are entitled to share. Do not interfere with the site, misuse forms, attempt unauthorized access, or upload harmful content. Do not send passwords, payment-card details, or unrelated confidential records through an initial inquiry.\n\n\n## Website materials and external links\n\nWebsite copy, photographs, artwork, and branding belong to their respective owners. Viewing the site does not grant permission to reuse them commercially. External websites and services have their own terms and privacy practices.\n\n\n## Questions and updates\n\nIf something on the website appears incorrect or you have a question about these terms, contact us before relying on it for a project or booking. Updates to these website terms do not change an existing signed agreement. Nothing here limits rights that cannot lawfully be excluded.\n\nPrivacy notice \u00b7 Contact LOKEIL Renovation\n\nSource: https://lokeilremodeling.com/terms\nContact: https://lokeilremodeling.com/contact\n",
  '/': `# ${siteData.brandName}\n\n${siteData.description}\n\n## Interior remodeling\n\nLOKEIL handles interior remodeling across ${siteData.serviceArea}. Best-fit inquiries include bathrooms, kitchens, tile, flooring, plaster and drywall finishing, interior painting, cabinetry, doors, steps, and fireplace finish upgrades.\n\n## Services\n\n${serviceList}\n\n## Project photos and planning\n\nBrowse ${siteData.siteUrl}/gallery for real project photos and ${siteData.siteUrl}/blog for a photo story and process explanation for each distinct gallery image.\n\n## Estimate preparation\n\nSend the project neighborhood, room type, current photos, rough scope, timing, access constraints, and finish references. Pricing is project-specific and begins with a direct estimate conversation.\n\n## Contact\n\n- Phone: ${siteData.phoneDisplay}\n- Email: ${siteData.email}\n- Instagram: ${siteData.instagram}\n- Base: ${siteData.location}\n`,
  '/about': `# About ${siteData.brandName}\n\n${siteData.brandName} is led by ${siteData.owner} and is based in ${siteData.location}. The company is ${siteData.legalName} and focuses on interior renovation: bathrooms, kitchens, tile, flooring, cabinets, plaster, paint, doors, steps, and fireplace upgrades.\n\n## Approach\n\nProjects begin with the room, the problem, and the desired finish level. Layout, materials, access, and sequencing are discussed before work moves forward. Execution focuses on clean lines, durable installation, material transitions, and a final walkthrough.\n\n## Profiles and service area\n\nYelp: ${siteData.yelp}\nInstagram: ${siteData.instagram}\n\n${siteData.serviceArea}. Call ${siteData.phoneDisplay} or email ${siteData.email} to discuss an estimate.\n`,
  '/services': `# LOKEIL Renovation services\n\n${serviceList}\n\nLOKEIL is an interior-focused remodeling company based in Ridgewood, Queens. Call ${siteData.phoneDisplay} or email ${siteData.email} with the room, location, photos, and rough scope for an estimate conversation.\n`,
  '/privacy': [
    '# How estimate and project information is handled.',
    privacyIntro,
    ...privacySections.flatMap((section) => [`## ${section.heading}`, section.body]),
    '## Your choices',
    `To request an eligible correction or deletion, email ${siteData.email}. Some information may be retained when reasonably required for an active project, legal obligation, safety, fraud prevention, or ordinary business records.`,
    'Updated October 2, 2026.',
    `Source: ${siteData.siteUrl}/privacy`,
  ].join('\n\n'),
};

const blogIndex = `# Renovation photo stories and planning guides\n\n${blogPosts
  .filter(isPublishedPost)
  .map((post) => `${post.title}: ${siteData.siteUrl}/blog/${post.slug}`)
  .join('\n')}\n`;

const galleryMarkdown = [
  '# Real bathrooms, kitchens, tile details, and finish work from recent projects.',
  'Browse real project photos by room and finish. Each image opens a story about the detail shown and the decisions behind it.',
  `${galleryItems.length} distinct photographs.`,
  ...galleryItems.map((item) => `## ${item.title}\n\n![${item.alt}](${siteData.siteUrl}${item.src})\n\n[Read the photo story](${siteData.siteUrl}${item.storyHref})`),
  `Source: ${siteData.siteUrl}/gallery`,
].join('\n\n');

function blogMarkdown(slug: string) {
  const post = getBlogPost(slug);
  if (!post || !isPublishedPost(post)) return null;
  const process = post.processDiagram ? [
    `## ${post.diagramHeading || 'The typical process'}`,
    ...(post.processSteps || []).map((step, index) => `${index + 1}. ${step}`),
    `Illustration: ${siteData.siteUrl}${post.processDiagram.src}`,
    post.processDiagram.caption,
  ] : [];
  return [
    `# ${post.title}`,
    post.description,
    `By ${siteData.brandName}. Published ${post.publishDate}.${post.modifiedDate ? ` Updated ${post.modifiedDate}.` : ''}`,
    `![${post.heroAlt}](${siteData.siteUrl}${post.heroImage})`,
    ...(post.editorial ? [post.editorial.photoCaption, post.editorial.takeaway] : []),
    ...post.intro,
    ...post.sections.flatMap((section, index) => [
      `## ${section.heading}`,
      ...section.body,
      ...(section.list || []).map((item) => `- ${item}`),
      ...(section.references || []).map((source) => `${source.label}: ${source.href}`),
      ...(section.comparison ? [
        section.comparison.caption,
        `| ${section.comparison.headings.join(' | ')} |`,
        '| --- | --- |',
        ...section.comparison.rows.map((row) => `| ${row.map((cell) => cell.replace(/\|/g, '\\|')).join(' | ')} |`),
      ] : []),
      ...(section.visual ? [
        `![${section.visual.alt}](${siteData.siteUrl}${section.visual.src})`,
        ...(section.visual.legend || []).map((item, number) => `${number + 1}. **${item.label}.** ${item.detail}`),
        section.visual.caption,
      ] : []),
      ...(section.links || []).map((link) => `[${link.label}](${link.href.startsWith('/') ? siteData.siteUrl + link.href : link.href})`),
      ...(post.diagramAfter === index ? process : []),
    ]),
    ...(post.diagramAfter === undefined ? process : []),
    ...(post.editorial ? [
      '## Choose a starting point',
      ...post.editorial.choices.flatMap((choice) => [`### ${choice.label}`, choice.detail]),
      `## ${post.editorial.estimateTitle}`,
      post.editorial.estimateScope,
      `Prepare a short brief at ${siteData.siteUrl}/blog/${post.slug}#estimate-brief, then open it in your email app. Add room photos and building requirements before sending. This prepares a draft; LOKEIL receives it only when you send it.`,
    ] : []),
    ...post.faqs.flatMap((faq) => [`## ${faq.question}`, faq.answer]),
    ...(post.sources || []).map((source) => `${source.label}: ${source.href}`),
    ...(post.relatedServices || []).map((service) => `[${service.label}](${siteData.siteUrl}${service.href})`),
    '## Keep planning',
    ...relatedBlogPosts(post, blogPosts).map((related) => `[${related.title}](${siteData.siteUrl}/blog/${related.slug})`),
    `Estimate: ${post.editorial ? `${siteData.siteUrl}/blog/${post.slug}#estimate-brief` : `${siteData.siteUrl}/contact`}`,
    `Source: ${siteData.siteUrl}/blog/${post.slug}`,
  ].join('\n\n');
}

export async function GET(_request: Request, context: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await context.params;
  const path = slug.length ? `/${slug.join('/')}` : '/';
  const body = (path === '/contact' ? contactMarkdown() : pages[path]) || serviceMarkdown(path) || (path === '/gallery' ? galleryMarkdown : path === '/blog' ? blogIndex : path.startsWith('/blog/') ? blogMarkdown(path.slice(6)) : null);
  if (!body) return new Response(`# Page not found\n\nNo page exists at ${path}.\n\n- [Home](${siteData.siteUrl}/)\n- [Services](${siteData.siteUrl}/services)\n- [Contact](${siteData.siteUrl}/contact)\n- [Sitemap](${siteData.siteUrl}/sitemap.xml)\n- [Site directory](${siteData.siteUrl}/llms.txt)\n`, { status: 404, headers: { 'Content-Type': 'text/markdown; charset=utf-8', Vary: 'Accept' } });
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8', Vary: 'Accept', 'Cache-Control': 'public, max-age=0, s-maxage=300, must-revalidate', Link: `<${siteData.siteUrl}${path === '/' ? '/' : path}>; rel="canonical"` } });
}
