import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'content', 'seo-drafts', 'nyc-local');

const neighborhoods = [
  ['ridgewood', 'Ridgewood, Queens'],
  ['astoria', 'Astoria, Queens'],
  ['long-island-city', 'Long Island City, Queens'],
  ['sunnyside', 'Sunnyside, Queens'],
  ['woodside', 'Woodside, Queens'],
  ['jackson-heights', 'Jackson Heights, Queens'],
  ['elmhurst', 'Elmhurst, Queens'],
  ['forest-hills', 'Forest Hills, Queens'],
  ['rego-park', 'Rego Park, Queens'],
  ['flushing', 'Flushing, Queens'],
  ['bayside', 'Bayside, Queens'],
  ['kew-gardens', 'Kew Gardens, Queens'],
  ['brooklyn-heights', 'Brooklyn Heights, Brooklyn'],
  ['williamsburg', 'Williamsburg, Brooklyn'],
  ['greenpoint', 'Greenpoint, Brooklyn'],
  ['park-slope', 'Park Slope, Brooklyn'],
  ['bed-stuy', 'Bed-Stuy, Brooklyn'],
  ['bushwick', 'Bushwick, Brooklyn'],
  ['upper-east-side', 'Upper East Side, Manhattan'],
  ['upper-west-side', 'Upper West Side, Manhattan'],
];

const services = [
  ['bathroom-remodeling', 'Bathroom Remodeling', 'bathroom remodeling'],
  ['kitchen-remodeling', 'Kitchen Remodeling', 'kitchen remodeling'],
  ['tile-installation', 'Tile Installation', 'tile installation'],
];

const related = {
  'bathroom-remodeling': [
    'shower tile layout',
    'vanity replacement',
    'wet-area prep',
    'small bathroom storage',
  ],
  'kitchen-remodeling': [
    'cabinet installation',
    'backsplash tile',
    'floor transitions',
    'apartment kitchen planning',
  ],
  'tile-installation': [
    'bathroom floor tile',
    'shower wall tile',
    'backsplash tile',
    'grout and trim details',
  ],
};

const today = '2026-06-05';

const makeDraft = ([areaSlug, area], [serviceSlug, serviceTitle, serviceKeyword], index) => {
  const slug = `${serviceSlug}-${areaSlug}-nyc-planning-guide`;
  const primaryKeyword = `${serviceKeyword} ${area}`;
  const title = `${serviceTitle} in ${area}: NYC Apartment Planning Guide`;
  const relatedTerms = related[serviceSlug];
  return {
    slug,
    filename: `${String(index + 1).padStart(2, '0')}-${slug}.md`,
    content: `---\n` +
      `title: "${title}"\n` +
      `slug: "${slug}"\n` +
      `status: draft\n` +
      `site: lokeilremodeling.com\n` +
      `business: LOKEIL Renovation\n` +
      `primary_keyword: "${primaryKeyword}"\n` +
      `secondary_keywords:\n` +
      `  - "${serviceKeyword} NYC apartment"\n` +
      `  - "${serviceKeyword} contractor ${area}"\n` +
      `  - "${serviceKeyword} estimate ${area}"\n` +
      `  - "NYC renovation planning ${area}"\n` +
      `publish_target: "/blog/${slug}"\n` +
      `created: "${today}"\n` +
      `---\n\n` +
      `# ${title}\n\n` +
      `## Local search intent\n\n` +
      `Homeowners in ${area} comparing ${serviceKeyword} help need practical scope guidance before they call a contractor. This draft should answer what changes in NYC apartments: building rules, work-hour limits, elevator or hallway protection, debris handling, old surfaces, and whether the job is cosmetic or part of a larger renovation.\n\n` +
      `## Draft intro\n\n` +
      `${serviceTitle} in ${area} usually comes down to more than picking materials. In New York City apartments, the plan has to account for building access, existing walls and floors, plumbing or electrical limits, co-op and condo rules, and the way new finishes meet old conditions.\n\n` +
      `LOKEIL Renovation is based in Ridgewood, Queens and handles interior remodeling across Queens, Brooklyn, Manhattan, parts of Long Island, and Westchester. This guide is for owners planning ${serviceKeyword} in ${area} who want a clearer estimate conversation before work starts.\n\n` +
      `## H2 outline\n\n` +
      `### What makes ${area} projects different\n\n` +
      `Mention apartment age, narrow rooms, shared-building rules, delivery access, parking/load-in friction, and finish transitions common in NYC homes.\n\n` +
      `### Scope questions to answer before an estimate\n\n` +
      `- Which surfaces or rooms are included?\n` +
      `- Are plumbing, electrical, walls, layout, or ventilation changing?\n` +
      `- Are materials already chosen or still open?\n` +
      `- Does the building require COI paperwork, superintendent approval, or restricted work hours?\n\n` +
      `### Details that change cost and schedule\n\n` +
      `Cover demolition, surface prep, substrate repair, waterproofing where relevant, trim, transitions, paint touch-ups, disposal, and punch-list work.\n\n` +
      `### Related finish decisions\n\n` +
      `${relatedTerms.map((term) => `- ${term}`).join('\n')}\n\n` +
      `### NYC permit and building-rule caution\n\n` +
      `Use careful language: DOB permits depend on scope. Cosmetic work can be simpler, while plumbing, electrical, structural, ventilation, layout changes, or multi-trade renovations may need licensed professional review and filings. Building approval can still be required even when a DOB permit is not.\n\n` +
      `### What to send LOKEIL for a clearer estimate\n\n` +
      `Ask for wide photos, close-ups of problem areas, rough dimensions, building type, neighborhood, desired materials, timeline, and whether the project is repair, replacement, or full remodel.\n\n` +
      `## FAQ targets\n\n` +
      `1. Does ${serviceKeyword} in ${area} need a permit?\n` +
      `2. Can LOKEIL work in co-op or condo buildings in ${area}?\n` +
      `3. What photos should I send before asking for a ${serviceKeyword} estimate?\n\n` +
      `## Internal links\n\n` +
      `- /services\n` +
      `- /bathroom-remodeling-queens\n` +
      `- /kitchen-remodeling-queens\n` +
      `- /tile-installation-queens\n` +
      `- /contact\n\n` +
      `## Source notes\n\n` +
      `- NYC DOB: Do I Need a Permit?\n` +
      `- NYC DOB: Renovating Kitchens & Bathrooms\n` +
      `- NYC DCWP: Hiring a Home Improvement Contractor\n`,
  };
};

mkdirSync(outDir, { recursive: true });

const drafts = [];
for (const service of services) {
  for (const neighborhood of neighborhoods) {
    drafts.push(makeDraft(neighborhood, service, drafts.length));
  }
}

for (const draft of drafts) {
  writeFileSync(join(outDir, draft.filename), draft.content);
}

writeFileSync(
  join(outDir, 'README.md'),
  `# NYC Local SEO Draft Queue\n\n` +
    `Generated: ${today}\n\n` +
    `These 60 markdown drafts are for LOKEIL Renovation local SEO pages/posts. They are intentionally draft outlines, not published claims. Before publishing each one, expand with specific project-fit guidance, keep permit language cautious, and avoid unsupported license, guarantee, review, or project-count claims.\n\n` +
    drafts.map((draft) => `- [${draft.slug}](./${draft.filename})`).join('\n') +
    '\n',
);

const publishedPost = `import { siteData } from '../siteData';\n` +
  `import type { BlogPost } from './blogData';\n\n` +
  `export const nycLocalSeoPost: BlogPost = {\n` +
  `  slug: 'apartment-bathroom-remodeling-ridgewood-queens-nyc-guide',\n` +
  `  title: 'Apartment Bathroom Remodeling in Ridgewood, Queens: NYC Planning Guide',\n` +
  `  description:\n` +
  `    'A Ridgewood, Queens apartment bathroom remodeling guide covering scope, building rules, tile, vanity, waterproofing questions, DOB permit caution, and estimate prep.',\n` +
  `  eyebrow: 'Ridgewood bathroom remodeling',\n` +
  `  publishDate: '2026-06-05',\n` +
  `  readTime: '7 min read',\n` +
  `  heroImage: '/gallery/bathroom-shower/1.jpg',\n` +
  `  heroAlt: 'Bathroom shower remodel with marble-look tile, niche, and glass panel in the New York City area.',\n` +
  `  primaryKeyword: 'apartment bathroom remodeling Ridgewood Queens',\n` +
  `  keywords: [\n` +
  `    'apartment bathroom remodeling Ridgewood Queens',\n` +
  `    'bathroom remodeling Ridgewood Queens',\n` +
  `    'Queens bathroom remodel contractor',\n` +
  `    'NYC apartment bathroom renovation',\n` +
  `    'Ridgewood bathroom tile contractor',\n` +
  `  ],\n` +
  `  intro: [\n` +
  `    'Apartment bathroom remodeling in Ridgewood, Queens has a different rhythm than a suburban bathroom job. The room is usually tighter, the building rules matter, old walls and floors can hide surprises, and every finish has to work around neighbors, work hours, access, and cleanup.',\n` +
  `    \`\${siteData.brandName} is based in Ridgewood, Queens and handles interior remodeling across Queens and the wider New York City area. This guide is written for homeowners comparing bathroom tile, vanity replacement, shower updates, flooring, plaster, painting, and finish work before asking for an estimate.\`,\n` +
  `  ],\n` +
  `  sections: [\n` +
  `    {\n` +
  `      heading: 'Start with the actual apartment conditions',\n` +
  `      body: [\n` +
  `        'Ridgewood bathrooms often have tight footprints, older framing, layered wall finishes, uneven floors, narrow doors, and plumbing locations that are not easy to move. A clean remodel starts by documenting what exists before choosing the final tile or vanity.',\n` +
  `        'Take wide photos from the doorway and every corner. Then take close-ups of the tub or shower, vanity, toilet, ceiling, floor transitions, radiator or heat covers, water damage, cracked grout, loose tile, and any area where old work looks patched.',\n` +
  `      ],\n` +
  `      list: [\n` +
  `        'Measure wall-to-wall dimensions before ordering a vanity or shower fixture.',\n` +
  `        'Check door swing, toilet clearance, and drawer clearance together.',\n` +
  `        'Flag old leaks, soft flooring, loose tile, or peeling paint before the estimate.',\n` +
  `      ],\n` +
  `    },\n` +
  `    {\n` +
  `      heading: 'Separate cosmetic updates from deeper renovation work',\n` +
  `      body: [\n` +
  `        'A bathroom refresh might mean paint, caulk, vanity replacement, floor repair, or replacing surface finishes. A remodel can include demolition, tile substrate work, shower waterproofing, plumbing coordination, electrical updates, ventilation questions, and full finish rebuilding.',\n` +
  `        'That distinction matters for cost, schedule, building approval, and permit questions. It also helps avoid the common problem where a homeowner asks for a simple tile price, but the real job includes wall repair, floor leveling, waterproofing, trim, paint, and cleanup.',\n` +
  `      ],\n` +
  `    },\n` +
  `    {\n` +
  `      heading: 'Building rules can shape the schedule',\n` +
  `      body: [\n` +
  `        'Even when the bathroom scope is straightforward, a Queens apartment building may require insurance paperwork, superintendent coordination, work-hour limits, hallway protection, elevator rules, debris removal rules, and notice to neighbors.',\n` +
  `        'Ask the building or managing agent for alteration rules before work starts. That information helps the contractor plan access, deliveries, protection, and cleanup instead of discovering restrictions after materials arrive.',\n` +
  `      ],\n` +
  `      list: [\n` +
  `        'Ask whether a certificate of insurance is required.',\n` +
  `        'Confirm work hours and noise restrictions.',\n` +
  `        'Check whether the building has plumbing shutoff procedures or superintendent scheduling rules.',\n` +
  `      ],\n` +
  `    },\n` +
  `    {\n` +
  `      heading: 'Tile and waterproofing decisions should come early',\n` +
  `      body: [\n` +
  `        'Bathroom tile is not only a surface choice. Shower walls, tub surrounds, niches, curbs, benches, corners, floor transitions, and grout lines all need planning before installation begins.',\n` +
  `        'In wet areas, ask how the shower or tub surround will be prepared behind the tile. The visible tile should be supported by the right prep, clean layout decisions, and careful transitions to glass, fixtures, walls, and floors.',\n` +
  `      ],\n` +
  `    },\n` +
  `    {\n` +
  `      heading: 'Vanity, mirror, lighting, and storage should be planned together',\n` +
  `      body: [\n` +
  `        'A new vanity can make a small Ridgewood bathroom feel cleaner, but it can also create conflicts with plumbing, drawers, toilet clearance, mirror width, outlets, lighting, and wall damage hidden behind the old cabinet.',\n` +
  `        'Before buying, photograph inside the existing vanity so the drain and supply lines are visible. A same-size replacement is usually easier to plan than a vanity with drawers or sink placement that fights the existing plumbing.',\n` +
  `      ],\n` +
  `    },\n` +
  `    {\n` +
  `      heading: 'Permit questions depend on scope',\n` +
  `      body: [\n` +
  `        'NYC Department of Buildings guidance says most construction in New York City requires approval and permits, while some minor work can be exempt. DOB guidance also notes that many kitchen and bathroom renovations may require an Alteration Type 2 application depending on the work involved.',\n` +
  `        'That is why the safest first step is to describe the real scope. Painting and cabinet replacement are different from moving plumbing, changing electrical, altering walls, changing layout, or rebuilding a wet area. Building approval may also be required even when a DOB permit question is separate.',\n` +
  `      ],\n` +
  `    },\n` +
  `    {\n` +
  `      heading: 'What to send for a clearer Ridgewood bathroom estimate',\n` +
  `      body: [\n` +
  `        'Send photos, rough measurements, the apartment location, building type, desired materials, current problems, and whether the goal is repair, replacement, or a full remodel. Include any building alteration rules if you already have them.',\n` +
  `        \`When contacting \${siteData.brandName}, mention Ridgewood or the exact Queens neighborhood, whether the bathroom is in a co-op, condo, rental, or private house, and what parts of the bathroom must change. That makes the first estimate conversation much more useful.\`,\n` +
  `      ],\n` +
  `    },\n` +
  `  ],\n` +
  `  faqs: [\n` +
  `    {\n` +
  `      question: 'Does LOKEIL handle bathroom remodeling in Ridgewood, Queens?',\n` +
  `      answer:\n` +
  `        'Yes. LOKEIL Renovation is based in Ridgewood, Queens and handles bathroom remodeling, tile, flooring, plaster, painting, cabinetry, and interior finish work across Queens and the wider NYC area.',\n` +
  `    },\n` +
  `    {\n` +
  `      question: 'Does an apartment bathroom remodel in NYC need a permit?',\n` +
  `      answer:\n` +
  `        'It depends on scope. Cosmetic work can be simpler, but moving plumbing, electrical, walls, ventilation, layout, or deeper multi-trade renovation should be checked against DOB guidance and building rules.',\n` +
  `    },\n` +
  `    {\n` +
  `      question: 'What should I send before asking for a bathroom remodeling estimate?',\n` +
  `      answer:\n` +
  `        'Send wide photos, close-ups of problem areas, rough dimensions, building type, neighborhood, material ideas, and any co-op, condo, or building alteration rules you already have.',\n` +
  `    },\n` +
  `  ],\n` +
  `  sources: [\n` +
  `    {\n` +
  `      label: 'NYC Department of Buildings: Do I Need a Permit?',\n` +
  `      href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/do-i-need-a-permit.page',\n` +
  `    },\n` +
  `    {\n` +
  `      label: 'NYC Department of Buildings: Renovating Kitchens & Bathrooms',\n` +
  `      href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/renovating-kitchens-bathrooms.page',\n` +
  `    },\n` +
  `    {\n` +
  `      label: 'NYC DCWP: Hiring a Home Improvement Contractor',\n` +
  `      href: 'https://www.nyc.gov/site/dca/consumers/shopping-services-home-improvement.page',\n` +
  `    },\n` +
  `  ],\n` +
  `  relatedServices: [\n` +
  `    { label: 'Bathroom Remodeling Queens', href: '/bathroom-remodeling-queens' },\n` +
  `    { label: 'Tile Installation Queens', href: '/tile-installation-queens' },\n` +
  `    { label: 'Plaster and Drywall Finishing Queens', href: '/plaster-drywall-finishing-queens' },\n` +
  `    { label: 'Contact LOKEIL', href: '/contact' },\n` +
  `  ],\n` +
  `};\n`;

writeFileSync(join(process.cwd(), 'app', 'blog', 'nycLocalSeoPost.ts'), publishedPost);

console.log(`Generated ${drafts.length} markdown drafts in ${outDir}`);
console.log('Wrote app/blog/nycLocalSeoPost.ts');
