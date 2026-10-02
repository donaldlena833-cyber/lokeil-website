import type { BlogPost } from '../blogData';

export const financialDistrictPost: BlogPost = {
  slug: 'a-narrow-bathroom-with-tile-that-keeps-the-room-calm',
  title: 'A Narrow FiDi Bathroom Should Work From the Door In',
  description: 'Before changing a small Financial District bathroom, trace the path between the vanity, toilet, and shower. A finish upgrade should make daily use easier.',
  eyebrow: 'Financial District · Manhattan',
  publishDate: '2026-10-01', modifiedDate: '2026-10-02', readTime: '5 min read',
  heroImage: '/gallery/bathroom-tiles/2.jpg',
  heroAlt: 'LOKEIL bathroom photographed from the doorway, with a slim vanity on the left, toilet ahead, glass shower, and flowing patterned floor.',
  primaryKeyword: 'Financial District bathroom renovation',
  keywords: ['Financial District bathroom renovation', 'FiDi small bathroom planning', 'narrow apartment bathroom layout'],
  intro: [
    'Stand at the doorway of this bathroom and the floor draws you in. Its flowing pattern reaches past the vanity toward the shower. The pale walls let that pattern breathe. But the most useful part of this photograph is the passage between the fixtures: every cabinet corner and open door has to share it.',
    'For a small FiDi bathroom, that passage is a better place to begin than a shopping cart of fixtures. The goal is a room where you can reach the sink, open a drawer, get into the shower, and clean the floor without negotiating around yesterday’s design decision.',
  ],
  sections: [
    {
      heading: 'The building is part of the brief',
      body: [
        'The Financial District includes residential buildings with very different histories. NYC’s Comptroller has documented the economics of office-to-residential conversions, but a neighborhood-wide trend does not identify your apartment’s construction or alteration rules. A converted building, an older residential building, and a newer tower can each present different access and approval questions.',
        'Ask the manager for the alteration package before committing to a start date. Find out who reviews the scope, which working hours apply, how deliveries and debris move, and what contractor documentation is required. Share those documents with the estimate request. A bathroom that is small on a floor plan can still require substantial coordination outside the apartment.',
      ],
      references: [{ label: 'NYC Comptroller: office-to-residential conversions in NYC', href: 'https://comptroller.nyc.gov/reports/office-to-residential-conversions-in-nyc-economics-and-fiscal-estimates/' }],
    },
    {
      heading: 'Measure what opens, not only what fits',
      body: [
        'In the LOKEIL photo, the vanity, toilet, and shower share a long, narrow room. The vanity’s depth affects the walking space even if its width fits neatly against the wall. The shower door is another moving edge. A floor plan that shows only closed fixtures misses the moment when you actually use them.',
        'Measure the room and the fixtures, then add the entry-door swing, shower-door movement, and the open drawers. Check where you stand while using the sink and where another person would pass. A taped outline can help you compare cabinet depths before ordering, but it does not replace a measured layout or a professional clearance review where required.',
        'Also check cleaning access. Can you reach beside the vanity and around the toilet? Can the shower hardware be serviced? The room will be used long after the photo is taken; an inaccessible sliver of floor is a maintenance problem, even when it looks tidy from the doorway.',
      ],
    },
    {
      heading: 'Give the pattern a place to lead',
      body: [
        'The patterned floor is the strongest finish in this room. Its long lines follow the approach from the doorway, while the larger pale wall tiles keep the surrounding surfaces quieter. That relationship matters more than whether each sample looks attractive on its own.',
        'If you want a similar balance, view several floor pieces together and look from the entry. Check the repeat, the threshold, and the perimeter cuts. Then compare the floor with the vanity front and wall finish under the light you plan to use. A small sample can hide a busy repeat or a color that changes beside the cabinet.',
        'Choosing one dominant pattern is a practical way to control the amount of visual activity in a compact room. It is not a rule against color. It is a reason to decide which surface should get your attention and which ones should support it.',
      ],
    },
    {
      heading: 'Two useful scopes for a small room',
      body: [
        'If the room already works, a finish-focused renovation can begin with the existing arrangement: tile condition, vanity storage, paint, mirror, and the edges between finishes. If a door conflict or an unusable cabinet is the reason for renovating, describe that problem first. Replacing fixtures with similarly inconvenient ones will not solve it.',
        'Moving a toilet, shower, outlet, or wall changes the scope discussion. NYC DOB’s guidance connects permit requirements to the complexity of the work. Discuss the proposed changes and the building review before assuming that a room’s small size makes the project simple.',
      ],
      references: [{ label: 'NYC DOB: planning kitchen and bathroom alterations', href: 'https://www.nyc.gov/site/buildings/property-or-business-owner/renovating-kitchens-bathrooms.page' }],
    },
    {
      heading: 'An estimate request that shows the squeeze',
      body: [
        'Send LOKEIL a photo from the doorway and another from the shower looking back. Photograph the vanity with its drawers open, the shower door in use, and the threshold. Include approximate room dimensions and the one daily frustration you want the work to fix.',
        'Owners, residents coordinating with an owner, and property managers can use the brief below. Add the alteration package if you have it, and tell us whether this is the apartment’s only bathroom. Those details help start a scope conversation that accounts for the room and the building around it.',
      ],
    },
  ],
  faqs: [],
  processDiagram: { src: '/editorial/fidi-room-study.png', alt: 'Conceptual overhead cutaway of a narrow bathroom, with a vanity, toilet, shower, and the shared walking passage highlighted.', caption: 'AI-generated planning illustration. Door movement and the walking path are conceptual; no dimensions or compliant clearances are established by this drawing.' },
  diagramAfter: 1, diagramHeading: 'See the room with its doors open',
  relatedServices: [{ label: 'Bathroom remodeling and project examples', href: '/bathroom-remodeling-queens' }, { label: 'Flooring work', href: '/flooring-installation-queens' }, { label: 'Browse project photographs', href: '/gallery' }],
  editorial: {
    neighborhood: 'Financial District, Manhattan',
    illustrationAspect: 'portrait',
    photoCaption: 'LOKEIL project photograph used to examine a narrow layout. Its location is not documented; this is planning guidance for FiDi, not a FiDi project case study.',
    takeaway: 'A fixture fits when the room works with the doors and drawers open.',
    choices: [{ label: 'Keep the arrangement', detail: 'Focus on finishes and storage after checking how the current room works in daily use.' }, { label: 'Solve a layout conflict', detail: 'Identify the specific squeeze, then review possible changes with the building and relevant professionals.' }],
    estimateTitle: 'Show us what feels tight in your FiDi bathroom',
    estimateScope: 'Narrow bathroom layout, flooring, and vanity clearances',
  },
};
