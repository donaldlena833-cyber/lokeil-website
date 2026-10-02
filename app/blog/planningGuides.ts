import type { BlogPost } from './blogData';

const permitSource = {
  label: 'NYC DOB: Work that may not need a permit',
  href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/do-i-need-a-permit.page',
};
const plumbingSource = {
  label: 'NYC DOB: Plumbing permit requirements',
  href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/plumbing-permits.page',
};
const renovationSource = {
  label: 'NYC DOB: Renovating kitchens and bathrooms',
  href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/renovating-kitchens-bathrooms.page',
};
const hiringSource = {
  label: 'NYC DCWP: Hiring a home improvement contractor',
  href: 'https://www.nyc.gov/site/dca/consumers/shopping-services-home-improvement.page',
};
const licenseSource = {
  label: 'Check a contractor license with NYC DCWP',
  href: 'https://www.nyc.gov/site/dca/consumers/check-license.page',
};
const waterproofSource = {
  label: 'Schluter: Water management in tiled showers',
  href: 'https://www.schluter.com/schluter-us/en_US/article-water-management-tiled-showers',
};

export const bathroomCostGuide: BlogPost = {
  slug: 'bathroom-remodeling-cost-queens-ny',
  title: 'Bathroom Remodeling Cost in Queens: Compare the Work Behind the Quote',
  description: 'Compare bathroom remodeling estimates in Queens with a clear scope checklist for demolition, waterproofing, tile, fixtures, building access, and allowances.',
  eyebrow: 'Bathroom estimates',
  publishDate: '2026-05-10',
  modifiedDate: '2026-10-02',
  readTime: '6 min read',
  heroImage: '/gallery/bathroom-tiles/6.jpg',
  heroAlt: 'Pale marble look shower tile, recessed niche, glass enclosure, and dark vanity.',
  primaryKeyword: 'bathroom remodeling cost Queens NY',
  keywords: ['bathroom remodeling cost Queens NY', 'bathroom remodel estimate Queens', 'compare bathroom renovation quotes', 'bathroom tile and waterproofing scope'],
  intro: [
    'Two bathroom estimates can describe the same room and still buy very different work. A new vanity and fresh paint leave much of the room intact. Rebuilding the shower opens the wet area and brings backing, waterproofing, tile, drainage, and finish details into the price.',
    'There is no single LOKEIL bathroom price that applies to every Queens home. Start with the work you want included, then compare written estimates for that same scope. The lowest total is hard to judge when one quote includes the concealed work and another leaves it for later.',
  ],
  sections: [
    {
      heading: 'First decide how far into the room you want to go',
      body: [
        'Imagine keeping the shower and floor but replacing a tired vanity. The cabinet still needs to fit the plumbing, and its old footprint may expose unfinished tile or a paint line. That is a smaller conversation than removing the shower walls, even if both requests begin with “update my bathroom.”',
        'A tile renovation adds the work beneath the finish. A layout change adds another decision: can the sink, toilet, tub, and shower stay where they are? Moving them changes the trade work that must be reviewed and priced.',
      ],
      list: ['Refresh: describe the fixtures and surfaces staying in place.', 'Wet area rebuild: name the shower or tub surfaces being opened and replaced.', 'Layout change: show the existing and proposed fixture locations.'],
      links: [{ label: 'See how a vanity fits beside shower glass', href: '/blog/vanity-shower-glass-and-floor-tile-in-one-small-bathroom' }],
    },
    {
      heading: 'Put the estimates beside this scope checklist',
      body: ['Ask each contractor to mark what is included, excluded, or still an allowance. An allowance is a placeholder for a selection or cost that has not been finalized. Find out how the total changes when the actual selection is made.'],
      comparison: {
        caption: 'Bathroom estimate comparison checklist',
        headings: ['Scope item', 'What the written estimate should explain'],
        rows: [
          ['Demolition and protection', 'Which surfaces come out, what stays, how adjacent rooms are protected, and who removes debris.'],
          ['Backing and repair', 'What new backing is included and how damaged or uneven surfaces discovered after removal will be handled.'],
          ['Shower waterproofing', 'The proposed system and the scope around corners, niches, curb, base, and drain.'],
          ['Tile and setting work', 'Material supply, tile size and pattern, edge treatment, grout, and any bench or niche details.'],
          ['Vanity, fixtures, and glass', 'Who orders each item, delivery responsibilities, installation scope, and whether glass is priced separately.'],
          ['Plumbing and electrical', 'Work included, professionals involved, and whether existing locations are being kept.'],
          ['Building access and approvals', 'Access limits, required building paperwork, and any permit or filing costs included or excluded.'],
          ['Allowances and changes', 'The amount and purpose of each allowance, plus how additional work will be approved and priced.'],
          ['Final finishes and closeout', 'Wall repair, paint, trim, sealant, cleanup, and the final walkthrough.'],
        ],
      },
      links: [hiringSource],
    },
    {
      heading: 'A simple tile color can still involve detailed work',
      body: [
        'In the shower photo below, broad wall tiles meet a small mosaic floor and a decorative niche band. The color is restrained, but the installer still has to coordinate the wall grid, niche edges, floor slope, and pieces around the drain. A quote that says only “install tile” leaves those decisions unclear.',
        'Use a reference photo to explain the finish you want. Then ask which details are included in the labor scope. A bench, pattern, edge profile, or larger tile can change the preparation and cutting work even when the room size stays the same.',
      ],
      visual: {
        src: '/gallery/bathroom-tiles/8.jpg',
        alt: 'Shower tile in progress with large wall tiles, spacing clips, a decorative niche band, and mosaic floor.',
        width: 900, height: 1200,
        caption: 'A real LOKEIL progress photo. Visible tile detail does not establish the concealed waterproofing system or the price of this job.',
      },
      links: [{ label: 'Read the story behind this wall and floor combination', href: '/blog/large-shower-wall-tile-meets-a-mosaic-floor' }],
    },
    {
      heading: 'Resolve the unknowns before choosing a total',
      body: [
        'A photo cannot show every condition under an old floor or behind a shower wall. Tell the contractor about leaks, soft areas, recurring cracks, or repairs you know about. Ask what can be checked during a visit and what may remain unknown until removal.',
        'If more work becomes necessary, ask for its scope and price in writing before authorizing it. Separate an unfinished product selection from an unknown site condition. They are different reasons a preliminary estimate may change.',
        'For an apartment, share the building work rules early. Access hours, elevator arrangements, and protection requirements belong in the planning conversation. Ask who is handling each approval rather than assuming it is covered by the quote.',
      ],
      links: [{ label: 'Review NYC kitchen and bathroom permit questions', href: '/blog/nyc-kitchen-bathroom-remodel-permits-queens' }],
    },
    {
      heading: 'Send enough detail for a useful first estimate',
      body: [
        'Send wide photos from the doorway, close views of the shower and vanity, rough room dimensions, your neighborhood, and a short list of what should stay or change. Add product links if you have chosen tile, a vanity, fixtures, or glass.',
        'Include your timing and budget priorities. If storage matters more than changing the layout, say so. LOKEIL can start the scope conversation from those details; measurements, site conditions, and agreed materials determine the final proposal.',
      ],
    },
  ],
  faqs: [
    { question: 'How much does a bathroom remodel cost in Queens?', answer: 'The price depends on the room, existing condition, materials, and scope. LOKEIL provides project specific estimates rather than one published price for every bathroom. Compare written quotes for the same demolition, preparation, waterproofing, tile, fixture, and finish work.' },
    { question: 'What should a bathroom renovation estimate include?', answer: 'It should identify the work and materials included, exclusions, allowances, relevant trade and approval responsibilities, and how changes will be priced. Ask whether glass, fixture supply, debris removal, and final wall repair are covered.' },
    { question: 'Can I get an exact bathroom price from photos?', answer: 'Photos help start an estimate conversation, but they cannot establish every measurement or concealed condition. A final proposal needs the agreed scope, selections, access requirements, and appropriate site checks.' },
  ],
  sources: [hiringSource],
  relatedServices: [{ label: 'Bathroom remodeling in Queens', href: '/bathroom-remodeling-queens' }, { label: 'Tile installation in Queens', href: '/tile-installation-queens' }, { label: 'Cabinet installation in Queens', href: '/cabinet-installation-queens' }],
};

export const remodelPermitGuide: BlogPost = {
  slug: 'nyc-kitchen-bathroom-remodel-permits-queens',
  title: 'Does Your Queens Kitchen or Bathroom Remodel Need a Permit?',
  description: 'Check NYC permit questions by remodeling scope, separate building approval from DOB requirements, and know what to confirm before agreeing to the work.',
  eyebrow: 'Before work begins',
  publishDate: '2026-05-10', modifiedDate: '2026-10-02', readTime: '5 min read',
  heroImage: '/gallery/kitchen-cabinets/3.jpg',
  heroAlt: 'Gray kitchen cabinets, patterned backsplash, range, and wood look floor.',
  primaryKeyword: 'NYC kitchen bathroom remodel permits Queens',
  keywords: ['bathroom remodel permit NYC', 'kitchen renovation permit Queens', 'NYC cosmetic renovation', 'apartment remodeling building approval'],
  intro: [
    'The room name does not decide the permit. Repainting a kitchen and moving its plumbing are different scopes. NYC DOB lists certain minor surface work as exempt from a work permit, while a renovation involving building systems or structural changes needs closer review.',
    'Write down exactly what is changing before asking whether your Queens kitchen or bathroom needs a permit. Use the official guidance linked here and the appropriate licensed professional to confirm requirements for the actual property and work.',
  ],
  sections: [
    {
      heading: 'Which description matches your plan?',
      body: ['Use this as a starting point for the conversation, then check the complete scope. Combining several small tasks can bring in work that requires a different review.'],
      comparison: {
        caption: 'NYC remodeling scope and permit questions',
        headings: ['Work you are considering', 'What to confirm'],
        rows: [
          ['Paint, plaster, cabinets, or floor resurfacing', 'DOB lists examples of minor work that may not need a work permit. Confirm that the project includes no additional regulated work.'],
          ['Direct faucet, sink, or toilet replacement', 'DOB describes a narrow cosmetic replacement exception when the existing shutoff valves and fixture trap are unchanged. Check the actual plumbing scope with a licensed professional.'],
          ['Moving pipes or changing fixture locations', 'Ask the Licensed Master Plumber about the required filing, permits, tests, and inspections. A same room location does not by itself make piping work cosmetic.'],
          ['Gas, electrical, structural, or layout changes', 'Have the relevant licensed trade and, where required, architect or engineer determine the filing and approval path before pricing the work as a surface update.'],
        ],
      },
      links: [permitSource, plumbingSource, renovationSource],
    },
    {
      heading: 'A permit exception does not remove licensing requirements',
      body: [
        'A cabinet replacement can be exempt from a DOB work permit and still require a Home Improvement Contractor license. DOB also identifies ordinary plumbing maintenance and repair that requires a Licensed Master Plumber even when a permit is not needed.',
        'Check the business performing the work and the professionals responsible for each trade. A general renovation business name is not a substitute for a plumbing or electrical credential.',
      ],
      links: [permitSource, licenseSource],
    },
    {
      heading: 'Ask your building a separate question',
      body: [
        'If you live in a co op, condo, or rental, ask the managing agent or owner what approval and work rules apply. Those requirements are separate from the City permit question. A building permission letter does not decide whether DOB permits are required.',
        'Request the current renovation requirements before setting a start date. Clarify access hours, insurance paperwork, elevator use, protection of common areas, and any required review of the proposed work. Then give that information to the people preparing your estimate.',
      ],
    },
    {
      heading: 'Turn the permit discussion into written responsibilities',
      body: [
        'Before you agree to the work, know who determines the required permits, who obtains them, which fees are included, and how their status will be checked. NYC DCWP guidance requires written permit disclosure before entering a home improvement contract.',
        'DOB notes that kitchen and bathroom work can require plans and permits depending on complexity. Where design filings are needed, involve the registered architect or professional engineer early enough to define the scope. Keep the estimate, the building review, and the filing schedule connected.',
      ],
      links: [hiringSource, renovationSource],
    },
    {
      heading: 'Bring the existing layout and the proposed changes',
      body: [
        'Mark the sink, toilet, tub, shower, range, and any wall you want to change on a rough plan. Add photos and explain whether gas, drains, supply lines, outlets, or ventilation are involved. You do not need a polished drawing to show the difference between keeping a layout and changing it.',
        'When contacting LOKEIL, share those changes and the building requirements with your room photos. The right next step depends on the scope, rather than a blanket promise that every remodel is permit free.',
      ],
    },
  ],
  faqs: [
    { question: 'Does painting a bathroom need a NYC DOB permit?', answer: 'DOB lists painting among minor alterations that may not need a work permit. Confirm that the full project contains only exempt work and check any separate building requirements.' },
    { question: 'Does replacing a vanity mean the plumbing is permit free?', answer: 'No. The plumbing work must be reviewed on its own. DOB describes direct fixture replacement as cosmetic only within its stated limits, including unchanged shutoff valves and fixture trap. Moving or altering piping changes the question.' },
    { question: 'Is co op or condo approval the same as a DOB permit?', answer: 'No. Your building can have its own renovation approval and access requirements. Those do not replace City permits or licensed trade requirements where they apply.' },
  ],
  sources: [permitSource, plumbingSource, renovationSource, hiringSource, licenseSource],
  relatedServices: [{ label: 'Kitchen remodeling in Queens', href: '/kitchen-remodeling-queens' }, { label: 'Bathroom remodeling in Queens', href: '/bathroom-remodeling-queens' }],
};

export const showerTileGuide: BlogPost = {
  slug: 'shower-tile-installation-queens-guide',
  title: 'Behind Shower Tile: The Layers and Decisions That Matter',
  description: 'See a shower wall layer illustration, real tile progress photos, and practical questions about waterproofing, niches, layout, and shower tile installation in Queens.',
  eyebrow: 'Inside the shower wall',
  publishDate: '2026-05-10', modifiedDate: '2026-10-02', readTime: '5 min read',
  heroImage: '/gallery/bathroom-tiles/6.jpg',
  heroAlt: 'Glass enclosure framing pale shower wall tile and a recessed niche.',
  primaryKeyword: 'shower tile installation Queens',
  keywords: ['shower tile installation Queens', 'layers behind shower tile', 'shower waterproofing membrane', 'shower niche tile layout'],
  intro: [
    'Glass makes this shower easy to see. The pale tile, niche, corners, and floor edges become part of one uninterrupted view. The waterproofing is concealed, however, so this finished photograph cannot tell you which assembly is behind the tile.',
    'When planning shower tile installation in Queens, ask about both the finished layout and the wall and base system. A good reference photo explains the look you want. A written assembly scope explains the work the finish will cover.',
  ],
  sections: [
    {
      heading: 'Read the wall from the structure to the tile',
      body: [
        'The illustration shows one general bonded sheet membrane wall concept. It separates the visible tile from the support and water protection beneath it. Other systems use applied coatings or integrated waterproof boards, with their own requirements.',
        'Schluter describes bonded waterproofing as a membrane connected to suitable backing and a compatible shower base and drain. The wall illustration alone does not show that complete water management system. Ask for the specified products and their installation instructions, rather than combining layers from unrelated methods.',
      ],
      visual: {
        src: '/process/guides/shower-wall-layers.webp',
        alt: 'Exploded schematic of a shower wall with five numbered layers: framing, backing, a thin sheet membrane, setting mortar, and tile.',
        width: 1448, height: 1086,
        caption: 'Generated educational illustration of one wall concept, not a record of the photographed project. Layer thickness and spacing are exaggerated. Fasteners, membrane bonding, seams, corners, and the base connection are omitted for clarity.',
        legend: [
          { label: 'Framing', detail: 'Supports the wall and any planned niche or fixture blocking.' },
          { label: 'Suitable backing', detail: 'Provides a stable surface compatible with the specified shower system.' },
          { label: 'Bonded sheet membrane', detail: 'Protects the backing when connected and detailed as the complete system requires.' },
          { label: 'Setting mortar', detail: 'Bonds the tile to the prepared assembly using a compatible material.' },
          { label: 'Tile finish', detail: 'Creates the visible surface. Tile and grout alone are not the shower waterproofing plan.' },
        ],
      },
      links: [waterproofSource],
    },
    {
      heading: 'The open niche is the moment to ask questions',
      body: [
        'This real progress photo shows the niche interior still open while surrounding gray tile is in place. It makes a useful question visible: how will the opening connect to the wet area assembly before its finish covers the detail? The photograph does not establish the specified waterproofing product or installation sequence.',
        'Choose niche position around reach and the bottles you use. Discuss the sill, corners, tile thickness, and edge treatment together. Ask how water will shed back into the shower and how the opening will be protected according to the chosen system.',
      ],
      visual: {
        src: '/gallery/bathroom-tiles/9.jpg',
        alt: 'Gray shower wall tile around an unfinished recessed niche with exposed masonry inside.',
        width: 900, height: 1200,
        caption: 'A LOKEIL construction photograph showing an unfinished opening, rather than a completed shower enclosure.',
      },
      links: [{ label: 'See the open shower niche photo story', href: '/blog/an-open-shower-niche-before-the-tile-edges-are-finished' }],
    },
    {
      heading: 'Let the full wall decide the first tile',
      body: [
        'A tile sample cannot show the cuts at the ceiling, the shower opening, the niche, and the controls. Review the full wall layout before setting starts. A small shift in the starting line can replace a narrow edge piece with a more balanced cut.',
        'Bring the glass and fixture plan into that conversation. The tile will define the finished opening, and the glass will expose its edges. Confirm which measurements must wait until the finished surfaces are ready.',
      ],
      list: ['Check where full tiles and cut pieces land around the niche.', 'Confirm the outside edge profile and corner treatment.', 'Look at floor tile size together with the drain and planned slope.'],
    },
    {
      heading: 'Keep a record before the details disappear',
      body: [
        'Ask for the product information and progress photos at the agreed stages before tile conceals the wall and base work. Photos can document what was visible at a particular stage; they do not replace required checks or prove the entire installation by themselves.',
        'At the final walkthrough, look at the grout, flexible joints, trim, niche edges, glass, and fixture fit. Ask when the selected products allow the shower to be used and how to clean them. Follow the actual product and installer guidance rather than a universal waiting time.',
      ],
    },
  ],
  faqs: [
    { question: 'What layers are behind shower tile?', answer: 'One bonded membrane wall concept uses structural support, suitable backing, a waterproof membrane, compatible setting mortar, and tile. Other shower systems differ. The wall, base, drain, joints, and openings must be detailed as a compatible complete assembly.' },
    { question: 'Are shower tile and grout enough to waterproof the wall?', answer: 'No. Do not use the visible tile and grout as the waterproofing plan. Ask which suitable backing and water management system will be installed and how corners, niches, penetrations, and the shower base will connect.' },
    { question: 'Can a finished shower photo prove waterproofing was done correctly?', answer: 'No. A finished photo shows visible surfaces and layout. Product specifications, appropriate installation checks, and records from the concealed stages are needed to assess the work behind the tile.' },
  ],
  sources: [waterproofSource],
  relatedServices: [{ label: 'Shower tile installation in Queens', href: '/tile-installation-queens' }, { label: 'Bathroom remodeling in Queens', href: '/bathroom-remodeling-queens' }],
};
