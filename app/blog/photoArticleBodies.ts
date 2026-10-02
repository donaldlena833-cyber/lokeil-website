import type { BlogSection } from './blogData';

type PhotoArticleBody = {
  intro: string[];
  sections: BlogSection[];
  diagramAfter: number;
  title?: string;
  description?: string;
};

export const photoArticleAltText: Record<string, string> = {
  '/gallery/bathroom-tiles/4.jpg': 'Cream kitchen cabinets and blue backsplash tile beside an unfinished counter area.',
  '/gallery/bathroom-tiles/5.jpg': 'Gray horizontal tub surround tile with an unfinished recessed niche and protected tub.',
  '/gallery/bathroom-tiles/6.jpg': 'Pale marble look shower tile, recessed niche, and glass enclosure beside a dark vanity.',
  '/gallery/bathroom-tiles/7.jpg': 'An opening in the painted wall just above a pale countertop.',
  '/gallery/bathroom-tiles/8.jpg': 'Large pale shower wall tiles with spacing clips above a smaller mosaic floor.',
  '/gallery/bathroom-tiles/9.jpg': 'An open rectangular niche surrounded by gray horizontal shower tile.',
  '/gallery/bathroom-tiles/10.jpg': 'Close view of gray tub wall tile, recessed niche, and unfinished outer edge.',
  '/gallery/bathroom-flooring/1.jpg': 'Patterned bathroom floor tile beside an unfinished shower wall and doorway.',
  '/gallery/bathroom-flooring/2.jpg': 'Black and white checkerboard floor in a room with unfinished wall patches.',
  '/gallery/bathroom-flooring/3.jpg': 'Loose blue scallop tile sheets being compared with an unfinished room floor.',
  '/gallery/bathroom-flooring/4.jpg': 'Shower with herringbone wall tile, bench, unfinished niche, and pale hex floor.',
  '/gallery/bathroom-flooring/5.jpg': 'A gray and white geometric tile sample held over a rough floor.',
  '/gallery/bathroom-flooring/6.jpg': 'Patterned bathroom floor at the entrance to an unfinished shower area.',
  '/gallery/bathroom-flooring/7.jpg': 'Checkerboard floor border beside a patched wall and doorway.',
  '/gallery/bathroom-flooring/8.jpg': 'Black and white hex pattern shower floor tile around a visible drain.',
  '/gallery/bathroom-flooring/9.jpg': 'Gray tub wall tile and recessed niche before surrounding fixtures and edges are finished.',
  '/gallery/bathroom-shower/1.jpg': 'Pale marble look tub surround with a recessed shelf and unfinished ceiling above.',
  '/gallery/bathroom-shower/2.jpg': 'Large pale shower tiles around fixture openings before the final hardware.',
  '/gallery/bathroom-shower/3.jpg': 'Blue patterned feature tile around a tub window in an unfinished bathroom.',
  '/gallery/bathroom-shower/4.jpg': 'Pale shower wall and floor tile below an open unfinished bathroom ceiling.',
  '/gallery/bathroom-shower/5.jpg': 'Horizontal gray tub wall tile surrounding a recessed storage niche.',
  '/gallery/bathroom-shower/6.jpg': 'Two vertically stacked recessed niches in a narrow pale tiled shower.',
  '/gallery/bathroom-shower/7.jpg': 'Colored mosaic inside a niche surrounded by pale shower tiles with spacing clips.',
  '/gallery/bathroom-shower/8.jpg': 'Pale shower floor and wall tile together before the final fixtures are installed.',
  '/gallery/bathroom-painting/2.jpg': 'Blue gray bathroom wall beside pale flooring and unfinished fixture areas.',
  '/gallery/bathroom-painting/3.jpg': 'Cream kitchen cabinets, metal pulls, pale counter, and blue backsplash tile.',
  '/gallery/bathroom-painting/4.jpg': 'Dark coated shower walls with an open niche, tools, and unfinished surfaces.',
  '/gallery/bathroom-painting/5.jpg': 'Floor protection beneath cream kitchen cabinets and a blue backsplash.',
  '/gallery/bathroom-painting/6.jpg': 'Cream cabinet door fronts and open appliance space during kitchen finishing.',
  '/gallery/kitchen-cabinets/2.jpg': 'Dark bathroom vanity with a pale counter and wood framed mirror.',
  '/gallery/kitchen-cabinets/3.jpg': 'Gray kitchen cabinets, patterned backsplash, range, and pale plank flooring.',
  '/gallery/kitchen-cabinets/4.jpg': 'Blue kitchen cabinets and unfinished backsplash areas beside a pale counter.',
  '/gallery/kitchen-cabinets/6.jpg': 'Wide kitchen work view with cream cabinets, blue tile, and protected floor.',
};

// Individual reading paths for the gallery photographs. The three neighborhood
// essays retain their separately written bodies and illustrations.
export const photoArticleBodies: Record<string, PhotoArticleBody> = {
  '/gallery/bathroom-tiles/4.jpg': {
    intro: ['The blue kitchen backsplash is already changing the room, even while the cabinets and nearby surfaces are unfinished. This is the point at which a tile choice becomes a real arrangement of outlets, corners, and cabinet ends.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Find the boundaries of the blue', body: ['Look along the counter rather than at one tile. The backsplash has to finish somewhere beside a cabinet, an appliance, or an open wall. A deliberate endpoint can make a modest tile look considered. An unresolved endpoint can distract from an otherwise attractive kitchen.'] },
      { heading: 'Settle the kitchen pieces that control the cuts', body: ['The final cabinet position and counter line establish the working area for the tile. Outlet locations and the range space interrupt that area. Keep those decisions together before approving a layout.'], list: ['Confirm which cabinets and appliances will stay.', 'Mark every outlet and exposed cabinet end on a wide wall photo.', 'Choose how the tile terminates where there is no cabinet above it.'] },
      { heading: 'Read the installation sequence', body: ['The picture records work in progress. Open areas and protection belong to that stage, so they should not be read as the finished handover. Cabinet placement and counter fit need to be resolved before the backsplash edges can be finished accurately.'] },
      { heading: 'Bring a wall view to the estimate', body: ['A sample tells us the tile color. A photo of the complete wall tells us where that color has to work. Send both, together with your appliance choices, when discussing a blue kitchen backsplash installation.'] },
    ],
  },
  '/gallery/bathroom-tiles/5.jpg': {
    intro: ['A gray tub surround can be quiet without being plain. Here the long horizontal tile lines meet a recessed niche, and that meeting is the part to settle before the wall is finished.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Make room for the bottles you actually use', body: ['Choose storage from the inside out. A niche that looks well proportioned can still be inconvenient if the tallest bottle does not fit or the opening is awkward to reach. The opening in this progress photograph puts those practical decisions in view.'], comparison: { caption: 'Storage choices to settle before closing the wall', headings: ['Choice', 'What to check'], rows: [['Opening height', 'Measure the products that will live here, including pump tops.'], ['Shelf position', 'Consider who uses the tub and how they reach the storage.'], ['Tile border', 'See how the full tile courses meet the niche on all four sides.']] } },
      { heading: 'Follow the horizontal lines around the opening', body: ['The gray field has a strong direction. Compare the tile above and below the niche with the cuts at its sides. Planning those pieces together keeps the opening connected to the wall instead of looking added later.', 'The exposed edges and covered tub show an installation stage. They give a useful view of the work before trim and cleanup make it harder to see how the pieces meet.'] },
      { heading: 'Ask for the wet area detail as well as the tile', body: ['Niche support, water management, and a sill that sheds water belong in the installation plan. The visible tile cannot identify the concealed assembly. Ask which system and edge finish the proposal includes, then choose your gray tub surround tile around that complete plan.'] },
    ],
  },
  '/gallery/bathroom-tiles/6.jpg': {
    intro: ['Glass lets the marble look shower tile remain visible from outside the enclosure. That openness makes the niche, corners, and tile edges part of the everyday view, rather than details you notice only while showering.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Decide what you like about the reference', body: ['The pale surface and larger tile format make this shower read as broad planes. If that is the quality you want, say so before selecting a product. A photograph can communicate the atmosphere, but it cannot confirm the tile material or its maintenance requirements.'] },
      { heading: 'Compare materials before comparing installation prices', body: [], comparison: { caption: 'Information to collect for a pale shower finish', headings: ['Selection', 'Information to bring'], rows: [['Marble look tile', 'The product name, dimensions, thickness, and intended use.'], ['Natural stone', 'The exact stone and supplier care instructions.'], ['Glass enclosure', 'The preferred opening style and a view of the existing shower entrance.'], ['Niche finish', 'Whether its interior matches the main tile or introduces another material.']] } },
      { heading: 'The glass puts the corners on display', body: ['Read the niche border, the vertical wall junction, and the line at the base together. Large tile needs a suitable supporting surface and a planned arrangement around those interruptions. The tile and glass should be discussed as parts of one shower.'] },
      { heading: 'Preserve the clear view', body: ['Place bottles, handles, and a towel where you would use them while reviewing the design. Their positions can help you judge whether the calm appearance will survive daily life. You can use this gallery image as a starting reference without copying every finish.'] },
      { heading: 'Include the existing opening in your brief', body: ['For a marble look shower tile estimate, send the current shower, drain, entrance, and neighboring fixtures. Those views support a conversation about tile work and enclosure coordination rather than a price based on the wall finish alone.'] },
    ],
  },
  '/gallery/bathroom-tiles/7.jpg': {
    intro: ['The small opening beside this countertop is easy to leave out of a renovation conversation. It is also exactly the kind of detail that can remain visible after the bigger pieces are installed.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Give the unfinished edge a place in the scope', body: ['The picture shows a pale counter against a wall with an opening and an unfinished junction. It does not reveal the cause or depth of the condition. A close view is useful, but the surrounding wall matters too: the repaired area must meet the surface that remains.', 'Include wall repair beside a countertop when you first describe the work. Waiting until the counter is finished can make access and protection more complicated.'] },
      { heading: 'Capture the condition before it is covered', body: ['Take one photograph from far enough away to show the whole counter run. Then take a closer view of the opening and the adjacent finish. Together they help explain whether the concern is an isolated edge or part of a larger wall repair.'], list: ['Show any loose or damaged material without hiding it behind objects.', 'Point out which counter and cabinet surfaces are staying.', 'Identify the paint, tile, or trim finish you expect at the repaired edge.'] },
      { heading: 'Agree where the repair ends', body: ['A patch has two boundaries: the area that needs repair and the area that needs finishing so it blends into the room. Ask about both. Protection, preparation, primer where appropriate, and the final visible edge should be considered before the wall and countertop work are priced separately.'] },
    ],
  },
  '/gallery/bathroom-tiles/8.jpg': {
    intro: ['Broad shower wall tile and a smaller mosaic floor do different visual jobs. In this progress view, their meeting line is the useful place to start: it connects the quiet walls to the floor beneath your feet.'],
    diagramAfter: 3,
    sections: [
      { heading: 'Start at the base of the shower', body: ['The mosaic pattern makes the floor legible while the large wall pieces keep the enclosure calm. Consider the drain, entry, and wall junction before deciding that you want the same combination. Those details shape how both tile formats will fit.'] },
      { heading: 'The two tile sizes need one plan', body: ['Wall tiles can cover a broad plane. Floor pieces need to suit the prepared shower base and its changes in plane. A small format does not, by itself, establish that a floor has the correct slope or water management.'] },
      { heading: 'Read the clips as a construction clue', body: ['Spacing clips remain on the walls in the photograph. They help identify the installation stage and show where the tile lines meet. They are not a certificate of the work beneath the tile, and the room still has finishing tasks ahead.'] },
      { heading: 'Bring the wall and floor samples together', body: ['Judge the grout colors, piece sizes, and surface appearance in the same light. A floor sample that looks busy on its own may balance a simple wall; two strong patterns may compete in a small enclosure.'], list: ['View enough mosaic sheets to understand the repeat.', 'Check the product specification for its intended shower use.', 'Ask how the selected pieces meet the drain and entry.'] },
      { heading: 'Keep the entry in the estimate', body: ['Show the existing shower entrance and the bathroom floor outside it. A large shower wall tile and mosaic floor project should account for the complete base and transition, rather than treating the two finishes as unrelated jobs.'] },
    ],
  },
  '/gallery/bathroom-tiles/9.jpg': {
    intro: ['An open shower niche is a useful pause in the work. You can still see an opening that will later be enclosed by tile, which makes this the right time to settle storage and finishing questions.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Use the opening as a decision point', body: ['The gray field tile surrounds an unfinished niche interior. The photograph shows the opening and its relationship to the wall courses, but cannot establish the support or waterproof connections behind them. The next conversation should cover both the storage you want and the assembly that makes it suitable for the shower.'] },
      { heading: 'Choose the contents before the interior tile', body: ['Set out the bottles, soap, and other items you expect to store. Their heights and how you reach them give the opening a practical purpose. An attractive rectangle on a drawing may need adjustment once the actual products are beside it.'], comparison: { caption: 'Details to settle while the niche remains accessible', headings: ['Detail', 'Decision'], rows: [['Interior tile', 'Match the wall or choose an accent, with both samples present.'], ['Sill', 'Discuss how it sheds water back into the shower.'], ['Outside edge', 'Choose a compatible trim or other finished edge before setting the last cuts.']] } },
      { heading: 'Keep a progress record', body: ['Ask for photographs of the specified preparation before tile covers the niche. Keep the product information with the project scope. These records are more useful than trying to identify a concealed shower niche installation from its finished appearance.'] },
      { heading: 'Bring the opening into the room design', body: ['Stand where you will use the shower and review the proposed height. The niche should feel reachable and belong to the tile layout around it. Resolve those two questions together while changes are still possible.'] },
    ],
  },
  '/gallery/bathroom-tiles/10.jpg': {
    intro: ['The closer you look at a simple gray tub wall, the more its cut sizes matter. This angle turns the niche border and outside edge into the main story.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Follow one tile course through the wall', body: ['Start with a horizontal joint and trace it toward the niche. Then look at the pieces that complete the opening. The full tiles establish a rhythm; the smaller pieces show how that rhythm was fitted to the actual wall.'] },
      { heading: 'Review the ending before approving the start', body: ['Ask where the last tile lands at the exposed edge and where the niche cuts fall. A layout may need to balance several visible boundaries, especially in a room whose corners are not perfectly square.'], list: ['Review the niche border as a complete rectangle.', 'Compare the cut at the outside edge with the opposite end of the wall.', 'Choose the edge finish while its thickness can still be allowed for.'] },
      { heading: 'Finish choices change the last cut', body: [], comparison: { caption: 'Discuss the edge with the actual tile sample', headings: ['Finish question', 'Why it belongs in the layout'], rows: [['A trim profile', 'Its dimensions affect the visible tile termination.'], ['A formed tile edge', 'Availability and size need to match the selected tile.'], ['A carefully joined corner', 'The material and installer approach need to suit that detail.']] } },
      { heading: 'A useful reference for your own tub surround', body: ['Bring this close view alongside a full photo of your bathroom. It can explain the kind of gray tub niche tile layout you care about, while the wider photo gives the contractor the wall dimensions, tub line, and existing conditions needed to discuss it.'] },
    ],
  },
  '/gallery/bathroom-flooring/1.jpg': {
    intro: ['A patterned bathroom floor begins to give the room character before the walls are finished. This photograph catches the moment when you can still judge the repeat and its edges without fixtures hiding them.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Stand where the room will be seen first', body: ['The view from the entrance is often the one you will see most. Look at where the repeated shapes begin and how they meet the outer edges. A pattern can have a visual center that differs from the mathematical center of an irregular room.'] },
      { heading: 'Compare the open floor with the future room', body: ['Picture the vanity, toilet, and any wall base over this unfinished scene. They will cover some pieces and leave others exposed. Approving the pattern before considering those footprints can make a balanced empty room look different once it is furnished.'] },
      { heading: 'Give the installer a sample and a doorway view', body: ['For patterned bathroom floor tile installation, a product link identifies the material and size. A room photo explains the pattern you hope to see. Add the floor outside the doorway so the transition is part of that same discussion.'], list: ['Show which fixtures will stay in their current positions.', 'Identify the most important sight line through the room.', 'Ask to review a dry layout before the pattern is fixed.'] },
      { heading: 'Allow for preparation beneath the finish', body: ['The visible pattern is only the surface of the floor. Its supporting base and the selected installation assembly need their own assessment. Keep that preparation in the scope rather than assuming a new tile can simply replace an old one at the same height.'], comparison: { caption: 'A floor scope has two connected parts', headings: ['Part', 'What you are agreeing'], rows: [['Surface arrangement', 'Pattern direction, grout appearance, and visible perimeter cuts.'], ['Supporting work', 'Existing condition, suitable preparation, and the finished doorway transition.']] } },
    ],
  },
  '/gallery/bathroom-flooring/2.jpg': {
    intro: ['Black and white checkerboard tile makes the floor the strongest feature in this unfinished room. The grid is easy to love and equally easy to judge once it reaches a wall.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Choose how the grid greets the doorway', body: ['A checkerboard gives the eye straight lines to follow. Decide which line should feel centered when entering the room, then review how the squares end at the sides. The doorway view can be more useful than a cropped inspiration picture.'], comparison: { caption: 'Two ways to review the same pattern', headings: ['View', 'What it reveals'], rows: [['From the doorway', 'The balance of the pattern as you enter the bathroom.'], ['Across the longest wall', 'Whether the outer squares form a comfortable border.'], ['Beside the fixtures', 'The pieces that will remain visible after installation.']] } },
      { heading: 'Let the existing room inform the layout', body: ['The bare walls make the floor edge visible in this photo. Existing rooms may have angles that a strong grid emphasizes. Establishing a reference and checking both sides before setting tile allows the border cuts to be considered together.'] },
      { heading: 'Keep the remaining finishes calm enough for the floor', body: ['Bring paint, wall tile, and grout samples into the same view. The checkerboard already supplies contrast. The other finishes can support it without all demanding attention at once.', 'When requesting a black and white bathroom floor estimate, include the tile size and a complete room view. Ask to see the proposed orientation and border arrangement before installation begins.'] },
    ],
  },
  '/gallery/bathroom-flooring/3.jpg': {
    intro: ['Blue scallop tile changes when you turn the sheets. The curves can lead the eye into a room or toward its edge, so the orientation deserves a real floor trial before installation.'],
    diagramAfter: 3,
    sections: [
      { heading: 'Turn the curves before choosing a direction', body: ['The loose tile in this photograph is being considered against an unfinished floor. That is a useful starting point for testing the shape. Rotate several sheets together rather than judging a single curved piece.'] },
      { heading: 'Expand the sample into a repeat', body: ['A sheet boundary should not become the main feature of the finished floor. Lay neighboring sheets together and look at the spacing where they meet. The full repeat tells you much more than the sample color alone.'], list: ['Review the pattern from the entry and from beside the vanity.', 'Check the sheet joints under the room lighting.', 'Leave enough sample area to judge the scale of the curves.'] },
      { heading: 'Study the shapes that reach the edge', body: ['The scallops will end at a wall, threshold, or fixture. Some cuts may be partly covered later, while others remain visible. Mark those boundaries during the trial so you are choosing the complete blue scallop floor tile layout.'] },
      { heading: 'Confirm where the tile is intended to go', body: ['Bring the exact product specification to the contractor. Its intended use, material, dimensions, and thickness matter alongside the design. A color you like in a dry room is not enough information to choose a shower floor tile.'] },
      { heading: 'Approve the trial before the sheets are fixed', body: ['Keep a photo of the orientation you chose and include the doorway in it. This gives everyone a clear reference while the supporting floor work and the final tile installation are planned.'] },
    ],
  },
  '/gallery/bathroom-flooring/4.jpg': {
    intro: ['The bench, niche, herringbone walls, and hex floor all ask for attention in this shower. Choosing them together starts with a simpler question: how much standing room should remain?'],
    diagramAfter: 2,
    sections: [
      { heading: 'Place the person before the pattern', body: ['A bench takes space from the enclosure even when it adds useful seating. Consider who will use it, how they enter, and where the controls sit. Mark those positions on the room plan before making the bench a purely visual feature.'], list: ['Review the standing area beside the bench.', 'Consider the reach to the controls and stored products.', 'Include the enclosure opening in the same plan.'] },
      { heading: 'See where the herringbone turns', body: ['The angled wall pattern meets a niche and the bench edge. Each interruption produces new cuts and a new visual boundary. A sample board cannot show those junctions; a layout sketch can help you understand where the diagonal lines will finish.'] },
      { heading: 'Separate pattern choices from wet area preparation', body: [], comparison: { caption: 'Two conversations for a shower with a bench', headings: ['Conversation', 'What to resolve'], rows: [['Appearance', 'Pattern direction, niche borders, bench top, and the hex floor.'], ['Assembly', 'Suitable support, water management, surface slopes, and drain connections.']] } },
      { heading: 'Read this as a progress view', body: ['The niche and edges remain unfinished in the photograph. It records an arrangement in development, not a completed inspection or a promise of the concealed system. Use it to explain the features you want and ask how they will be assembled in your room.'] },
      { heading: 'Specify the bench in the quotation', body: ['For herringbone shower tile with a bench, provide room dimensions and the intended use of the seat. A proposal needs more than the wall tile name to account for the work at the bench and storage opening.'] },
    ],
  },
  '/gallery/bathroom-flooring/5.jpg': {
    intro: ['A geometric tile sample held over the real floor can answer a color question immediately. It leaves the larger question open: what happens when that shape repeats across the whole bathroom?'],
    diagramAfter: 0,
    sections: [
      { heading: 'Keep the sample in the room for a while', body: ['The gray and white sample is seen against a rough existing surface. That contrast helps you imagine the change, but the room lighting matters too. View the tile at different times and beside the wall or cabinet finish you intend to keep.', 'Move it near the doorway as well as into the center of the room. You may prefer the color in one place yet find the pattern scale more prominent from another.'] },
      { heading: 'Build enough pattern to make a choice', body: ['Ask to see several pieces together. One sample can hide the direction of a motif or the way a dark shape joins its neighbor. Photograph the larger trial so you have a reference when ordering.'], list: ['Compare the repeat with the size of the visible floor.', 'Check whether the motif has a preferred orientation.', 'View the proposed grout alongside the sample.'] },
      { heading: 'Collect the product details after the visual trial', body: ['Keep the exact product link, dimensions, thickness, and intended use with your geometric bathroom tile sample. Those details help the installer assess the preparation and transitions. A pleasing color alone does not define an installation scope.'], comparison: { caption: 'What the sample can and cannot answer', headings: ['It can help you judge', 'You still need to establish'], rows: [['Color in your room', 'The product specification and intended application.'], ['A small part of the motif', 'The full repeat and cuts at the boundaries.'], ['The visible finish', 'The supporting floor condition and selected assembly.']] } },
    ],
  },
  '/gallery/bathroom-flooring/6.jpg': {
    intro: ['The patterned bathroom floor reaches an unfinished shower area in this view. That boundary deserves its own discussion before the two sides are priced or tiled separately.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Choose what the entry should feel like', body: ['Think about the step into the shower and the floor you stand on outside it. A curb and a level entry create different arrangements. The existing structure, drain, and selected system need assessment before a level transition can be promised.'] },
      { heading: 'Draw the junction from the side', body: ['A simple section showing the bathroom floor, shower base, entry, and drain can make the proposal easier to understand. It also makes clear that matching surface heights and managing shower water are connected decisions.'], comparison: { caption: 'Questions at the bathroom floor to shower transition', headings: ['Part', 'Question for the scope'], rows: [['Bathroom floor', 'What is the finished height at the entry?'], ['Shower base', 'How will the base and drain form the wet area?'], ['Entry', 'Is the proposed curb or level detail feasible here?'], ['Enclosure', 'Where will the glass meet the completed surfaces?']] } },
      { heading: 'Use the progress photo to keep both floors connected', body: ['The visible pattern helps you judge appearance, while the unfinished shower shows where work is still being coordinated. It cannot establish the hidden water management detail. Keep the two floor areas in the same plan even if their tile formats differ.'] },
      { heading: 'Send the view from outside the shower', body: ['Include the existing entry, doorway, and drain in your photo brief. This is particularly useful when the goal is a smoother bathroom floor to shower tile transition, because the work is about the complete junction rather than a new pattern alone.'], list: ['State whether you want to keep the current entry arrangement.', 'Show the flooring immediately outside the bathroom.', 'Identify any fixtures close to the shower opening.'] },
    ],
  },
  '/gallery/bathroom-flooring/7.jpg': {
    intro: ['Checkerboard cuts beside an unfinished wall tell a different story from a wide floor photograph. This close view is about the border: the row of pieces that decides whether the pattern feels settled in the room.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Look at the two borders together', body: ['A narrow cut on one side may draw more attention if the opposite side contains a much larger piece. Before tile is fixed, compare both edges from the doorway. The most useful arrangement depends on the actual room and what later fixtures will cover.'] },
      { heading: 'Use the finished wall position', body: ['The wall surface and any base finish affect which portion of the outer tile remains visible. A layout based only on rough dimensions can miss that change. Ask the installer to allow for the finish that will complete this edge.'] },
      { heading: 'Choose how the floor meets the wall', body: ['The perimeter is also a finish choice. Baseboard, tile base, and the surrounding wall treatment can change the visual boundary. See those materials against the checkerboard before deciding.'], list: ['Confirm which wall or base finishes are part of the work.', 'Review the pattern after allowing for their thickness.', 'Photograph the approved doorway sight line.'] },
      { heading: 'Inspect the border before the room fills up', body: ['This progress stage leaves the perimeter exposed. Once the room contains a vanity and other fixtures, parts of it will be harder to see. Use the open view to discuss your checkerboard bathroom floor layout while the whole border remains accessible.'] },
    ],
  },
  '/gallery/bathroom-flooring/8.jpg': {
    intro: ['The drain brings the black and white hex shower floor into focus. The most revealing pieces are the small ones immediately around it, where the pattern has to meet a fixed object.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Begin with the drain you have', body: ['A new tile pattern does not make an existing drain disappear. Decide whether its position and type are staying before the floor design is settled. Moving or changing it can involve work beyond the visible surface.'], list: ['Photograph the existing drain from directly above.', 'Show its position within the complete shower base.', 'Explain whether you are changing only finishes or rebuilding the shower.'] },
      { heading: 'Trace the pieces nearest the opening', body: ['The hex pattern meets the drain through smaller fitted pieces. Look at those cuts as well as the broad field. A carefully considered sheet layout can help avoid the drain looking like an interruption added after the pattern.', 'The prepared shower base and water management detail need assessment before the tile. Small pieces can suit changes in plane, but their presence does not prove a correct slope or drain connection.'] },
      { heading: 'Keep the base and finish in one proposal', body: ['A hex shower floor tile estimate should identify the shower base work as well as the tile arrangement. Ask how the selected system meets the drain and which preparation is included. The photograph is a useful pattern reference; product specifications and site conditions define the assembly.'] },
      { heading: 'Review the floor from standing height', body: ['After examining the drain close up, look from the shower entrance too. This helps you judge whether the overall black and white pattern has the calm or contrast you want in daily use.'], comparison: { caption: 'A complete floor review uses both views', headings: ['View', 'Useful observation'], rows: [['Close to the drain', 'Cut sizes and how the pattern meets the opening.'], ['From the entrance', 'Scale, contrast, and balance across the shower base.']] } },
    ],
  },
  '/gallery/bathroom-flooring/9.jpg': {
    intro: ['This gray tub surround looks far along, but a finished tile field is only one part of finishing the bathroom. The niche, fixture openings, and adjacent edges are reminders of the remaining scope.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Make a finish list before calling it complete', body: ['Look across the whole tub wall and write down what still needs attention. The purpose is to agree the handover boundary, not to infer a defect from a progress photograph.'], list: ['The interior and perimeter of the storage niche.', 'Fixture trim and the openings around it.', 'Tile terminations beside the surrounding wall.', 'The ceiling finish and final room cleanup.'] },
      { heading: 'Compare proposals by the same ending', body: ['Two quotes for gray tub surround tile installation can describe different amounts of work. One may cover tile setting while another includes the adjoining finishes and fixture coordination. Read the included tasks together before comparing totals.'], comparison: { caption: 'Clarify the end of the job', headings: ['Scope item', 'Agreement to make'], rows: [['Tile field', 'The exact surfaces and material being installed.'], ['Edges and openings', 'The trim and finish expected at every visible junction.'], ['Adjacent room', 'Whether ceiling, wall repair, and painting are included.']] } },
      { heading: 'Allow time for the last inspection together', body: ['Keep the reference photo and the agreed finish list available for a walkthrough. Review the room from the doorway as well as beside the tub. The large wall may be the first thing you notice, but the smaller junctions often decide how complete the room feels.'] },
    ],
  },
  '/gallery/bathroom-shower/1.jpg': {
    intro: ['Pale marble look tile wraps this tub and recessed shelf while the ceiling remains unfinished. The room already has a new character, but the photograph makes the top boundary of the project impossible to ignore.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Look above the tile before narrowing the scope', body: ['The ceiling will share the view with the new surround every day. Decide whether its repair, paint, lighting, or other planned work belongs in this renovation. A beautiful wall finish can make an unresolved surface beside it feel more noticeable.'] },
      { heading: 'Give the recessed shelf a practical role', body: ['The opening interrupts the marble look field in one place. Review its position with the products you expect to store and the reach of the people using the tub. Its appearance and use should be settled together.'] },
      { heading: 'Choose the material from more than a photograph', body: ['A marble look image cannot identify whether the surface is manufactured tile or natural stone. Bring the exact product information and samples. Compare the pattern across several pieces so the finished wall is easier to imagine.'], list: ['Keep the product name and size with the proposal.', 'Review the shelf interior against the main wall tile.', 'Include the proposed grout and edge finish in the sample view.'] },
      { heading: 'Connect the wet wall to the room work', body: ['The tub surround needs an appropriate assembly at its backing, water management, and openings. The adjacent ceiling and wall finishes have a different purpose but still need a coordinated sequence. The progress photograph does not verify the concealed system.'] },
      { heading: 'Send a ceiling view with the tub view', body: ['When discussing a marble look tub surround with a recessed shelf, include the upper room in your brief. It helps establish whether the aim is a focused wall update or a more complete bathroom renovation.'], comparison: { caption: 'Photographs for this scope conversation', headings: ['Photo', 'What it adds'], rows: [['Tub and storage wall', 'The visible wet area and intended layout.'], ['Ceiling and upper corners', 'The adjoining repair and finishing boundaries.'], ['Existing fixture wall', 'The current openings and planned fixture changes.']] } },
    ],
  },
  '/gallery/bathroom-shower/2.jpg': {
    intro: ['Large white shower tile makes the fixture openings easy to see. Before the handles and plates arrive, those openings need to agree with the exact fittings you selected.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Choose the trim while the wall can still be planned', body: ['A broad pale tile does not hide much. The outlet and control cuts become part of its appearance, even when a trim plate covers their edges. Give the installer the actual fixture information rather than relying on an approximate picture.'], comparison: { caption: 'Information needed around the fixture openings', headings: ['Information', 'What it helps coordinate'], rows: [['Fixture model', 'The components and trim intended for the opening.'], ['Preferred positions', 'How the controls are reached in daily use.'], ['Tile dimensions', 'Where joints and cuts fall around those fittings.']] } },
      { heading: 'The wall finish follows the complete assembly', body: ['The visible tile is the finish layer. Suitable backing and water management must be considered before it covers the wall. The photograph cannot tell you which concealed system was installed, so keep that system description in the project scope.'] },
      { heading: 'Read the remaining work without guessing a result', body: ['The room is shown before its final hardware. Controls, surrounding finishes, sealing details appropriate to the system, and the final review still need to come together. A progress image is useful for discussing that sequence without treating it as a completed bathroom.'], list: ['Confirm the selected trim before tile cutting.', 'Review the fixture locations on the proposed tile layout.', 'Agree what the installer will check at the final walkthrough.'] },
      { heading: 'Keep the quiet wall quiet', body: ['Look at the niche, corners, and fittings as one composition. Fewer visible joints can make large format white shower tile feel calm, which also makes the placement of each interruption more apparent.'] },
    ],
  },
  '/gallery/bathroom-shower/3.jpg': {
    intro: ['Blue feature tile gives this tub wall a strong personality. The window deserves the first planning conversation because its sill and surrounding corners sit within the bathing area.'],
    diagramAfter: 3,
    sections: [
      { heading: 'Begin with the existing window', body: ['Show the complete window, the sill, and the wall below it when discussing the renovation. If there is staining, soft material, or an unresolved condition, include that in the brief before choosing a decorative finish.'] },
      { heading: 'Look at the sill from the side', body: ['The sill is a horizontal surface in a wet location. Its shape and connection to the surrounding assembly need a suitable detail. Ask how water is managed there rather than assuming that the new tile alone settles the junction.'] },
      { heading: 'Let the blue pattern meet the opening deliberately', body: ['The window interrupts the feature field. Review how the motif arrives at its sides and top, and which edge finish completes it. A pattern trial around an opening can be more informative than a large sample viewed away from the room.'] },
      { heading: 'Keep the selected system in the discussion', body: ['The water management method should suit the window connection and the rest of the tub wall. The photograph shows the visible arrangement, not the product beneath it or its testing history.'] },
      { heading: 'Bring these views to a quotation conversation', body: [], list: ['A wide view of the tub, window, and neighboring walls.', 'A close view of the sill and any visible damage.', 'The tile sample or product link, including its pattern repeat.', 'Your preferred finish for the window edges.'] },
      { heading: 'Choose the feature after the junction is understood', body: ['Blue tub tile around a window can become the room feature you want. Settling the existing condition and edge arrangement first gives that color a clear place to begin and end.'] },
    ],
  },
  '/gallery/bathroom-shower/4.jpg': {
    intro: ['The open ceiling above this shower makes the scope easy to misunderstand. A tile installation and a finished bathroom are different amounts of work, so the proposal needs to say where the job ends.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Read the whole room before comparing quotes', body: ['Pale tile already covers the wet area while nearby surfaces remain unfinished. The photograph records work in progress. It helps illustrate why a wall tile quantity tells only part of the story.', 'Start with the condition of the room you want handed back. If the aim includes a repaired ceiling, working light, completed wall finishes, and cleanup, put those tasks beside the shower work when describing the project.'], comparison: { caption: 'Define the room boundary in the same proposal', headings: ['Area', 'What to clarify'], rows: [['Shower', 'Base, wall assembly, tile, fixtures, and enclosure coordination.'], ['Ceiling', 'Repair, finishing, paint, and the planned light or ventilation work.'], ['Adjacent walls', 'The extent of preparation and finishing outside the wet area.'], ['Handover', 'Cleanup and the review of the completed agreed scope.']] } },
      { heading: 'Plan the sequence around the occupied home', body: ['Framing and any required plumbing, electrical, or ventilation work have to be coordinated with the wall preparation and tile. The ceiling and adjacent finishes need their place in that sequence too.', 'Tell the contractor whether this is your only bathroom and how access works in the building. Those facts do not reveal a timetable by themselves, but they are necessary for a useful discussion about shower tile and bathroom ceiling renovation.', 'Keep a full room photo with the proposal. It gives you a shared reference for the surfaces that were included, especially when a progress view looks almost complete in one cropped angle.'] },
    ],
  },
  '/gallery/bathroom-shower/5.jpg': {
    intro: ['A storage niche sits inside the long horizontal lines of this gray tub wall. The opening works best when useful shelf height and the tile courses are considered together.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Size the shelf around a shared bathroom', body: ['Place the products used by everyone beside one another before choosing the niche dimensions. Two people may need different bottle heights or separate spaces. A useful opening starts with those contents rather than the proportions of an inspiration image.'], comparison: { caption: 'Choose storage from its everyday contents', headings: ['Use', 'Planning question'], rows: [['Tall pump bottles', 'Will they fit and remain easy to remove?'], ['Smaller items', 'Is there a comfortable place to reach them?'], ['Shared storage', 'Does the arrangement give each user enough space?']] } },
      { heading: 'Sketch the opening on the tile courses', body: ['The photograph puts the niche border beside the main horizontal field. Ask to see that relationship on the proposed layout. The opening can change the cuts around it, which is why its position belongs in both the storage and tile conversations.'] },
      { heading: 'Allow for the interior and its edges', body: ['The niche needs suitable support and connection to the chosen wet area assembly. Its sill and finish should direct water toward the tub. The visible tile does not establish the concealed preparation, so include the system and edge approach in the scope.'] },
      { heading: 'Keep a drawing with the tile order', body: ['Record the agreed niche location and dimensions before the wall closes. For horizontal tub wall tile with a niche, that simple reference can help keep the framing, storage choice, and finished pattern aligned.'], list: ['Show the valve and tub line on the drawing.', 'Identify the interior material and border finish.', 'Keep the exact tile size alongside the layout.'] },
    ],
  },
  '/gallery/bathroom-shower/6.jpg': {
    intro: ['Two stacked niches bring storage into this narrow white shower without projecting shelves into the standing space. Their heights determine how that extra storage feels in use.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Give each opening a job', body: ['Decide what will sit in the upper niche and what belongs below. Consider the people using the shower and where they can comfortably reach. Stacking openings can organize storage, but it does not make every height convenient.', 'The pictured niches also form a vertical feature in the white wall. Looking at them together helps you judge both reach and the visual spacing between the openings.'], comparison: { caption: 'A storage plan for two shower niches', headings: ['Opening', 'Decision to make'], rows: [['Upper niche', 'Which items need this height, and who can reach them?'], ['Lower niche', 'Which daily items should remain closest to hand?'], ['Space between them', 'How does the gap relate to the surrounding tile courses?']] } },
      { heading: 'Review both openings before the wall is closed', body: ['Each opening brings its own corners, sill, and edges into the wet area. Their support, position around the existing wall structure, and connection to the selected system need to be planned. The picture cannot verify those hidden details.'], list: ['Bring the tallest bottle dimensions.', 'Show the existing plumbing wall.', 'Review the tile courses through both openings.'] },
      { heading: 'Keep the narrow room comfortable', body: ['Stand inside the proposed shower area and imagine using each niche. Storage should support the space you have, including how you enter and where your hands reach. That is a useful way to judge two shower niches in a small shower before making the appearance your only criterion.'] },
    ],
  },
  '/gallery/bathroom-shower/7.jpg': {
    intro: ['A small mosaic niche can carry the color for a largely white shower. Choosing two tile materials creates a useful accent and a junction that deserves a close sample review.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Choose how much color the room needs', body: ['The white field remains the main surface while color is concentrated inside the opening. If you want a quiet shower with one stronger detail, this is a way to explore that balance without changing every wall.'] },
      { heading: 'Place the two samples side by side', body: ['Compare the mosaic and field tile in the same light. Then look at them from the edge, where differences in thickness become visible. The installer needs to consider that meeting as well as the colors.'], comparison: { caption: 'Sample checks for a mosaic shower niche', headings: ['Check', 'Why it matters'], rows: [['Color', 'The accent should feel right against the main wall tile.'], ['Thickness', 'The two surfaces need a planned relationship at the opening.'], ['Grout', 'Small mosaic joints can change the appearance of the accent.'], ['Edge finish', 'The border completes the junction between the materials.']] } },
      { heading: 'Leave room for the wet area detail', body: ['Support, water management, and a suitable sill remain part of the niche even when the decorative insert is the main feature. Those decisions should be resolved with the selected system before the finish covers them.'] },
      { heading: 'Use the progress view for the right conversation', body: ['Clips and unfinished edges remain visible in the photograph. It shows a colored insert within an installation stage, without identifying the concealed assembly or its completed condition. Bring the image to explain the accent you like, alongside your own samples and opening dimensions.'] },
      { heading: 'View the accent from outside the shower', body: ['A detail that looks strong at arm’s length can feel subtle across the room. Review both views before ordering. It helps you decide whether the niche provides enough color or whether a different palette better suits the bathroom.'], list: ['Keep the main wall sample behind the mosaic.', 'Review the color under your actual bathroom lighting.', 'Show the intended border with both materials.'] },
    ],
  },
  '/gallery/bathroom-shower/8.jpg': {
    intro: ['This white shower view brings the wall, floor, and base into one picture before the final hardware arrives. It is a useful reminder to plan the enclosure as a connected space.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Read the shower from the floor upward', body: ['Start with the drain and entrance, then follow the base of the walls toward the niche and fixture openings. Those relationships matter more to a complete shower plan than a wall tile sample alone.', 'The tile surfaces are visible, while parts of the room remain unfinished. The photograph helps with proportions and appearance; it cannot establish the concealed water management assembly.'], list: ['Locate the drain and the planned entry.', 'Compare the wall and floor tile scale.', 'Review where glass and fixture hardware will meet the finished surfaces.'] },
      { heading: 'Choose a bright finish as a group', body: ['Put wall tile, floor tile, grout, and hardware references together under the room lighting. Different whites can look warmer or cooler when placed beside one another. The full group is easier to judge than separate online product images.'], comparison: { caption: 'Selection questions for a pale shower', headings: ['Part', 'Question to settle'], rows: [['Wall', 'What size and arrangement give the calm surface you want?'], ['Floor', 'Which product suits the intended use and selected base?'], ['Hardware', 'How do the fittings sit within the tile layout?']] } },
      { heading: 'Keep the entrance in the plan', body: ['Show the bathroom floor outside the shower when requesting a quotation. The white shower wall and floor tile need to meet an entry detail and enclosure arrangement that work in your existing room.'] },
    ],
  },
  '/gallery/bathroom-painting/2.jpg': {
    intro: ['The blue gray wall changes the feeling of this bathroom while the pale floor keeps it light. The room is still in progress, and the edges tell you what a complete painting scope needs to include.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Choose the color beside the surfaces that stay', body: ['Test the blue gray against the floor, fixtures, and trim you intend to keep. Paint viewed alone can feel different once those materials surround it. Use the actual room lighting when reviewing the sample.'] },
      { heading: 'Mark the patches before covering them', body: ['A fresh color is the visible change. The existing wall condition determines the preparation that comes before it. Photograph patches, damaged areas, and unfinished openings so the repair boundary can be included in the estimate.'], list: ['Identify visible patches and areas needing repair.', 'Show the paint line against the tile or other retained finish.', 'State whether ceiling, door, and trim are part of the refresh.'] },
      { heading: 'Give the painter a clear finishing boundary', body: [], comparison: { caption: 'Define the bathroom wall painting scope', headings: ['Boundary', 'Agreement to make'], rows: [['Wall surfaces', 'Which areas need preparation and new finish coats.'], ['Ceiling', 'Whether repair and painting above the room are included.'], ['Trim and door', 'Whether they stay as they are or receive their own finish.'], ['Tile and fixtures', 'How retained surfaces will be protected and the edges completed.']] } },
      { heading: 'Plan the final pass after the room work', body: ['Protection, suitable repair and preparation, and the specified coating sequence need to fit the renovation work around them. The finish should be considered with the fixtures and neighboring surfaces, rather than treated as a color change alone.'] },
      { heading: 'Use a progress picture to describe the refresh', body: ['This view is useful because it includes the blue gray wall and unfinished parts of the room. Send a similarly wide picture of your bathroom so we can discuss the painting and remaining finish work together.'] },
    ],
  },
  '/gallery/bathroom-painting/3.jpg': {
    intro: ['Cream kitchen cabinets and a blue backsplash bring warmth and contrast into the same view. The combination is easiest to judge when the counter, hardware, and room light are included.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Collect a palette from the whole kitchen', body: ['Start with the cabinet finish you have or intend to order. Put the counter, tile, grout, and hardware samples beside it. A cream door can lean warmer or cooler depending on those neighbors.'], list: ['View the cabinet and backsplash in the same light.', 'Include the counter surface in the sample group.', 'Compare hardware finishes against the door and tile together.'] },
      { heading: 'Decide which parts are being changed', body: ['Replacing the backsplash while keeping the cabinets creates one scope. Replacing both creates another. Explain that choice before requesting an estimate, including any appliance or counter changes that belong in the project.'] },
      { heading: 'Fit the finish choices to the final cabinet position', body: ['Cabinet placement and counter fit set the boundaries for the backsplash. Fillers, end panels, and the edges at open walls need to be included in the plan. The gallery image helps communicate the palette without specifying the hidden attachment method or product brands.'] },
      { heading: 'Carry the samples to the least flattering corner', body: ['Check the palette near an outlet, under a cabinet, and at the end of the run. Those are the places where the kitchen must feel complete too. If the cream cabinets and blue backsplash still work together there, you have a more useful reference than one attractive cropped angle.', 'Photograph every wall when discussing your own update. It helps bring corners and exposed ends into the quotation rather than leaving them for the finishing stage.'] },
    ],
  },
  '/gallery/bathroom-painting/4.jpg': {
    title: 'Dark Shower Wall Coating Before Tile',
    description: 'A shower wall progress photo explains what to ask about backing, waterproofing, corners, and readiness before tile covers the work.',
    intro: ['The dark surface on this shower wall is a construction stage, not a finished bathroom color scheme. It brings attention to the work that becomes difficult to see after tile is installed.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Identify the product instead of guessing from its color', body: ['The photograph shows a coated wall with tools and unfinished surfaces nearby. It cannot identify the exact product, required application thickness, cure period, or completed test result. Ask for the specified system and its instructions.'] },
      { heading: 'Read the wall as connected details', body: ['Backing, seams, corners, openings, and the base need to work within the selected assembly. A broad coated surface is only one visible part of that conversation.'], comparison: { caption: 'Questions before the shower tile covers the wall', headings: ['Part', 'What to ask'], rows: [['Backing', 'Is it suitable for the specified system and room?'], ['Junctions', 'How are seams, corners, and penetrations handled?'], ['Base and drain', 'How does the wall work connect to the shower base?'], ['Readiness', 'What does the manufacturer require before tile is installed?']] } },
      { heading: 'Keep the product record with the proposal', body: ['A named system makes it possible to review the relevant instructions instead of comparing surfaces by appearance. Keep that information alongside the agreed scope and any progress photographs. It gives a future conversation about the shower a clearer reference.'] },
      { heading: 'Allow the chosen system to determine the sequence', body: ['Different products have different preparation and readiness requirements. The installer should work from the selected specifications, rather than a universal coat count or timetable taken from an unrelated example. The process illustration describes planning stages and does not certify this photographed wall.'] },
      { heading: 'Record the details before they disappear', body: ['Ask for views of important junctions before the finish covers them. These records can help explain what was specified and done, while any required inspection or testing remains a separate matter.'], list: ['Keep the product name and installation documentation.', 'Include the corners, openings, and base in the progress record.', 'Agree how readiness will be checked before tile setting.'] },
      { heading: 'Discuss the complete shower when requesting a quote', body: ['If your goal is shower waterproofing before tile, send the existing room and explain whether the base, drain, and wall assembly are being rebuilt. Pricing a visible coating alone would leave too much of the wet area undefined.'] },
    ],
  },
  '/gallery/bathroom-painting/5.jpg': {
    intro: ['The cream cabinets and blue backsplash are already present while protection still covers the floor. It is a practical kitchen moment: new finishes share a small work zone with the work still to come.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Map the route through the finished room', body: ['Materials and tools have to reach the installation area. Consider the route from the entrance as well as the floor directly under the cabinets. A floor protection plan should address the spaces people will actually pass through.'], list: ['Show the delivery route and room entrance.', 'Identify floors and finishes that are being retained.', 'Tell the contractor which neighboring rooms remain occupied.'] },
      { heading: 'Keep protection connected to the remaining tasks', body: ['Cabinet adjustments, hardware, backsplash finishing, and cleanup may still require access after the kitchen looks substantially changed. Agree when protection stays and when it is removed for inspection. The visible covering in this image does not identify its product or prove how the floor was protected throughout the job.'] },
      { heading: 'Discuss daily use while the work area is shared', body: [], comparison: { caption: 'Planning floor protection during cabinet installation', headings: ['Situation', 'Conversation to have'], rows: [['Occupied home', 'Which routes and parts of the kitchen need to remain usable?'], ['New flooring', 'What protection is suitable for that floor and the work planned?'], ['Material deliveries', 'Where will items be carried and temporarily placed?']] } },
      { heading: 'Inspect after the covering is removed', body: ['A final view of the uncovered floor is part of understanding the finished room. Agree a walkthrough with the cabinet and surrounding surfaces visible together. This helps bring the floor into the handover rather than treating it as something beneath the installation.'], list: ['View the exposed floor along the cabinet run.', 'Review the doorway and working passage.', 'Confirm the agreed cleanup and any remaining finish tasks.'] },
    ],
  },
  '/gallery/bathroom-painting/6.jpg': {
    intro: ['Cabinet door alignment is a small detail with a large effect on how a kitchen feels. This progress photograph is a prompt to include the moving parts in the final review, even after the main boxes are installed.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Open the kitchen before judging its appearance', body: ['Use every door and drawer during the walkthrough. A wide photograph mainly shows the fronts. Opening them adds another view: the working room at corners, the meeting of neighboring doors, and the feel of each moving part.'], list: ['Open each door through its intended movement.', 'Check drawers beside appliances and neighboring cabinets.', 'Point out any visible gap that concerns you while the installer is present.'] },
      { heading: 'Follow the reveal lines across the run', body: ['The narrow spaces between fronts contribute to the overall order of the cabinetry. Compare adjacent doors rather than focusing only on one gap. The appropriate adjustments depend on the cabinet and hardware system.', 'Cabinet attachment and alignment come before treating the doors as an isolated finishing task. Ask the installer to review the condition as a whole if a front does not behave as expected.'] },
      { heading: 'Write down the remaining closeout items', body: [], comparison: { caption: 'A practical cabinet handover note', headings: ['Observation', 'What to record'], rows: [['Movement', 'Which specific door or drawer needs review.'], ['Appearance', 'The location of the reveal or panel line you want checked.'], ['Finishing', 'Any agreed trim, hardware, or touch up work remaining.']] } },
      { heading: 'Keep the progress stage separate from the ending', body: ['Protection is still visible in the pictured kitchen. It is not a record of the final handover. Use it to understand why kitchen cabinet door alignment and closeout should be included in the scope, rather than assumed from an attractive cabinet selection.'] },
    ],
  },
  '/gallery/kitchen-cabinets/2.jpg': {
    intro: ['The dark bathroom vanity anchors the pale wall, counter, and mirror. Its useful storage depends on another view that is easy to miss when shopping: the space behind the cabinet doors.'],
    diagramAfter: 2,
    sections: [
      { heading: 'Begin inside the existing cabinet', body: ['Photograph the supply and drain arrangement as well as the items you store. A replacement vanity can have the right outside width and still need a different interior arrangement. Show both views when discussing the installation.'] },
      { heading: 'Compare cabinet size with usable storage', body: [], comparison: { caption: 'Measurements for a replacement bathroom vanity', headings: ['Measurement', 'What it helps explain'], rows: [['Outside width and depth', 'The cabinet footprint in the room.'], ['Interior layout', 'The space occupied by plumbing and the planned shelves or drawers.'], ['Door movement', 'The area needed to use the storage comfortably.'], ['Sink and counter', 'How the top and fittings relate to the cabinet.']] } },
      { heading: 'Allow for the old footprint', body: ['Removing the existing cabinet can reveal wall or floor areas that were previously covered. If the new vanity has a different shape, some of those areas may become visible. Include that possibility in the repair and finishing conversation before ordering.'] },
      { heading: 'Bring the mirror and light into the same view', body: ['The pictured vanity creates a focal point with the mirror above it. Judge the new cabinet alongside the fixtures that will remain, including any light or outlet nearby. This is more useful than choosing its finish from the door sample alone.'], list: ['Show the complete vanity wall from across the room.', 'Identify any mirror or light changes you want included.', 'Bring the new cabinet and top specifications.'] },
      { heading: 'Choose the contrast after checking the fit', body: ['A dark vanity can give a pale bathroom a clear center. Settling the plumbing, storage, and visible footprint first helps you choose that appearance with a realistic dark bathroom vanity installation scope.'] },
    ],
  },
  '/gallery/kitchen-cabinets/3.jpg': {
    intro: ['Gray kitchen cabinets, patterned backsplash tile, and a pale floor share this room. The useful question is how much attention each finish should carry once they are seen together.'],
    diagramAfter: 1,
    sections: [
      { heading: 'Give each finish a place in the palette', body: ['The backsplash supplies a repeated motif while the cabinets provide larger areas of color. The floor becomes a third surface in that view. Put samples of all three together before deciding whether the pattern feels balanced.'], comparison: { caption: 'Review the kitchen as a group of finishes', headings: ['Surface', 'What to compare'], rows: [['Cabinet fronts', 'Their tone beside the strongest color in the backsplash.'], ['Backsplash', 'The complete pattern repeat and proposed grout.'], ['Floor', 'Its color and scale in the same room lighting.'], ['Counter', 'The surface that joins the cabinet and tile selections.']] } },
      { heading: 'Let the appliances interrupt the pattern on paper first', body: ['The range and outlets break up the backsplash field. Show their positions on the layout before approving the pattern start. The motif needs to feel considered across the complete run, including the pieces around those interruptions.'] },
      { heading: 'Identify the work hidden by a finished appearance', body: ['Protective tape remains on the range in the photograph. It is a clue to the installation stage, without establishing the final handover. Cabinet dimensions, appliance clearance, counter fit, and tile endpoints still need to agree within the proposed scope.'], list: ['Identify every appliance that is staying.', 'Bring its dimensions or model information.', 'Show the exposed ends of the cabinet and backsplash runs.'] },
      { heading: 'Judge the pattern from the usual viewing distance', body: ['Look from the kitchen entrance as well as beside the counter. A detailed backsplash may feel lively close up and calmer across the room. Reviewing both helps you choose gray kitchen cabinets with a patterned backsplash that suits your everyday view.'] },
      { heading: 'Keep the floor height in the installation conversation', body: ['If flooring is also changing, discuss its relationship to the cabinet and appliance arrangement before installation. The visible palette is a design choice; the connected measurements give that choice a workable place in the room.'] },
    ],
  },
  '/gallery/kitchen-cabinets/4.jpg': {
    intro: ['Blue cabinetry carries the color in this kitchen. Before choosing a backsplash to accompany it, find every place where the tile will start, turn, or stop.'],
    diagramAfter: 0,
    sections: [
      { heading: 'Trace the backsplash run with the cabinets in view', body: ['Follow the counter from one end to the other. Notice the exposed cabinet ends, outlets, appliance areas, and any place without an upper cabinet. Those boundaries make a blue kitchen cabinet backsplash more specific than a tile sample.'], list: ['Mark the end of each tile run.', 'Include the range and any return wall.', 'Show where the tile will meet an exposed cabinet side.'] },
      { heading: 'Choose the supporting color in the real kitchen', body: ['Compare the backsplash sample directly against the blue finish and counter. You may want a quiet surface that lets the cabinet color remain prominent, or a pattern that adds its own movement. Either choice is easier to judge when the complete group is visible.', 'The photograph shows work in progress. Use its color relationships as a reference while the exact products, final cuts, and room conditions are discussed for your own project.'], comparison: { caption: 'Two backsplash directions to compare', headings: ['Direction', 'What to review'], rows: [['Quiet field', 'How the color and grout support the blue cabinetry.'], ['Patterned field', 'How the full motif behaves at outlets, corners, and ends.']] } },
      { heading: 'Approve the boundaries before the tile order', body: ['Keep a wide wall photo with the cabinet plan and selected tile specifications. It gives the estimator a useful basis for discussing quantity, cuts, and edge finishes. Settle the counter and cabinet positions before those tile boundaries are finalized.'], list: ['Keep the product size and pattern repeat with the plan.', 'Record the chosen edge treatment.', 'Include any cabinet or counter changes in the same brief.'] },
    ],
  },
  '/gallery/kitchen-cabinets/6.jpg': {
    intro: ['A wide kitchen work area view is useful because cabinet installation shares the room with flooring, counters, tile, and access. Before describing the cabinet count, explain the change you actually need.'],
    diagramAfter: 3,
    sections: [
      { heading: 'Choose the scope from the condition of the kitchen', body: [], comparison: { caption: 'Start the cabinet conversation with the right task', headings: ['Task', 'What to show'], rows: [['Replacement', 'The complete room, current boxes, and intended new layout.'], ['Refacing discussion', 'The existing boxes and the fronts you want to change.'], ['Adjustment or repair', 'The specific door, drawer, gap, or damaged part.']] } },
      { heading: 'Show the room beyond the cabinet fronts', body: ['The pictured kitchen includes cream doors, blue tile, and floor protection. Those surrounding surfaces matter to the work even if the cabinets are its main purpose. Include the wall ends and the passage through the room when sending your own photos.'] },
      { heading: 'Give the installation a route into the home', body: ['Tell the contractor how materials reach the kitchen and whether the home remains occupied. Delivery access, protection, and temporary work space help define a realistic installation conversation. A count of boxes does not communicate those conditions.'], list: ['Show the kitchen doorway and delivery route.', 'Identify finishes that must remain in place.', 'Explain any building access requirements you already know.'] },
      { heading: 'Connect the cabinet position to the later finishes', body: ['Suitable attachment and a considered layout come before the final door adjustments, fillers, and trim. Counter and backsplash work depend on the cabinet arrangement. Ask how those stages will be coordinated if several parts of the room are changing.'] },
      { heading: 'Keep the request focused enough to price', body: ['Send one complete kitchen view and close pictures of the areas that concern you. State which appliances and finishes will stay. That combination gives a kitchen cabinet installation request a clear starting scope and leaves the site assessment to establish the details.'], comparison: { caption: 'A useful first cabinet brief', headings: ['Include', 'Why it helps'], rows: [['The intended task', 'It distinguishes a layout change from a front or hardware issue.'], ['Wide and close photos', 'They show both the room context and the specific condition.'], ['Retained items', 'They identify the boundaries of the proposed work.']] } },
    ],
  },
};
