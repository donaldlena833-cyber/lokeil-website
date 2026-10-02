# LOKEIL Renovation website

Public site: https://lokeilremodeling.com

LOKEIL Inc. is based in Ridgewood, Queens. The website estimate contact is (332) 999-3846 and info@lokeilremodeling.com. Business facts live in `app/siteData.ts`; keep website contact routing consistent with the business agreement.

## Development

```sh
npm ci
npm run dev
npm test
npm run build
npm start
```

The site uses Next.js 15, React 19, TypeScript, and Tailwind CSS 3.4. Vercel deploys the GitHub repository. It is a Next.js application, not a static export: most public pages are prerendered, while the text representation uses a route handler. Images use Next.js optimization. Fonts are Instrument Serif and Manrope.

## Content and design

- The light palette uses cream `#F1F3E8`, a raised surface `#FAFAF3`, soft sage `#E3E8D8`, deep green text `#293B30`, and leaf green actions `#45614A`.
- The service hub connects to seven existing Queens service URLs. Visible service copy and FAQs are shared from `app/services/content/`.
- `app/services/photoReferences.ts` selects real photographs that match each service. Original gallery folder names are not a reliable description of their contents.
- There are 36 distinct photo stories. Seven repeated gallery files resolve to those stories through aliases in `app/blog/photoStories.ts`.
- Each photo has its own title, lead, editorial outline, process placement, and illustration in `app/blog/photoStoryPlans.json` and `public/process/stories/`.
- Individual photo locations, concealed construction products, reviews, licenses, prices, and completion dates must not be invented.
- Article recommendations use subject and service relevance, not matching image filenames. Consolidated location articles are excluded from public navigation and sitemap entries.
- Organization, service, article, and breadcrumb structured data describe visible facts. Schema and AI text files do not guarantee indexing, rich results, citations, or rankings.

## Text representation

Normal HTML is the primary representation. Request the same page with `Accept: text/markdown` for readable text. The route is `app/agent-markdown/[[...slug]]/route.ts`; service text comes from the same service content modules, and blog text comes from the same post data. Gallery text links each distinct photograph to its story.

Middleware handles canonical host and consolidated route redirects before representation negotiation. Missing pages return 404; unsupported media requests return 406. The route handler supplies `Vary: Accept` and a canonical Link header. Vercel also includes Accept in its CDN cache key by default; verify alternating responses after a release.

`public/llms.txt` is a factual site directory, maintained as a compatibility convenience. No Google ranking benefit is claimed for it.

## Inquiries and measurement

The estimate action opens an email draft with project details, or initiates a call. Neither action confirms receipt of an inquiry. There is no server submission form in this version.

Optional Google tools are consent gated. Contact intent events use `click_call` and `click_email`, with the page path only; destinations and project details are excluded. The existing GTM container loads only when both optional purposes are accepted because its tags can include advertising. An intent event is not a qualified lead or completed sale.

Use Search Console and Bing Webmaster Tools for their respective visibility reports, and a separate inquiry ledger for estimates and credited jobs. Do not infer attribution from a page event or a citation alone.

## Release checks

Run tests and a production build. Start the built application and inspect the affected pages visually at desktop and mobile widths. Run `python3 scripts/audit-public-pages.py http://localhost:3000 --output /tmp/lokeil-audit.json` for the public response checks.

After merging, verify that the hosting deployment matches the merged commit. Repeat the response audit on the custom domain, check the actual user actions, and save screenshots. Build success and HTTP 200 responses alone do not prove a successful release.
