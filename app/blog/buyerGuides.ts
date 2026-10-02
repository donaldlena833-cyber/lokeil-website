import type { BlogPost } from './blogData';

const cabinetManual = {
  label: 'IKEA: Kitchen installation guide, March 2026',
  href: 'https://www.ikea.com/us/en/files/pdf/49/6f/496ff2f6/kitchen_installation_guide_mar_2026.pdf',
};
const floorProfiles = {
  label: 'Schluter: Floor transition and edge profiles',
  href: 'https://www.schluter.com/schluter-us/en_US/Profiles/For-Floors/c/P-FF',
};
const leadGuidance = {
  label: 'EPA: Renovation, Repair and Painting guidance for contractors',
  href: 'https://www.epa.gov/lead/renovation-repair-and-painting-program-contractors',
};

export const buyerPlanningGuides: BlogPost[] = [
  {
    slug: 'bathroom-vanity-replacement-queens-planning-guide',
    title: 'Bathroom Vanity Replacement in Queens: Check the Fit',
    description: 'Check vanity depth, drawer clearance, plumbing space, and the old cabinet footprint before ordering a replacement for your Queens bathroom.',
    eyebrow: 'Before you order a vanity',
    publishDate: '2026-05-24', modifiedDate: '2026-10-02', readTime: '4 min read',
    heroImage: '/gallery/bathroom-tiles/3.jpg',
    heroAlt: 'White bathroom vanity beside a glass shower panel, with patterned floor tile below.',
    primaryKeyword: 'bathroom vanity replacement Queens',
    keywords: ['bathroom vanity replacement Queens', 'vanity depth and drawer clearance', 'bathroom cabinet installation', 'vanity plumbing space'],
    intro: [
      'A vanity can fit the wall and still make the bathroom awkward to use. In this photo, the cabinet, shower glass, and walkway meet in a small area. The space beside the sink matters just as much as the width printed on a product page.',
      'Before ordering a bathroom vanity replacement in Queens, check what happens when you open it, stand in front of it, and clean around it. Those everyday movements are easier to plan now than after the cabinet arrives.',
    ],
    sections: [
      {
        heading: 'Start with the depth, not the finish color',
        body: [
          'Measure from the wall to the front of the existing countertop, then compare that distance with the proposed cabinet and top. A deeper sink may be appealing, but it also moves the front edge farther into the room.',
          'Mark that proposed edge on the floor with removable tape. Open the bathroom door and stand where you normally use the sink. This simple check makes the size more tangible than a cabinet photograph.',
        ],
      },
      {
        heading: 'Open the drawers on paper before buying them',
        body: [
          'Drawers need space in two places: outside the cabinet when they open, and inside it around the drain and supply lines. Take a clear photo inside your existing vanity. Compare it with the new cabinet drawing, including any drawer cutouts and shelves.',
          'If the layout conflicts, ask whether another cabinet design works with the existing plumbing. Do not assume that cutting a drawer or moving a pipe is a small adjustment already included in installation.',
        ],
        comparison: {
          caption: 'Vanity designs and the fit questions they raise',
          headings: ['Design you like', 'Check before ordering'],
          rows: [
            ['Full drawers', 'Drawer travel outside the cabinet and usable space around the plumbing inside it.'],
            ['Wall mounted cabinet', 'Suitable wall support, mounting instructions, and the floor and wall finish that will become visible.'],
            ['Cabinet standing on the floor', 'The base footprint, access to connections, and the finish where it meets the existing floor.'],
            ['Smaller replacement', 'Whether the old cabinet concealed missing tile, wall damage, or a different paint line.'],
          ],
        },
      },
      {
        heading: 'The old footprint is part of the replacement',
        body: [
          'Look along the cabinet sides and base for tile cuts, trim, paint edges, or an exposed gap. A smaller vanity can uncover more of that area. A wall mounted model can reveal the whole floor beneath it.',
          'Ask the installer to include the surrounding repair work in the scope. If the concealed finish cannot be checked until removal, agree on how that discovery will be assessed and priced.',
        ],
        links: [{ label: 'Compare the finish work included in a bathroom estimate', href: '/blog/bathroom-remodeling-cost-queens-ny' }],
      },
      {
        heading: 'Bring the mirror and glass into the same decision',
        body: [
          'In the opening photo, shower glass runs close to the vanity. Before choosing a wider top, consider access for wiping the side of the cabinet and the glass. Check the faucet, mirror, and light positions against the center of the proposed sink.',
          'If new shower glass is also planned, share both product ideas together. A cabinet choice can affect the space left for a glass opening or handle. The photo illustrates the relationship; it does not provide measurements for another bathroom.',
        ],
        links: [{ label: 'Look more closely at this vanity and shower arrangement', href: '/blog/vanity-shower-glass-and-floor-tile-in-one-small-bathroom' }],
      },
      {
        heading: 'Make the first conversation a fit check',
        body: ['Send LOKEIL the proposed vanity link, cabinet and countertop dimensions, a wide room photo, a plumbing photo, and close views of the base and side edges. Say whether the sink location and shower glass will stay. That gives the installer a specific purchase to review before you commit to it.'],
      },
    ],
    faqs: [
      { question: 'Can I replace a vanity with a smaller cabinet?', answer: 'Possibly, but first check what the old cabinet covers. A smaller footprint can expose unfinished floor tile, wall patches, or paint lines. Include those repairs when comparing the replacement scope.' },
      { question: 'Will drawers fit around my existing vanity plumbing?', answer: 'That depends on the cabinet design and pipe locations. Compare an interior plumbing photo with the manufacturer drawing before ordering. Drawer cutouts, shelves, and access for connections all need review.' },
    ],
    relatedServices: [{ label: 'Bathroom remodeling', href: '/bathroom-remodeling-queens' }, { label: 'Cabinet installation', href: '/cabinet-installation-queens' }],
  },
  {
    slug: 'bathroom-tile-installation-queens-planning-guide',
    title: 'Bathroom Tile in Queens: Set the Layout Before Work',
    description: 'Plan bathroom tile cuts, niche alignment, grout, and exposed edges with a layout review before tile installation begins in your Queens home.',
    eyebrow: 'Choosing the tile layout',
    publishDate: '2026-05-22', modifiedDate: '2026-10-02', readTime: '4 min read',
    heroImage: '/gallery/bathroom-tiles/8.jpg',
    heroAlt: 'Large shower wall tiles with spacing clips, a decorative niche band, and small mosaic floor tiles during installation.',
    primaryKeyword: 'bathroom tile installation Queens',
    keywords: ['bathroom tile installation Queens', 'shower tile layout', 'bathroom tile edges', 'tile niche alignment'],
    intro: [
      'The tile in a box is only part of what you are choosing. Once it reaches the wall, its size sets the grout grid, the pieces at corners, and the cuts around a niche. The same tile can give a room a different rhythm depending on where that grid begins.',
      'The LOKEIL progress photo above brings three scales together: broad wall tiles, a narrow decorative band, and a small mosaic floor. Use it to think about the layout you want reviewed before bathroom tile installation begins.',
    ],
    sections: [
      {
        heading: 'Choose the view you want to organize',
        body: [
          'Stand at the bathroom doorway and notice the first wall you see. Then look at the wall you face in the shower. Ask the installer to show how the proposed tile grid lands on those surfaces, including the pieces at both ends.',
          'Centering a pattern on one wall may change the cuts on another. Decide which view matters most, then review that tradeoff on a measured layout. A reference photo cannot settle it without the actual room dimensions.',
        ],
      },
      {
        heading: 'Give the niche its own drawing',
        body: [
          'In this photo, a decorative band crosses the niche area. That relationship needs planning: the niche opening, surrounding joints, inside surfaces, and exposed edges all meet in a small space.',
          'Ask to see the niche position against the tile grid before the wall is closed and tiled. If a shelf or trim profile is planned, include it in that review. Moving the niche or changing the tile size later can change the arrangement.',
        ],
        links: [{ label: 'See this wall tile and mosaic floor detail', href: '/blog/large-shower-wall-tile-meets-a-mosaic-floor' }],
      },
      {
        heading: 'Review the edge and grout with the actual sample',
        body: [
          'A tile face does not show how its edge will look beside paint, at a doorway, or around a recess. Put the tile sample next to the proposed trim or edge treatment. Ask which exposed edges the estimate includes.',
          'Look at a grout sample with the tile under the room lighting. A close color match can soften the grid; a stronger contrast makes the joints more visible. Neither choice removes the need to agree on the joint layout and the product instructions.',
        ],
        list: ['Doorway and wall ends: where does the tile stop?', 'Niche and shelf edges: what finish will be visible?', 'Corners and changes of surface: what detail is proposed?', 'Tile and grout samples: do you like them together in the actual light?'],
      },
      {
        heading: 'Approve the appearance and the preparation separately',
        body: [
          'A beautiful layout does not tell you what is behind it. Ask for the backing, waterproofing, and preparation scope as well as the visible tile plan. Keep those decisions clear when comparing quotes.',
          'For your LOKEIL inquiry, include the tile link or sample photo, the pattern you like, the surfaces being tiled, and any niche or bench ideas. Ask for a layout review before the tile is installed.',
        ],
        links: [{ label: 'Understand the layers behind shower tile', href: '/blog/shower-tile-installation-queens-guide' }],
      },
    ],
    faqs: [{ question: 'Should a shower niche line up with the tile joints?', answer: 'It is a design decision to review before construction and tiling. The niche position, tile size, joints, and edge treatment affect each other. Ask for a measured layout that shows the opening and the cuts around it.' }],
    relatedServices: [{ label: 'Tile installation', href: '/tile-installation-queens' }, { label: 'Bathroom remodeling', href: '/bathroom-remodeling-queens' }],
  },
  {
    slug: 'kitchen-remodeling-brooklyn-vs-queens-planning-guide',
    title: 'Brooklyn and Queens Kitchens: Compare the Actual Rooms',
    description: 'Compare Brooklyn and Queens kitchen renovation plans by the actual layout, delivery access, building rules, and work included in each estimate.',
    eyebrow: 'Comparing two kitchen projects',
    publishDate: '2026-05-20', modifiedDate: '2026-10-02', readTime: '3 min read',
    heroImage: '/gallery/kitchen-cabinets/3.jpg',
    heroAlt: 'Finished gray kitchen cabinets with a patterned backsplash, range, and wood look floor.',
    primaryKeyword: 'kitchen remodeling Brooklyn and Queens',
    keywords: ['kitchen remodeling Brooklyn', 'kitchen remodeling Queens', 'compare kitchen renovation scope', 'apartment kitchen delivery access'],
    intro: [
      'If you are comparing a Brooklyn apartment with a Queens home, start with the rooms and buildings in front of you. A borough name does not reveal the cabinet fit, the utility work, or how materials reach the kitchen.',
      'LOKEIL serves both boroughs. The useful comparison is what each property needs and what each written estimate covers. There is no automatic borough price difference published here.',
    ],
    sections: [
      {
        heading: 'Put the same questions beside both properties',
        body: ['Use one set of notes for each kitchen. This makes a difference in scope visible instead of attributing it to the neighborhood.'],
        comparison: {
          caption: 'Compare the conditions of two kitchens',
          headings: ['Question for each property', 'Why the answer affects the plan'],
          rows: [
            ['Are the sink, range, and major appliances staying in place?', 'A retained layout and a plan involving utility changes need different work reviews.'],
            ['What condition are the walls and floor in?', 'The cabinet and finish plan must account for the actual surfaces being kept or repaired.'],
            ['How will cabinets and counters reach the room?', 'Stairs, elevator dimensions, doorways, and delivery arrangements need checking for the selected products.'],
            ['Which building work rules apply?', 'Work hours, common area protection, paperwork, and access arrangements can affect coordination.'],
            ['What is supplied in the estimate?', 'Material supply, removal, installation, and final finishing should be compared on the same basis.'],
          ],
        },
      },
      {
        heading: 'The kitchen photograph answers a narrower question',
        body: [
          'The opening photo shows gray cabinetry, a patterned backsplash, and a range within one cabinet run. It can help you describe a finish combination. It cannot tell you the building access, work schedule, utility changes, or cost behind that room.',
          'The photographed job location is not confirmed. Use it as a LOKEIL finish reference when describing either property, then add photos and measurements from the kitchen you actually want to renovate.',
        ],
        links: [{ label: 'Explore the cabinet and backsplash relationship in this photo', href: '/blog/gray-kitchen-cabinets-with-a-patterned-backsplash' }],
      },
      {
        heading: 'Ask for a scope comparison you can act on',
        body: [
          'When sending two kitchen inquiries, label the photos for each property and give its neighborhood, rough layout, access details, and building requirements. Identify which fixtures and surfaces stay in each room.',
          'Compare what each proposal includes before comparing totals. If one project moves services and the other keeps them, ask the relevant professionals to review those changes and make the difference explicit.',
        ],
        links: [{ label: 'Plan the cabinet, counter, and appliance decisions', href: '/blog/kitchen-remodeling-queens-planning-guide' }, { label: 'Check the permit questions raised by the proposed work', href: '/blog/nyc-kitchen-bathroom-remodel-permits-queens' }],
      },
    ],
    faqs: [],
    relatedServices: [{ label: 'Kitchen remodeling', href: '/kitchen-remodeling-queens' }, { label: 'Home remodeling', href: '/home-remodeling-queens' }],
  },
  {
    slug: 'apartment-renovation-queens-planning-guide',
    title: 'Apartment Renovation in Queens: Plan Room by Room',
    description: 'Plan a Queens apartment renovation around connected rooms, usable spaces, surface repairs, deliveries, and the decisions needed before each phase.',
    eyebrow: 'Living through a renovation',
    publishDate: '2026-05-14', modifiedDate: '2026-10-02', readTime: '5 min read',
    heroImage: '/gallery/bathroom-painting/2.jpg',
    heroAlt: 'A bathroom during renovation with painted gray walls, unfinished wallboard, and pale veined floor tile.',
    primaryKeyword: 'apartment renovation Queens',
    keywords: ['apartment renovation Queens', 'room by room renovation plan', 'occupied apartment renovation', 'painting and flooring sequence'],
    intro: [
      'An apartment renovation has two plans: the work being done and the way you will use the home while it happens. A room can be ready for paint while its doorway still serves as the delivery route for another room.',
      'Before arranging a Queens apartment renovation, make a simple map of the spaces involved. Mark what changes, what stays in use, and where people and materials need to pass.',
    ],
    sections: [
      {
        heading: 'Give each room a clear stopping point',
        body: ['“Renovate the apartment” leaves too much open. For each room, name the final condition you expect: repaired and painted walls, a new floor and trim, replacement cabinetry, or a rebuilt wet area. Mark the surfaces and fixtures staying in place.'],
        list: ['Room: what is changing?', 'Finish: what should be complete at handover?', 'Keep: what needs protection?', 'Dependency: what must happen elsewhere first?'],
      },
      {
        heading: 'Find the work that connects the rooms',
        body: [
          'Continuous flooring joins rooms at doorways. Shared paint colors meet at corners. A kitchen delivery may pass through the living area. Bring those connections into the plan so the final edge of one phase does not obstruct the next.',
          'The order depends on the selected materials and actual scope. Ask which surfaces must be ready before cabinets, trim, floors, or paint are finished, and which finished areas will still need protection during later work.',
        ],
      },
      {
        heading: 'Set aside a usable part of the home',
        body: ['If you expect to remain in the apartment, tell the contractor which rooms you need daily. Discuss access to sleeping space, the kitchen, the bathroom, and exits. Do not assume a room remains usable just because no finish work is planned there; it may be needed for storage or access.'],
        links: [{ label: 'Plan work when the apartment has only one bathroom', href: '/blog/apartment-bathroom-remodeling-ridgewood-queens-nyc-guide' }],
      },
      {
        heading: 'Reserve space for the things arriving',
        body: ['Decide where deliveries, tools, removed materials, and household belongings will go. Check the route through doors and common areas. Give the contractor the building work rules before promising a delivery or start date. A room plan works better when it includes the space around the work.'],
      },
      {
        heading: 'Look at the repair before choosing the paint',
        body: [
          'The opening LOKEIL photo shows gray painted walls alongside unfinished wallboard and edges. It is a useful reminder that a color selection and a repaired surface are separate decisions. Agree on the repair scope before judging the final finish.',
          'In a home built before 1978, work that disturbs old painted surfaces raises a separate lead safety question. EPA guidance generally requires paid renovation contractors to follow its certification and work practice rules for covered work. Ask who will assess the surfaces and handle the work before demolition or sanding is scheduled.',
        ],
        links: [leadGuidance, { label: 'See the surface preparation behind this room', href: '/blog/blue-gray-bathroom-walls-beside-a-new-floor' }],
      },
      {
        heading: 'Agree on what makes a phase ready',
        body: ['A phase is more useful when it has a condition to meet, not just a date. Ask what must be delivered, measured, approved, or repaired before the next task starts. If a selection is still open, name who makes it and when it is needed.'],
      },
      {
        heading: 'Walk the connections at the end',
        body: ['Check room transitions, trim, touchups, cabinet operation, and the areas used for access and protection. Keep a shared list of remaining items. When contacting LOKEIL, a room by room scope and a note about living arrangements are more useful than a request to make everything new at once.'],
      },
    ],
    faqs: [],
    sources: [leadGuidance],
    relatedServices: [{ label: 'Home remodeling', href: '/home-remodeling-queens' }, { label: 'Plaster and drywall finishing', href: '/plaster-drywall-finishing-queens' }, { label: 'Interior painting', href: '/interior-painting-queens' }],
  },
  {
    slug: 'bathroom-flooring-installation-queens-guide',
    title: 'Bathroom Flooring in Queens: Plan the Finished Height',
    description: 'Review bathroom floor height at the doorway, door clearance, exposed tile edges, and the proposed assembly before flooring installation in Queens.',
    eyebrow: 'Where the bathroom floor meets the hall',
    publishDate: '2026-05-12', modifiedDate: '2026-10-02', readTime: '4 min read',
    heroImage: '/gallery/bathroom-flooring/6.jpg',
    heroAlt: 'Patterned bathroom floor tile during renovation beside unfinished wallboard, a shower entry, and an unfinished doorway edge.',
    primaryKeyword: 'bathroom flooring installation Queens',
    keywords: ['bathroom flooring installation Queens', 'bathroom floor height', 'tile threshold transition', 'bathroom door clearance'],
    intro: [
      'The bathroom floor does not end with the tile pattern. It meets the hall, the door, the wall base, and the fixtures. A new assembly can change the finished height, even when the room layout stays the same.',
      'The patterned floor in this LOKEIL progress photo still has unfinished surroundings. Before planning bathroom flooring installation in Queens, look at those meeting points and ask what the final edge will be.',
    ],
    sections: [
      {
        heading: 'Ask for the finished height at the doorway',
        body: [
          'A tile thickness alone does not describe the completed floor. The proposed preparation and layers beneath it also matter. Ask the installer how the selected assembly will meet the adjacent floor after existing materials are removed or retained.',
          'The drawing below shows the question, not a construction specification. The assembly, materials, and transition must be chosen for the actual room.',
        ],
        visual: {
          src: '/planning/floor-height.svg', alt: 'Concept drawing comparing a higher bathroom floor with the adjoining hall and a transition between them.', width: 720, height: 400,
          caption: 'Illustrated planning concept, not a measured job detail or a prescribed flooring assembly.',
          legend: [{ label: 'Bathroom finish', detail: 'Review the total finished height of the selected assembly.' }, { label: 'Doorway transition', detail: 'Choose the edge detail for the actual difference in height.' }, { label: 'Adjacent floor', detail: 'Check the retained floor before agreeing on the meeting point.' }],
        },
      },
      {
        heading: 'Open the door over the proposed floor',
        body: [
          'Check the full swing of the bathroom door, not only the gap beneath it when closed. Ask whether the final height affects clearance and whether any door adjustment is included in the work.',
          'Also review the wall base, vanity footprint, and fixture connections. If the flooring scope changes how a fixture meets the floor, bring the relevant installer or trade into the decision before treating it as finish work alone.',
        ],
      },
      {
        heading: 'Choose the transition for the condition',
        body: [
          'Schluter offers different profile types for floors meeting at equal or different heights. That distinction is useful when discussing an exposed tile edge: the choice should follow the actual adjoining surfaces and elevation, rather than appearance alone.',
          'Ask which transition is proposed, where it will sit, and who supplies it. If your building specifies a sound control product or assembly, share that requirement before materials are selected. A water resistant finish by itself does not establish how the complete floor assembly manages water.',
        ],
        links: [floorProfiles],
      },
      {
        heading: 'Photograph the edge, not just the middle of the room',
        body: ['For a flooring inquiry, include the doorway from both sides, the bottom of the door, the vanity base, damaged areas, and the floor you want to keep next to the bathroom. Add the selected tile link and building requirements. Ask LOKEIL to include the preparation and transition detail in the scope.'],
        links: [{ label: 'Look at the boundary beside this patterned floor', href: '/blog/how-a-patterned-bathroom-floor-meets-the-shower' }],
      },
    ],
    faqs: [{ question: 'Can new bathroom tile make the floor higher?', answer: 'Yes, the completed height depends on the selected tile, preparation, and assembly, as well as what is removed or retained. Review the finished height against the adjoining floor and door clearance before installation.' }],
    sources: [floorProfiles],
    relatedServices: [{ label: 'Flooring installation', href: '/flooring-installation-queens' }, { label: 'Tile installation', href: '/tile-installation-queens' }],
  },
  {
    slug: 'walk-in-shower-remodel-queens-planning-guide',
    title: 'Walk In Showers in Queens: Entry, Glass, and Cleaning',
    description: 'Plan a walk in shower in Queens around the entry, glass opening, controls, cleaning access, and what the existing floor can support.',
    eyebrow: 'Using the shower every day',
    publishDate: '2026-05-12', modifiedDate: '2026-10-02', readTime: '4 min read',
    heroImage: '/gallery/bathroom-tiles/6.jpg',
    heroAlt: 'Pale tiled shower with a glass enclosure and a dark vanity beside it.',
    primaryKeyword: 'walk in shower remodel Queens',
    keywords: ['walk in shower remodel Queens', 'shower entry planning', 'shower glass opening', 'shower cleaning access'],
    intro: [
      'Picture the first step into your new shower. Where does your foot land, where do you reach for the controls, and what needs to open? Those questions make a shower plan more useful than choosing tile and glass separately.',
      'A walk in shower remodel in Queens should start with the existing floor and the way you want to enter and use the space. The finished LOKEIL photo is a visual reference, not proof of an accessible or curbless design.',
    ],
    sections: [
      {
        heading: 'Decide what the entry needs to do',
        body: ['Tell the contractor whether your priority is a lower step, more room to enter, easier cleaning, or a particular access need. A curbless idea needs review of the available floor construction, drainage, and waterproofing. Do not assume that removing a visible curb is the whole change.'],
        links: [{ label: 'Review the shower layers and water management', href: '/blog/shower-tile-installation-queens-guide' }],
      },
      {
        heading: 'Try the glass opening against the rest of the room',
        body: ['Draw the proposed glass and opening on a rough room plan. Check the nearby vanity, toilet, room door, handles, and standing area. Ask the glass provider to confirm measurements, clearances, and installation requirements for the selected enclosure.'],
        comparison: {
          caption: 'Glass arrangements to discuss for your room',
          headings: ['Arrangement', 'Question to resolve'],
          rows: [
            ['A hinged door', 'Where will the door and handle travel, and what must remain clear?'],
            ['A sliding enclosure', 'How much usable opening remains, and how will tracks and overlapping surfaces be cleaned?'],
            ['A fixed panel with an open entry', 'Does the layout manage water at the opening, and is the entry usable for the intended person?'],
          ],
        },
      },
      {
        heading: 'Reach the controls before stepping under the water',
        body: ['Discuss control and showerhead positions while the layout is still being reviewed. If you have a specific mobility or reach requirement, describe it clearly and ask the appropriate designer or installer to assess the complete arrangement. A wider opening alone does not establish accessibility.'],
      },
      {
        heading: 'Leave room to clean the surfaces you are adding',
        body: ['Look at the space between the glass and vanity, the inside corners, and any shelf or niche. Can you reach the surfaces with a cloth? Ask how the proposed door, hardware, and seals are maintained, using the actual product instructions. The most useful detail may be a small gap you can comfortably clean.'],
        links: [{ label: 'See a shower glass and vanity meeting point', href: '/blog/vanity-shower-glass-and-floor-tile-in-one-small-bathroom' }],
      },
      {
        heading: 'Describe the shower you need, then review the scope',
        body: ['Send wide bathroom photos, the existing entry and drain location, rough dimensions, and the glass style you are considering. Tell LOKEIL what is difficult about the current shower. If pipes, controls, or the floor layout would change, include that in the scope review before setting an installation date.'],
        links: [{ label: 'Check NYC permit questions for the proposed changes', href: '/blog/nyc-kitchen-bathroom-remodel-permits-queens' }],
      },
    ],
    faqs: [{ question: 'Can any bathroom be changed to a curbless shower?', answer: 'Do not assume so. The floor construction, drainage, waterproofing, room layout, and intended access needs must be reviewed together. The visible curb is only one part of the design.' }],
    relatedServices: [{ label: 'Bathroom remodeling', href: '/bathroom-remodeling-queens' }, { label: 'Tile installation', href: '/tile-installation-queens' }],
  },
  {
    slug: 'small-bathroom-remodel-ideas-queens-apartments',
    title: 'Small Queens Bathrooms: Make Storage Fit the Room',
    description: 'Compare storage and clearance ideas for a small Queens bathroom, including vanity depth, drawer movement, mirrors, niches, and cleaning access.',
    eyebrow: 'Making a small bathroom work',
    publishDate: '2026-05-10', modifiedDate: '2026-10-02', readTime: '3 min read',
    heroImage: '/gallery/bathroom-tiles/2.jpg',
    heroAlt: 'Compact bathroom with a white vanity, toilet, glass shower enclosure, and patterned floor tile.',
    primaryKeyword: 'small bathroom remodel ideas Queens',
    keywords: ['small bathroom remodel ideas Queens', 'small bathroom storage', 'vanity clearance', 'compact bathroom layout'],
    intro: [
      'In a small bathroom, more storage can also mean less room to move. The vanity in this LOKEIL photo shares a narrow room with the toilet and glass shower. Every additional cabinet needs a place to open and a path around it.',
      'Start your small Queens bathroom plan with the things you use each day. Decide what belongs within reach, what can live elsewhere, and which movement feels cramped in the current room.',
    ],
    sections: [
      {
        heading: 'Make a storage list before choosing a cabinet',
        body: ['Separate everyday items from spare supplies. A drawer that holds the items you use at the sink may be more valuable than a larger cabinet that pushes into the walkway. Bring that short list when comparing vanity interiors and mirror storage.'],
      },
      {
        heading: 'Give the opening movement a place on the plan',
        body: [
          'Mark the bathroom door, vanity drawers, and shower opening on the same sketch. Test one movement at a time, then think about how you normally use them together. A product can fit its wall without fitting the way the room is used.',
          'The concept drawing below highlights the space a cabinet door travels through. It is not a bathroom plan or a dimensional clearance standard.',
        ],
        visual: {
          src: '/planning/cabinet-opening.svg', alt: 'Top view concept showing a cabinet door swing beside an obstruction and the standing area in front of the cabinet.', width: 720, height: 440,
          caption: 'Illustrated movement check, not a measured room or installation instruction.',
          legend: [{ label: 'Cabinet front', detail: 'Include the actual cabinet and countertop depth.' }, { label: 'Opening movement', detail: 'Check the selected door or drawer travel against nearby fixtures.' }, { label: 'Usable space', detail: 'Leave the intended person room to stand, reach, and pass.' }],
        },
      },
      {
        heading: 'Compare storage by what it changes',
        body: ['Each idea solves one problem and raises another. Review the fit in your actual wall, cabinet, and shower construction before treating it as available space.'],
        comparison: {
          caption: 'Small bathroom storage ideas and their fit questions',
          headings: ['Storage idea', 'What to review'],
          rows: [
            ['A shallower vanity', 'Sink use, interior plumbing space, and the storage you give up.'],
            ['A mirror cabinet', 'Projection into the room or suitability of the wall for a recessed model.'],
            ['A shower niche', 'Position, wall construction, waterproofing detail, and the bottles it needs to hold.'],
            ['A wall mounted vanity', 'Wall support, exposed floor finish, and access for cleaning underneath.'],
          ],
        },
      },
      {
        heading: 'Show the cramped moment, not just the room',
        body: ['When contacting LOKEIL, include a wide photo and explain what happens now: a drawer meets the toilet, the shower door reaches the vanity, or supplies crowd the sink. Add the replacement ideas you like. The best starting brief identifies the everyday problem the remodel should solve.'],
        links: [{ label: 'Check a vanity before ordering', href: '/blog/bathroom-vanity-replacement-queens-planning-guide' }, { label: 'Think through the shower entry and glass', href: '/blog/walk-in-shower-remodel-queens-planning-guide' }],
      },
    ],
    faqs: [],
    relatedServices: [{ label: 'Bathroom remodeling', href: '/bathroom-remodeling-queens' }, { label: 'Cabinet installation', href: '/cabinet-installation-queens' }],
  },
  {
    slug: 'kitchen-remodeling-queens-planning-guide',
    title: 'Kitchen Remodeling in Queens: Order the Decisions',
    description: 'Plan a Queens kitchen renovation by connecting cabinet dimensions, appliance fit, counter measurement, backsplash edges, and delivery readiness.',
    eyebrow: 'Getting a kitchen ready for installation',
    publishDate: '2026-05-10', modifiedDate: '2026-10-02', readTime: '5 min read',
    heroImage: '/gallery/bathroom-painting/5.jpg',
    heroAlt: 'Cream kitchen cabinets and blue backsplash during renovation, with a protected floor and an open appliance space.',
    primaryKeyword: 'kitchen remodeling Queens',
    keywords: ['kitchen remodeling Queens', 'kitchen cabinet installation planning', 'appliance cabinet fit', 'countertop measurement', 'backsplash installation sequence'],
    intro: [
      'A kitchen can have its colors selected and still be missing the decisions needed to install it. A range size affects the cabinet opening. Cabinet placement affects counter measurement. The counter and outlets affect how the backsplash finishes.',
      'The cream cabinets and blue tile in this LOKEIL progress photo show a kitchen while work is still underway. Use it as a reminder to connect the selections, then agree on a project sequence for your own Queens kitchen.',
    ],
    sections: [
      {
        heading: 'Fix the appliance models before finalizing the openings',
        body: ['Collect the actual product dimensions and installation instructions for the range, refrigerator, dishwasher, sink, and ventilation equipment. Share them with the cabinet planner and the relevant installers. Include door movement, connection space, and manufacturer clearances in the review. A product category such as “standard range” is not a substitute for the selected model.'],
      },
      {
        heading: 'Make the cabinet plan fit the walls and the doors',
        body: [
          'Review the measured room, cabinet run, corners, and filler spaces together. In its March 2026 guide, IKEA describes fillers as part of fitting cabinets to walls while allowing doors and drawers to open. Its guidance is a useful product example; the cabinets in the photo are not identified as IKEA.',
          'Ask your installer which support, fastening, and alignment requirements apply to the cabinets you selected. Use their manufacturer instructions rather than treating every kitchen system as the same.',
        ],
        links: [cabinetManual],
      },
      {
        heading: 'Know what must be ready for the counter measurement',
        body: ['Ask the counter supplier what needs to be fixed in place before measuring or templating. Confirm the sink, faucet, appliance openings, seams, overhangs, and any other details they require. Keep the cabinet installer and counter supplier working from the same selections; a change made after measurement can affect the next step.'],
      },
      {
        heading: 'Let the backsplash finish the actual counter line',
        body: [
          'Choose the tile appearance early, then review its starting line, visible ends, corners, and outlet positions against the final kitchen arrangement. Ask when the tile layout will be checked and what needs to be complete first.',
          'The blue backsplash in the opening photo has a strong visual presence beside cream cabinetry. If you like that combination, send the photo as a color reference. It does not establish the product brand or the construction sequence used on that job.',
        ],
        links: [{ label: 'Look at this kitchen while the floor is protected for work', href: '/blog/protecting-a-kitchen-floor-while-cabinets-are-installed' }],
      },
      {
        heading: 'Check deliveries before taking the old kitchen apart',
        body: [
          'The IKEA installation guide advises checking that ordered parts and appliances are available before dismantling an old kitchen. For your project, agree on which products must be received and checked before removal can begin.',
          'Review delivery access and storage with the contractor and building. Ask how a missing or damaged item changes the work plan. Keep required utility and approval reviews connected to the installation sequence.',
        ],
        links: [{ label: 'Review the permit questions for kitchen changes', href: '/blog/nyc-kitchen-bathroom-remodel-permits-queens' }],
      },
      {
        heading: 'Put the decisions into one kitchen brief',
        body: ['Send LOKEIL the existing room photos, rough dimensions, proposed cabinet drawing, appliance links, and building requirements. Identify selections that are still open and items already ordered. A brief that names the next unresolved decision is easier to turn into an installation plan than a collection of unrelated inspiration images.'],
      },
    ],
    faqs: [
      { question: 'Should appliances be selected before the cabinet layout is final?', answer: 'Use the selected models and their installation instructions when reviewing cabinet openings, clearances, and connections. Confirm the plan with the cabinet planner and relevant installers before ordering or making changes.' },
      { question: 'When should a kitchen counter be measured?', answer: 'Ask the counter supplier what must be fixed in place before measuring or templating. Confirm their requirements for the cabinets, sink, faucet, appliance openings, and other selections rather than assuming one sequence applies to every product.' },
    ],
    sources: [cabinetManual],
    relatedServices: [{ label: 'Kitchen remodeling', href: '/kitchen-remodeling-queens' }, { label: 'Cabinet installation', href: '/cabinet-installation-queens' }, { label: 'Tile installation', href: '/tile-installation-queens' }],
  },
  {
    slug: 'apartment-bathroom-remodeling-ridgewood-queens-nyc-guide',
    title: 'Ridgewood Bathroom Renovation When It Is Your Only One',
    description: 'Plan a Ridgewood apartment bathroom renovation around daily use, protection, material readiness, and the conditions needed to return the room to service.',
    eyebrow: 'Planning your only bathroom',
    publishDate: '2026-06-05', modifiedDate: '2026-10-02', readTime: '3 min read',
    heroImage: '/gallery/bathroom-shower/1.jpg',
    heroAlt: 'Pale veined tile around a tub during bathroom renovation with an unfinished ceiling edge.',
    primaryKeyword: 'apartment bathroom remodeling Ridgewood Queens',
    keywords: ['apartment bathroom remodeling Ridgewood Queens', 'only bathroom renovation planning', 'bathroom work schedule', 'occupied apartment bathroom remodel'],
    intro: [
      'When an apartment has one bathroom, the question is more immediate than when the new tile will look finished. You need to know when the room can be used, what will be unavailable, and what arrangements you need while the work is underway.',
      'For a Ridgewood bathroom renovation, make those daily needs part of the first conversation. LOKEIL works from Ridgewood and serves New York City; the photo here is a real work reference with an unconfirmed job location.',
    ],
    sections: [
      {
        heading: 'Agree on usable space before agreeing on a start date',
        body: [
          'Tell the contractor this is the only bathroom. Ask which fixtures will be disconnected, during which parts of the work, and what conditions must be met before they can be used again. Do not assume that one fixture can stay usable throughout a full room renovation.',
          'Discuss the practical arrangements you will need if the bathroom is unavailable. If you plan to remain in the home, confirm whether that is workable for the proposed scope and how the contractor will communicate changes.',
        ],
        list: ['Which fixtures will be out of use?', 'What is the expected sequence, and what could change it?', 'Who will give the next update if concealed work is discovered?', 'What alternative arrangements do I need before work begins?'],
      },
      {
        heading: 'Prepare the path from the front door to the bathroom',
        body: [
          'The work affects more than the room itself. Review how materials arrive, debris leaves, and the rest of the apartment is protected. Clear the agreed access route and decide where household items, tools, and materials can be kept.',
          'Confirm the building work rules and the readiness of selected materials before scheduling removal. A missing vanity or delayed glass measurement may affect the plan differently from concealed damage found during demolition; ask how each will be handled.',
        ],
      },
      {
        heading: 'Ask what makes the bathroom ready to use again',
        body: [
          'In the opening photo, the tiled tub surround is visible while a ceiling edge remains unfinished. Appearance alone cannot confirm that a bathroom is ready for use. Ask about the remaining work, the selected products’ curing requirements, and any relevant checks before returning the fixtures to service.',
          'Keep that conversation separate from the final touchup list. Some remaining items affect use; others affect the finished appearance. For your LOKEIL inquiry, share the room photos, what is staying or changing, building requirements, and the fact that this is your only bathroom.',
        ],
        links: [{ label: 'Compare the complete bathroom scope', href: '/blog/bathroom-remodeling-cost-queens-ny' }, { label: 'Understand what is behind shower tile', href: '/blog/shower-tile-installation-queens-guide' }],
      },
    ],
    faqs: [{ question: 'Can I use my only bathroom during a remodel?', answer: 'That depends on the scope and sequence. Ask which fixtures will be disconnected and what must be completed before use resumes. Agree on practical arrangements and communication before work begins instead of assuming the room will remain available.' }],
    relatedServices: [{ label: 'Bathroom remodeling', href: '/bathroom-remodeling-queens' }, { label: 'Home remodeling', href: '/home-remodeling-queens' }],
  },
];
