import type { BlogPost } from './blogData';
import plans from './photoStoryPlans.json';
import { neighborhoodOverrides } from './neighborhoods';

type Process = 'shower' | 'floor' | 'niche' | 'cabinet' | 'paint';
type PhotoNote = {
  image: string;
  title: string;
  visible: string;
  process: string;
  decision: string;
  keyword: string;
  diagram: Process;
};

const notes: PhotoNote[] = [
  {
    image: '/gallery/bathroom-tiles/1.jpg',
    title: 'Blue Vertical Shower Tile and the Layout Behind the Look',
    visible: 'Deep blue vertical tile gives this tub wall its rhythm, but the light patches show that the wall was photographed during the work. A recessed niche interrupts the pattern without taking space from the bathing area. The white tub adds contrast beneath the blue field.',
    process: 'A vertical layout starts with a level reference and a plan for cuts at the tub, ceiling, corners, and niche. In a wet area, the wall assembly and waterproofing details must be selected and completed before the tile is set. The photograph shows the tile stage, not the concealed waterproofing system or final cleanup.',
    decision: 'If you want a similar bathroom, send a wide photo of the existing tub wall and the dimensions of the space. Decide whether the niche should hold tall bottles and whether you want a strong color across every wall or only one focal wall.',
    keyword: 'blue vertical shower tile', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-tiles/2.jpg',
    title: 'A Narrow Bathroom With Tile That Keeps the Room Calm',
    visible: 'This narrow bathroom brings a white vanity, toilet, glass shower, pale wall tile, and patterned floor into one sight line. The room feels orderly because the finishes have different jobs: the walls stay quiet while the floor supplies the detail.',
    process: 'In a compact bathroom, layout decisions come before finish choices. The vanity depth, toilet clearance, shower entry, and door swing need to work together. Tile lines and glass placement then have to respect the real dimensions, including walls that may not be perfectly square.',
    decision: 'For an estimate, show the entire room from the doorway and include the current vanity width. Ask whether the existing shower footprint and plumbing locations can stay, since moving either can change the scope substantially.',
    keyword: 'small bathroom tile layout', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-tiles/3.jpg',
    title: 'Vanity, Shower Glass, and Floor Tile in One Small Bathroom',
    visible: 'A slim vanity sits close to the shower glass, with a patterned floor visible under both parts of the room. The photograph is useful because it shows the junctions a cropped vanity picture misses: the cabinet edge, the glass, and the walking space.',
    process: 'Before a vanity is ordered, the installer needs to check the finished wall width, plumbing position, drawer swing, and floor transition. A glass shower panel adds another dimension to check. Even a small mismatch can make daily use feel cramped.',
    decision: 'Measure the vanity and photograph its inside plumbing before shopping for a replacement. If you want new glass too, include that in the same estimate request so the cabinet and shower clearances are considered together.',
    keyword: 'small bathroom vanity and shower layout', diagram: 'cabinet',
  },
  {
    image: '/gallery/bathroom-tiles/4.jpg',
    title: 'Blue Kitchen Backsplash While Cabinets Are Still in Progress',
    visible: 'This photograph catches a kitchen before the finishing work is complete. Cabinets frame a blue backsplash, while open and protected areas show that installation is still underway. It is a useful reminder that a backsplash is fitted to the real cabinet and counter layout.',
    process: 'Cabinet position, counter height, outlets, and the range area determine where a backsplash starts and stops. The tile layout should be checked before setting so narrow slivers do not land in the most visible corners. Outlet covers and finish caulk belong at the end.',
    decision: 'When requesting a kitchen quote, send one wide wall photo and close views of outlets, the range, and cabinet ends. Pick backsplash tile after the cabinet and counter plan is firm, especially if the tile has a visible pattern.',
    keyword: 'blue kitchen backsplash installation', diagram: 'cabinet',
  },
  {
    image: '/gallery/bathroom-tiles/5.jpg',
    title: 'Gray Tub Surround Tile With a Recessed Niche in Progress',
    visible: 'The gray horizontal tile is being built around a tub and recessed niche. Open edges make the sequence visible: the niche, field tile, and outside corners must line up before the final trim and fixtures make the wall look complete.',
    process: 'A niche changes the wall framing and waterproofing detail. Its sill needs a deliberate slope toward the tub or shower, while the surrounding tile cuts need to meet cleanly. The visible tile does not establish which waterproofing method was used beneath it.',
    decision: 'Show your contractor the bottles you expect to store and the wall where you want the niche. Ask how the niche, trim, and tile pattern will meet before work starts, since those details are difficult to revise after setting.',
    keyword: 'tub surround tile niche', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-tiles/6.jpg',
    title: 'Marble Look Shower Tile Framed by Glass',
    visible: 'Large pale tiles, a recessed niche, and glass give this shower a bright, continuous appearance. The glass also exposes the tile work, so corners, edges, and the line where the walls meet the floor are easy to notice.',
    process: 'Large tile requires a flat supporting surface and a layout that places cuts thoughtfully around the niche, controls, and glass line. The shower base and wall waterproofing need a compatible assembly behind the finish. Grout and sealant then complete the visible joints.',
    decision: 'If this is your reference, say whether you prefer a marble look tile or natural stone, since they carry different care and installation considerations. Include photos of the current shower opening and drain position with your quote request.',
    keyword: 'marble look shower tile with glass', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-tiles/7.jpg',
    title: 'The Unfinished Wall Edge Beside a Countertop',
    visible: 'This image shows an open wall edge next to a pale countertop. It is a construction detail rather than a finished room photograph. That edge matters because the wall repair, counter fit, and final trim all meet in a small visible area.',
    process: 'A clean finish starts by checking what is behind the opening and what the new surface needs to meet. Drywall or plaster repair should be brought flush before paint or tile. Countertop and cabinet work should be coordinated so the final edge is not patched twice.',
    decision: 'Photograph damaged or open edges when asking for an estimate, even if they seem minor. A wide photo gives context and a close photo shows the depth, so the repair can be included in the scope.',
    keyword: 'wall repair beside countertop', diagram: 'paint',
  },
  {
    image: '/gallery/bathroom-tiles/8.jpg',
    title: 'Large Shower Wall Tile Meets a Mosaic Floor',
    visible: 'Large wall tiles are held with spacing clips while a smaller mosaic pattern covers the shower floor. The contrast is practical as well as visual: the floor has to turn toward the drain, while the wall can read as broad, quiet planes.',
    process: 'The shower floor slope and drain position govern the floor tile choice. Mosaic pieces can follow changes in plane more readily than large rigid pieces. Wall layout, waterproofing, and floor transitions need to be planned as one wet area, not as unrelated surfaces.',
    decision: 'If you like this combination, ask to see the proposed floor tile at its actual scale. Include a photo of your existing drain and doorway so the installer can discuss the shower base, entry, and tile transitions.',
    keyword: 'large shower wall tile mosaic floor', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-tiles/9.jpg',
    title: 'An Open Shower Niche Before the Tile Edges Are Finished',
    visible: 'Gray tile surrounds a recessed niche whose interior is still open in this photograph. It shows a stage that homeowners rarely see in finished galleries. The opening is where storage, waterproofing, tile thickness, and edge treatment have to agree.',
    process: 'A niche needs solid backing and a waterproof connection to the surrounding shower assembly before tile covers it. The bottom surface should shed water toward the shower. Tile sizes and trim choices affect how many cuts appear around the opening.',
    decision: 'Choose niche height around the people who will use the shower and the items they store. Ask where the niche can fit within the wall framing and how its sill and outside edges will be finished.',
    keyword: 'shower niche installation process', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-tiles/10.jpg',
    title: 'Planning the Last Tile Cuts Around a Gray Tub Niche',
    visible: 'This closer view of a gray tub surround draws attention to the cuts around the recessed niche and the unfinished edge. A small shift in those lines can change the whole wall, even when the tile itself is simple.',
    process: 'The installer first checks level, tub line, niche dimensions, and where full tiles will land. The visible edge treatment should be chosen before the final rows are set. Wet area details underneath must already be resolved at this stage.',
    decision: 'Ask for a layout conversation before tile is installed. Show whether you prefer a trim profile, a mitered corner, or another compatible finished edge, and confirm what is available for your tile.',
    keyword: 'tub niche tile layout', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-flooring/1.jpg',
    title: 'Patterned Bathroom Floor Tile Before the Room Is Finished',
    visible: 'The patterned floor is already a strong feature while nearby surfaces remain unfinished. That stage makes the floor layout easy to inspect: the pattern has to stay balanced at the walls, fixtures, and entry.',
    process: 'A floor tile plan begins with the condition and stiffness of the existing base. The chosen assembly then needs a suitable prepared substrate, setting material, and movement details. Patterned tile adds a layout step because a small alignment error repeats across the room.',
    decision: 'Bring a sample or product link when requesting a quote. Ask where the pattern will start and what happens at the doorway, especially if the new tile changes the finished floor height.',
    keyword: 'patterned bathroom floor tile installation', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/2.jpg',
    title: 'Black and White Checkered Tile in a Bathroom Under Construction',
    visible: 'Black and white squares give this unfinished room a clear graphic floor. The bare surrounding walls reveal why it is worth checking the pattern before fixtures and trim hide its edges.',
    process: 'Checkered tile needs a center line and a decision about how the squares meet each wall. Subfloor preparation and floor height matter just as much as the pattern. At the end, grout color can either soften the grid or make it more prominent.',
    decision: 'If you want a checkerboard floor, share the tile dimensions and a photo from the doorway. Ask to review the proposed border cuts, grout color, and transition to the next room before installation.',
    keyword: 'black and white checkerboard bathroom floor', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/3.jpg',
    title: 'Blue Scallop Tile and the Problem of Starting the Pattern',
    visible: 'A section of blue scallop tile is laid out against an unfinished floor. The repeated curved shape creates a different challenge from square tile: orientation and starting point control how the pattern looks at the room edges.',
    process: 'Before fixing this kind of tile, the installer checks sheet alignment and dry layout. The base must be suitable for the selected tile assembly. Cuts at thresholds, walls, and fixtures need attention because a decorative shape makes awkward half pieces more obvious.',
    decision: 'Ask to see several sheets laid together before committing to the orientation. Send the tile specifications and room dimensions with your estimate request, since sheet size and material can affect prep and installation.',
    keyword: 'blue scallop floor tile layout', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/4.jpg',
    title: 'Herringbone Shower Walls With a Bench and Hex Floor',
    visible: 'Herringbone wall tile, a built in bench, and a hexagonal floor bring several patterns into one shower. The unfinished niche and bench edges make the geometry of the work visible.',
    process: 'Herringbone layout takes more cutting and alignment around corners and openings than a straight grid. The bench and niche are wet area features, so their substrate, waterproofing, slope, and tile edges need a coordinated plan. The floor still has to direct water to the drain.',
    decision: 'If you want a bench, tell the contractor who will use it and how much room you can give up. Ask for a layout drawing showing the bench, niche, controls, and drain before ordering tile.',
    keyword: 'herringbone shower tile with bench', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-flooring/5.jpg',
    title: 'Testing a Geometric Tile Sample Against the Real Floor',
    visible: 'A gray and white geometric tile sample is held over a rough floor. This is a useful design moment: a sample can look different in the room than it did online, especially beside the existing wall color and light.',
    process: 'Tile selection should be followed by a check of size, thickness, slip suitability for the intended area, and the supporting floor assembly. Samples help with color, but the full pattern needs several pieces placed together to show its repeat.',
    decision: 'Keep the sample in the room at different times of day. When you request a quote, include the product link and say whether the tile is for a dry bathroom floor or a wet shower floor.',
    keyword: 'geometric bathroom tile sample', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/6.jpg',
    title: 'How a Patterned Bathroom Floor Meets the Shower',
    visible: 'This second view of a patterned floor shows more of its relationship to the unfinished shower area. The transition between the main bathroom and the wet area is the detail to study here.',
    process: 'The bathroom floor and shower floor may need different slopes, waterproofing details, and tile sizes. Their meeting point should be planned with the shower entry and glass, rather than left until the last day of tile work.',
    decision: 'Ask whether your shower entry will have a curb or a level transition. Include a doorway photo and an image of the existing shower base so the estimate accounts for the whole floor junction.',
    keyword: 'bathroom floor to shower tile transition', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/7.jpg',
    title: 'Checkerboard Floor Cuts at an Unfinished Wall',
    visible: 'A closer angle on the black and white floor puts the perimeter cuts in view. Once baseboard and fixtures are installed, those cuts may be partly hidden, but their alignment still sets the visual order of the room.',
    process: 'Before setting a high contrast floor, establish straight reference lines and check both sides of the room for balanced cuts. The wall itself may be out of square, so a centered pattern can require a careful compromise at the perimeter.',
    decision: 'Ask to approve the pattern direction from the doorway. Also ask how the floor will meet the wall finish and whether baseboard, tile base, or another edge is part of the quote.',
    keyword: 'checkerboard tile floor layout', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/8.jpg',
    title: 'Small Hex Shower Floor Tile Around a Drain',
    visible: 'Black and white hex pieces cover a shower floor with the drain visible. The small format makes the slope legible and turns the drain into part of the layout rather than an afterthought.',
    process: 'A shower floor must slope toward its drain within a complete waterproof system. Tile size and sheet layout need to follow that shape without lippage or awkward cuts at the drain. The drain connection is part of the waterproofing plan beneath the tile.',
    decision: 'Show the existing drain and shower opening when asking for a quote. Decide whether the drain style and position will stay, since changing either can affect plumbing, slope, and tile layout.',
    keyword: 'hex shower floor tile around drain', diagram: 'floor',
  },
  {
    image: '/gallery/bathroom-flooring/9.jpg',
    title: 'Gray Tub Tile Before Fixtures and Final Trim',
    visible: 'The gray tub surround appears here at a stage before all fixtures and edge finishes are in place. The niche and horizontal tile lines show how much of a bathroom can already be decided before the final hardware is installed.',
    process: 'Tub surrounds require a plan for the tub flange, wall backing, water management, penetrations, and tile termination. Once the tile is set, trim can finish edges, but it cannot correct a poor wall assembly or misplaced opening beneath it.',
    decision: 'Ask what is included beyond the tile: niche interior, edge trim, fixture plates, ceiling repair, and caulk. A detailed scope prevents a nearly finished surround from turning into a string of separate small charges.',
    keyword: 'gray tub surround tile installation', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-shower/1.jpg',
    title: 'Marble Look Tub Surround With a Recessed Shelf',
    visible: 'Pale marble look wall tile wraps a tub and a recessed shelf. The ceiling above is still unfinished in the photograph, which makes this a progress image rather than a claim that the bathroom was handed over at this stage.',
    process: 'The tub line, niche opening, and ceiling height determine where tile courses land. A wet area needs an appropriate water management assembly before tile is installed, followed by careful treatment at fixture penetrations and changes of plane.',
    decision: 'Send photos of the tub, ceiling, and plumbing wall with your estimate request. Say whether the ceiling and lighting are part of the remodel, because they affect how complete the finished room will feel.',
    keyword: 'marble look tub surround niche', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-shower/2.jpg',
    title: 'Large White Shower Tile Before the Fixtures Go In',
    visible: 'Large pale tiles cover most of this shower while fixture openings remain visible. At this point the room can look close to done, but the controls, trim, sealing, and final checks still matter.',
    process: 'The wall tile has to be laid around the valve and shower outlet with clean cuts that the chosen trim can cover properly. Behind the tile, the shower assembly needs compatible backing and waterproofing. The visible image does not verify those hidden details.',
    decision: 'Have the faucet and shower trim selected before tile cutting begins. For a quote, provide the fixture model or a clear reference so openings and finish expectations can be discussed.',
    keyword: 'large format white shower tile', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-shower/3.jpg',
    title: 'Blue Feature Tile Around a Tub and Window',
    visible: 'Blue tile creates a feature wall above a tub, with a window interrupting the field. The window is the critical detail in this photograph because it adds corners, a sill, and a source of water exposure inside the bathing area.',
    process: 'Tile layout around a window should account for the reveal, sill pitch, edge treatment, and the wall assembly behind it. In a wet zone, the window junction needs a waterproofing detail that fits the selected system.',
    decision: 'If your tub has a window, include close photos of its sill and any staining or soft material. Ask how the window edges will be finished before choosing a feature tile that needs precise cuts.',
    keyword: 'tub tile around window', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-shower/4.jpg',
    title: 'Tiling a Shower While the Bathroom Ceiling Is Still Open',
    visible: 'White wall and floor tile are visible while the ceiling and nearby surfaces remain in progress. The photograph shows how a shower installation sits within a larger bathroom job rather than arriving as a single finished object.',
    process: 'A coordinated scope puts framing, plumbing, ventilation, electrical work where needed, wall preparation, waterproofing, tile, and final fixtures in a workable order. Ceiling repair and paint belong in the plan if the room is to be finished as a whole.',
    decision: 'When comparing estimates, check whether the ceiling, ventilation, light, and adjacent walls are included. A tile only price will not cover every unfinished surface shown in a room like this.',
    keyword: 'shower tile and bathroom ceiling renovation', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-shower/5.jpg',
    title: 'A Horizontal Tile Tub Wall With a Storage Niche',
    visible: 'Horizontal gray tile runs across a tub wall and into a recessed storage opening. This angle shows the relationship between the long tile lines and the smaller cuts required at the niche.',
    process: 'The tile grid is worked out before installation so the niche does not force thin strips nearby. The opening must have secure backing and be integrated into the wet area waterproofing. The niche sill should guide water back toward the tub.',
    decision: 'Ask for the niche dimensions and location before the wall is closed. If two people share the tub or shower, plan storage for both sets of products rather than choosing a niche only for its appearance.',
    keyword: 'horizontal tub wall tile with niche', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-shower/6.jpg',
    title: 'Two Recessed Niches in a Narrow White Shower',
    visible: 'Two niches are stacked within a narrow white shower wall. The repeated openings make storage prominent without adding shelves that project into the limited standing area.',
    process: 'Multiple niches need a framing and waterproofing plan for every edge and sill. Their placement also has to work around plumbing and studs. Tile courses should connect the openings to the rest of the wall so they look intentional.',
    decision: 'Decide what belongs in each niche before setting their heights. Share the tallest bottle dimensions and a photo of the existing plumbing wall so the contractor can discuss feasible placement.',
    keyword: 'two shower niches in small shower', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-shower/7.jpg',
    title: 'A Colorful Mosaic Niche in a White Shower',
    visible: 'Most of this shower uses quiet white tile, while the niche introduces a small field of color. Spacing clips and incomplete edges show a stage of installation, not the final cleaned and sealed room.',
    process: 'A mosaic insert can change tile thickness and grout spacing inside a niche. The installer needs to plan how the insert meets the larger wall tile, while keeping the niche backing, waterproofing, and sloped sill continuous.',
    decision: 'If you want one colorful detail, a niche can carry it without changing every wall. Bring both tile samples to the estimate and ask how their thicknesses and edge finishes will meet.',
    keyword: 'mosaic shower niche accent tile', diagram: 'niche',
  },
  {
    image: '/gallery/bathroom-shower/8.jpg',
    title: 'Shower Floor and Wall Tile Before Final Hardware',
    visible: 'This angle shows the pale shower walls and floor together, with hardware still to come. Seeing both surfaces in one view makes their meeting line and the scale change between wall and floor easier to judge.',
    process: 'Wall tile, floor tile, shower base, and drain form one assembly. The floor must manage water toward the drain, while the wall finish should meet the base through details compatible with the chosen system. The final fixtures are installed only after the underlying work is ready.',
    decision: 'For a similar bright shower, choose wall and floor samples together under your bathroom lighting. Ask how the drain, glass, and entry will look in the completed room, not only how the wall tile looks in a sample.',
    keyword: 'white shower wall and floor tile', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-painting/2.jpg',
    title: 'Blue Gray Bathroom Walls Beside a New Floor',
    visible: 'A blue gray wall gives this bathroom color while a pale floor and fixtures keep it light. The image shows a room in progress, so the interesting question is how the painted surface meets tile, trim, and the fixtures still to be finished.',
    process: 'Painting after renovation starts with protection, repair, sanding as needed, and a primer suited to the surface. Finish coats follow only after the wall is sound and dry. Edges at tile, vanity, and trim need a careful final pass.',
    decision: 'If you are pricing a bathroom refresh, point out every wall patch and paint line you want included. Ask whether ceiling, door, trim, and moisture appropriate paint are in the scope, since those are often separate choices.',
    keyword: 'bathroom wall painting after renovation', diagram: 'paint',
  },
  {
    image: '/gallery/bathroom-painting/3.jpg',
    title: 'Cream Kitchen Cabinets Against a Blue Backsplash',
    visible: 'Cream cabinets and a blue backsplash make this kitchen feel warm without losing contrast. The cabinet doors, pulls, counter, and tile all appear in the same view, which is the right way to evaluate their colors together.',
    process: 'Cabinet installation begins with a level reference and secure attachment to suitable support. Door reveals, fillers, and end panels are adjusted after boxes are set. A backsplash is laid to the final counter and cabinet positions so its cuts make sense.',
    decision: 'Before requesting a quote, decide which cabinets stay, which are replaced, and whether the backsplash is part of the same project. Photograph every wall, not just the most attractive angle, so the estimate includes corners and end conditions.',
    keyword: 'cream kitchen cabinets blue backsplash', diagram: 'cabinet',
  },
  {
    image: '/gallery/bathroom-painting/4.jpg',
    title: 'Black Waterproofing Coating Before Shower Tile',
    visible: 'The dark coating on these shower walls is part of construction preparation, not a decorative paint finish. Tools and unfinished surfaces make the sequence visible. This image should prompt questions about the shower assembly beneath the tile.',
    process: 'A bonded waterproofing system generally starts with suitable backing, then manufacturer specified treatment of seams, corners, and penetrations before tile is set. Products and required thickness or cure times vary. A photo alone cannot establish that any system passed inspection or testing.',
    decision: 'Ask which waterproofing system is specified for your shower and how its drain and valve connections are handled. Request the product documentation in the proposal if this part of the work matters to your decision.',
    keyword: 'shower waterproofing before tile', diagram: 'shower',
  },
  {
    image: '/gallery/bathroom-painting/5.jpg',
    title: 'Protecting a Kitchen Floor While Cabinets Are Installed',
    visible: 'Cream cabinets and a blue backsplash are visible above a protected floor. This is a practical stage of kitchen work: the room already has new finishes that can be damaged by the next trade or adjustment.',
    process: 'Cabinet boxes are set, leveled, secured, and aligned before doors, fillers, and hardware receive final adjustment. Floor protection stays in place while tools and materials move through the room, then is removed for cleaning and inspection.',
    decision: 'Ask how existing or newly installed flooring will be protected during cabinet and backsplash work. If you are living in the home during renovation, also ask which parts of the kitchen can remain usable at each stage.',
    keyword: 'floor protection during cabinet installation', diagram: 'cabinet',
  },
  {
    image: '/gallery/bathroom-painting/6.jpg',
    title: 'Cabinet Door Alignment Before a Kitchen Is Handed Over',
    visible: 'Protective covering remains near cream kitchen cabinetry in this photo. The picture draws attention to a quieter part of the job: even after the boxes are installed, door gaps and panel lines shape how finished the kitchen feels.',
    process: 'Once cabinets are attached to suitable support, installers check level, plumb, and the reveal between adjacent doors. Hinges can be adjusted, while fillers and trim close gaps at walls. Counter and backsplash work should follow the confirmed cabinet position.',
    decision: 'During a final walkthrough, open every door and drawer. Ask for visible gaps and hardware to be checked while the installer is still on site, and confirm whether touch up work is included.',
    keyword: 'kitchen cabinet door alignment', diagram: 'cabinet',
  },
  {
    image: '/gallery/kitchen-cabinets/2.jpg',
    title: 'A Dark Bathroom Vanity Against a Pale Wall',
    visible: 'A dark vanity, pale counter, and mirror create a clear focal point in this bathroom. The contrast works because the wall and floor stay relatively quiet. The visible cabinet also makes storage and everyday clearance easy to imagine.',
    process: 'A vanity installation starts with room measurements and a check of supply and drain locations. The cabinet must sit level and be secured appropriately, with the counter and sink aligned to the plumbing. Wall and floor repairs may be needed when the old vanity is removed.',
    decision: 'Photograph the inside of your current vanity, not only the front. Share its width, depth, and drawer layout with your quote request so the new cabinet can be checked against plumbing and walking space.',
    keyword: 'dark bathroom vanity installation', diagram: 'cabinet',
  },
  {
    image: '/gallery/kitchen-cabinets/3.jpg',
    title: 'Gray Kitchen Cabinets With a Patterned Backsplash',
    visible: 'Gray cabinets, a patterned backsplash, and a pale floor make three distinct finish layers in this kitchen. Protective tape remains on the range, suggesting the room was photographed around installation rather than after every final detail was removed.',
    process: 'Cabinet layout establishes the working space for appliances and counters. Backsplash tile then needs to meet outlets, corners, cabinet ends, and the range area. Flooring height and transition details should be coordinated before base cabinets are finalized.',
    decision: 'If this mix appeals to you, compare the backsplash sample against your actual cabinet finish and floor under kitchen lighting. Tell the estimator which appliances are staying, since their dimensions shape cabinet and counter clearances.',
    keyword: 'gray kitchen cabinets patterned backsplash', diagram: 'cabinet',
  },
  {
    image: '/gallery/kitchen-cabinets/4.jpg',
    title: 'Blue Kitchen Cabinets During a Backsplash Installation',
    visible: 'Blue cabinetry and tile are visible while this kitchen is still being worked on. A strong cabinet color makes the placement of the backsplash and nearby counter surfaces more noticeable.',
    process: 'Before tile is set, the cabinet line, counter position, outlet locations, and exposed ends should be checked. The backsplash layout can then be balanced so its most visible cuts are deliberate. Cabinet hardware and final sealant finish the composition.',
    decision: 'Decide whether the blue should be the main feature or one of several strong colors. For a quote, send the cabinet plan and a wide wall photo so tile quantity and edge conditions can be estimated realistically.',
    keyword: 'blue kitchen cabinets backsplash', diagram: 'cabinet',
  },
  {
    image: '/gallery/kitchen-cabinets/6.jpg',
    title: 'Kitchen Cabinet Installation Seen From the Work Area',
    visible: 'This angle shows cream cabinet fronts, a blue backsplash, and protection still covering the floor. It gives a more useful sense of the work area than a close crop of a single door would.',
    process: 'A kitchen cabinet installation is a sequence of measuring, setting reference lines, fastening boxes to suitable support, checking reveals, and fitting trim. Protection and access matter during that sequence because several finishes share the same small work zone.',
    decision: 'When you contact LOKEIL, describe whether you need cabinet replacement, refacing, or only adjustment. Send a full kitchen photo and close views of the problem areas so the scope starts with the right work.',
    keyword: 'kitchen cabinet installation process', diagram: 'cabinet',
  },
];

const details: Record<string, string> = {
  '/gallery/bathroom-tiles/1.jpg': 'The niche is placed on the wall that catches the eye first. That makes it useful storage, but also a design feature. Notice how the surrounding vertical lines continue past the opening. If the niche were moved a few inches, the cuts around it would change. That is why its location belongs in the tile layout discussion, not just the framing discussion.',
  '/gallery/bathroom-tiles/2.jpg': 'A narrow room makes every projection count. The vanity, toilet, and shower glass all share the same small passage, so a deeper cabinet could make the room feel tighter even if its width fits. The patterned floor also runs under the sight line from the door. A sample board cannot show that relationship; a measured floor plan can.',
  '/gallery/bathroom-tiles/3.jpg': 'The shower glass is close enough to the vanity that cleaning access matters. A beautiful cabinet can become frustrating if its side is impossible to wipe down or a drawer hits the glass. The floor pattern is another check: the vanity footprint may reveal an unfinished gap if the replacement is smaller than the original.',
  '/gallery/bathroom-tiles/4.jpg': 'The blue field gives this kitchen a clear focal point, but the photo also shows why the work sequence matters. Cabinet installation establishes the edges for tile; the tile does not decide where the cabinets go. If you change cabinet depth or counter thickness late, the backsplash height and outlet alignment may need another look.',
  '/gallery/bathroom-tiles/5.jpg': 'The niche sits within long horizontal rows, so its top and bottom edges will be compared with every grout line nearby. That is more demanding than simply cutting a hole and tiling inside it. The open edge at the side also shows a finish decision still pending. Those are the small choices that determine whether a simple tile looks orderly.',
  '/gallery/bathroom-tiles/6.jpg': 'Glass makes a shower feel open, but it also removes the place where a curtain would hide uneven lines. Large pale tile can amplify a wall that bows or a corner that wanders. Before choosing a similar finish, look at the wall from the shower opening and ask how the installer will handle the existing room geometry.',
  '/gallery/bathroom-tiles/7.jpg': 'An opening beside a counter is easy to overlook in a wide room photograph. Up close, it may decide whether the final edge reads as one continuous surface. It is also a good example of why a quote based only on finish inspiration can miss repair work. The starting condition deserves its own photo and line in the scope.',
  '/gallery/bathroom-tiles/8.jpg': 'The wall tile and floor mosaic solve different visual problems. Larger pieces make the walls feel less busy, while smaller pieces can follow the floor slope. Their colors still need to work together under the actual bathroom light. A sample from each surface viewed side by side can prevent a surprising mismatch after installation.',
  '/gallery/bathroom-tiles/9.jpg': 'This open niche exposes the space that will soon disappear behind the finish. Once tile covers it, the only clues will be the slope of the shelf and the quality of the corners. Homeowners can use a progress photo like this to ask about the sequence before closing, rather than trying to judge waterproofing from a finished surface.',
  '/gallery/bathroom-tiles/10.jpg': 'A closer crop can be more useful than a finished room shot when choosing a tile layout. Here the niche opening and outside edge invite a specific conversation about cut size and trim. That is especially helpful with long tile, because a narrow last piece at the edge can draw attention even if the rest of the wall is straight.',
  '/gallery/bathroom-flooring/1.jpg': 'Patterned tile has a visual center whether or not the room has a geometric center. The entry view usually matters most to the person using the room, so it is worth deciding what should look balanced from that position. The unfinished walls in the photograph make this a good moment to check the layout before base and fixtures cover the perimeter.',
  '/gallery/bathroom-flooring/2.jpg': 'Checkerboard tile brings a strong grid into a room whose walls may not be perfectly square. That can make a small out of square condition more visible than it would be with a quiet floor. A dry layout lets you decide where to absorb the difference. The doorway and the longest sight line usually deserve the most attention.',
  '/gallery/bathroom-flooring/3.jpg': 'A scallop pattern can read like waves or overlapping leaves depending on which way it faces. That is a design decision, not an installation accident. Ask to see the orientation in your room before the setting material is mixed. Also look at how the curved shapes finish at the threshold, where a decorative pattern may need a clean transition.',
  '/gallery/bathroom-flooring/4.jpg': 'The bench changes the proportions of this shower as much as the herringbone does. It takes up standing room, creates additional tile edges, and gives the pattern another surface to meet. A bench can be useful, but its size should follow the person and the shower footprint. This photo is a reason to discuss dimensions before falling in love with the pattern.',
  '/gallery/bathroom-flooring/5.jpg': 'Holding a sample over the real floor is a small but valuable step. The background color of the room changes how the gray and white geometry reads. One piece also hides how often the pattern repeats. Lay out several tiles or sheets and look from the doorway before deciding that a sample has answered the whole design question.',
  '/gallery/bathroom-flooring/6.jpg': 'This view draws the eye to the boundary between the general bathroom floor and the shower. That boundary has to work for water, cleaning, and daily access. It can also change how continuous the room feels. Ask to see a section or simple sketch of the intended entry detail, especially if you are considering low or no curb.',
  '/gallery/bathroom-flooring/7.jpg': 'At the perimeter, a high contrast floor can reveal uneven cuts more readily than a low contrast one. Baseboard or tile base may cover the outermost edge, but the pattern still needs to look deliberate from the center of the room. This is why the finished wall location, not just the rough framing, should guide the final tile layout.',
  '/gallery/bathroom-flooring/8.jpg': 'The drain is a small object with an outsized effect on the tile pattern. Hex pieces can end as tiny fragments around it if the sheets are set without a plan. When looking at a reference photo, pay attention to the tile immediately beside the drain, not only the open field. That is where slope, cuts, and appearance meet.',
  '/gallery/bathroom-flooring/9.jpg': 'The tub wall is photographed before the room is complete, so it is useful for scope rather than a finished look. The niche, open edges, and missing hardware are separate finish tasks. If an estimate says tile installation only, ask whether those details are included. A homeowner should know exactly what the room will look like when the crew leaves.',
  '/gallery/bathroom-shower/1.jpg': 'The unfinished ceiling is a useful reminder that a new tub surround does not automatically mean a finished bathroom. A contractor may be pricing only the wet walls, or the entire room. The difference affects paint, lighting, ventilation, and the final edge where tile stops. Ask for a room wide scope even when the shower is the main reason for the project.',
  '/gallery/bathroom-shower/2.jpg': 'Large pale tiles look simple because there are fewer grout lines, yet each cut becomes more noticeable. Fixture openings and corners are especially visible in a light wall. Before installation, confirm the exact trim kit and the planned tile layout. A different trim plate can change how much room the installer has to make an opening look clean.',
  '/gallery/bathroom-shower/3.jpg': 'A window inside the tub area deserves more attention than an accent color. Water can collect on the sill and reach its corners. The blue tile makes that area attractive, but the practical conversation is about slope, edge details, and the existing window condition. If there is any staining, include it in the initial photos rather than covering it with a finish selection.',
  '/gallery/bathroom-shower/4.jpg': 'A progress photograph like this can help homeowners compare two very different quotes. One may include the full room, including ceiling and nearby wall finishes. Another may include only the shower surfaces. The visible unfinished areas are a checklist: ask who closes, primes, paints, and cleans each one before the job is considered complete.',
  '/gallery/bathroom-shower/5.jpg': 'The long grout lines draw attention to the niche because they pass so close to it. If the opening is too high, too low, or off the intended grid, the cuts can look accidental. The most useful design exercise is to place the niche, valve, and tile courses on the same wall sketch before either framing or tile is final.',
  '/gallery/bathroom-shower/6.jpg': 'Two niches can separate shared products, but they also create twice as many corners to finish. The distance between them is part of the appearance. If you are considering stacked niches, compare their height with the shower controls and the people using the space. Storage is only helpful when it can be reached comfortably.',
  '/gallery/bathroom-shower/7.jpg': 'The mosaic is contained inside the niche, so it can add color without making the whole shower busy. Its smaller pieces and potentially different thickness affect the edge where it meets the larger wall tile. This is a detail to resolve with actual tile samples. A catalog image will not show how the two materials meet in your wall.',
  '/gallery/bathroom-shower/8.jpg': 'This broader angle makes the joint between floor and wall the main visual line. It is also a wet area detail that belongs to a complete shower system. Ask how the glass, curb or entry, and drain will connect to that system. Those choices affect the shower long before a customer decides whether the white tile is warm or cool.',
  '/gallery/bathroom-painting/2.jpg': 'Color can give a compact bathroom personality without changing every hard surface. The blue gray wall works beside a pale floor because the two surfaces have different visual weight. The practical question is whether the wall is ready for paint. A patch that looks flat before priming may show again under the final color and bathroom lighting.',
  '/gallery/bathroom-painting/3.jpg': 'Cream and blue can feel soft in one light and sharp in another. This photograph includes the counter and cabinet hardware, which helps judge the whole palette. If you are choosing a backsplash, bring the cabinet sample or an accurate door color. Matching tile to a phone photo alone can miss a warm or cool undertone.',
  '/gallery/bathroom-painting/4.jpg': 'The dark coating is easy to mistake for black paint if the photograph is filed in a painting folder. In this setting, it is a construction layer associated with the shower. That distinction matters to a homeowner comparing bids. Ask for the specified waterproofing product and installation scope, not simply a promise that the shower will be sealed.',
  '/gallery/bathroom-painting/5.jpg': 'A protected floor is not the glamorous part of a kitchen remodel, but it tells you how work continues after a new surface appears. Cabinets, tile, and hardware may still need adjustment while people carry tools through the room. Discuss protection at the beginning, especially if the floor is staying or was installed in an earlier phase.',
  '/gallery/bathroom-painting/6.jpg': 'Cabinet doors are the surfaces homeowners touch every day. Small gaps that look harmless in a construction photo can be obvious when the kitchen is clean and empty. Include a door and drawer check in the final walkthrough. A good closeout conversation covers alignment, rubbing, handles, and any visible finish touch ups.',
  '/gallery/kitchen-cabinets/2.jpg': 'A dark vanity can make a pale bathroom feel anchored, but it also occupies physical space. Before copying the look, check whether the cabinet depth leaves room to stand, pass, and open drawers. The mirror width and light location should be considered with the vanity, because moving the cabinet center can make the rest of the wall look misaligned.',
  '/gallery/kitchen-cabinets/3.jpg': 'The patterned backsplash is strongest where it can be seen between the counter and wall cabinets. Its repeat has to survive outlet plates and the space behind the range. A homeowner should ask to view the tile pattern across the full run before installation. This is especially useful when a small sample hides the way the motif repeats.',
  '/gallery/kitchen-cabinets/4.jpg': 'Blue cabinets draw the eye first, so nearby surfaces need a clear role. A backsplash can echo the color or give it room to breathe. In either case, the tile ends matter at the cabinet run, range, and window if one is present. Ask to see those endpoints on the plan before buying a full order of tile.',
  '/gallery/kitchen-cabinets/6.jpg': 'The wide work area view helps explain why a cabinet quote is more than a count of boxes. Uneven walls, appliance space, fillers, end panels, and floor protection all affect the finish. When comparing proposals, ask whether the price includes setting and alignment only or also the trim and final hardware adjustments that make the kitchen feel complete.',
};

const aliases: Record<string, string> = {
  '/gallery/bathroom-painting/1.jpg': '/gallery/bathroom-tiles/3.jpg',
  '/gallery/kitchen-cabinets/8.jpg': '/gallery/bathroom-tiles/4.jpg',
  '/gallery/kitchen-cabinets/9.jpg': '/gallery/bathroom-tiles/6.jpg',
  '/gallery/kitchen-cabinets/1.jpg': '/gallery/bathroom-tiles/7.jpg',
  '/gallery/bathroom-shower/9.jpg': '/gallery/bathroom-tiles/9.jpg',
  '/gallery/kitchen-cabinets/7.jpg': '/gallery/bathroom-painting/3.jpg',
  '/gallery/kitchen-cabinets/5.jpg': '/gallery/bathroom-painting/6.jpg',
};

const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const photoStoryNotes = notes.map((note) => ({ ...note, slug: slug(note.title) }));

export function photoStoryForImage(image: string) {
  return photoStoryNotes.find((note) => note.image === (aliases[image] || image));
}

const processSources: Record<Process, { label: string; href: string }> = {
  shower: {
    label: 'Schluter: Essential Water Management in Tiled Showers',
    href: 'https://www.schluter.com/schluter-us/en_US/article-water-management-tiled-showers',
  },
  floor: {
    label: 'Schluter: Reliable Tile Installation on Problematic Substrates',
    href: 'https://www.schluter.com/schluter-us/en_US/reliable-tile-installation-problematic-substrates',
  },
  niche: {
    label: 'Schluter: Shower System Installation Instructions',
    href: 'https://www.schluter.com/schluter-us/en_US/kerdi-shower-kit-installation-instructions',
  },
  cabinet: {
    label: 'MasterBrand: How to Install Cabinets',
    href: 'https://www.masterbrandcabinets.com/get-started/install-your-cabinets/cabinet-installation',
  },
  paint: {
    label: 'Sherwin Williams: How to Prepare Walls for Painting',
    href: 'https://www.sherwin-williams.com/en-us/project-center/paint/how-to-prep-walls',
  },
};

type ContentKey = 'photo' | 'detail' | 'method' | 'home';
type StoryPlan = {
  lead: string;
  description: string;
  outline: [string, ContentKey[]][];
  steps: string[];
  diagramAfter: number;
  diagramHeading: string;
};

const storyPlans = plans as StoryPlan[];

const generatedPhotoStoryPosts: BlogPost[] = photoStoryNotes.map((note, index) => ({
  slug: note.slug,
  title: note.title,
  description: storyPlans[index].description,
  eyebrow: 'From the project gallery',
  publishDate: '2026-10-01',
  readTime: '3 min read',
  heroImage: note.image,
  heroAlt: note.visible.split('.')[0] + '.',
  primaryKeyword: note.keyword,
  keywords: [note.keyword, 'New York City interior renovation', 'LOKEIL Renovation'],
  intro: [storyPlans[index].lead],
  sections: storyPlans[index].outline.map(([heading, keys]) => {
    const content: Record<ContentKey, string> = {
      photo: note.visible,
      detail: details[note.image],
      method: note.process,
      home: note.decision,
    };
    return { heading, body: keys.map((key) => content[key]) };
  }),
  faqs: [],
  processDiagram: {
    src: `/process/stories/${note.slug}.svg`,
    alt: `${storyPlans[index].diagramHeading}. ${storyPlans[index].steps.join('. ')}.`,
    caption: `${storyPlans[index].diagramHeading}. The exact assembly and product specifications depend on the room and chosen materials.`,
  },
  diagramAfter: storyPlans[index].diagramAfter,
  diagramHeading: storyPlans[index].diagramHeading,
  processSteps: storyPlans[index].steps,
  sources: [processSources[note.diagram]],
  relatedServices: [
    { label: 'See all project photos', href: '/gallery' },
    { label: 'Request an estimate', href: '/contact' },
  ],
}));

export const photoStoryPosts: BlogPost[] = generatedPhotoStoryPosts.map((post) =>
  neighborhoodOverrides.find((rewrite) => rewrite.slug === post.slug) || post,
);
