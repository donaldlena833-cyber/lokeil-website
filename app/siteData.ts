export const siteData = {
  legalName: 'LOKEIL Inc.',
  brandName: 'LOKEIL Renovation',
  shortName: 'LOKEIL',
  owner: 'Lorel Beqari',
  descriptor: 'Interior Remodeling',
  siteUrl: 'https://lokeilremodeling.com',
  tagline: 'Ridgewood, Queens based interior remodeling',
  description:
    'LOKEIL Renovation handles bathrooms, kitchens, tile, flooring, plaster, painting, cabinets, doors, steps, and fireplace upgrades for interior renovation projects across Queens and the wider New York City area.',
  phoneDisplay: '(332)999-3846',
  phoneHref: '+13329993846',
  email: 'info@lokeilremodeling.com',
  instagram: 'https://www.instagram.com/lokeil.remodeling/',
  instagramHandle: '@lokeil.remodeling',
  location: 'Ridgewood, Queens, NY 11385',
  serviceArea:
    'Queens, Brooklyn, Manhattan, parts of Long Island, and Westchester County',
  ogImage: '/gallery/bathroom-shower/1.jpg',
  ogImageAlt: 'Bathroom remodel with marble-look tile surround and recessed niche.',
  socialImage: '/opengraph-image',
  socialImageAlt: 'LOKEIL Renovation interior remodeling in Ridgewood, Queens.',
  hours: [
    { label: 'Monday - Friday', value: '10:00 AM - 6:00 PM' },
    { label: 'Saturday', value: '12:00 PM - 5:00 PM' },
    { label: 'Sunday', value: 'Closed' },
  ],
} as const;

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export const heroStats = [
  { value: 'Queens Based', label: 'Serving Ridgewood and the wider NYC area' },
  {
    value: 'Real Project Photos',
    label: 'Every image comes from LOKEIL renovation work',
  },
  {
    value: 'Direct Estimates',
    label: 'Call or email to start the conversation quickly',
  },
] as const;

export const featuredImages = {
  heroMain: {
    src: '/gallery/bathroom-shower/1.jpg',
    alt: 'Marble-look tub surround with recessed niche during remodeling.',
    label: 'Bathroom tile work',
  },
  heroSideTop: {
    src: '/gallery/bathroom-flooring/4.jpg',
    alt: 'Herringbone tile shower walls with a built-in bench.',
    label: 'Flooring and layout',
  },
  heroSideBottom: {
    src: '/gallery/kitchen-cabinets/3.jpg',
    alt: 'Gray kitchen cabinets with patterned backsplash and new flooring.',
    label: 'Cabinets and finishes',
  },
  aboutFeature: {
    src: '/gallery/kitchen-cabinets/9.jpg',
    alt: 'Finished shower enclosure with marble-look tile and glass partition.',
  },
  galleryFeature: {
    src: '/gallery/bathroom-tiles/8.jpg',
    alt: 'Large-format bathroom wall tile with decorative shower niche band.',
  },
} as const;

export const coreServices = [
  {
    title: 'Bathroom remodeling',
    summary:
      'Tile layouts, shower surrounds, flooring, waterproofing details, fixtures, and finish work for tighter, cleaner bathroom upgrades.',
  },
  {
    title: 'Kitchen remodeling',
    summary:
      'Cabinet installation, backsplash work, flooring, trim, and finish coordination for more usable everyday kitchens.',
  },
  {
    title: 'Tile installation',
    summary:
      'Walls, floors, showers, niches, fireplaces, and feature surfaces installed with careful alignment and clean transitions.',
  },
  {
    title: 'Flooring',
    summary:
      'Durable interior flooring updates that help rooms feel finished, level, and visually connected.',
  },
  {
    title: 'Plaster and drywall finishing',
    summary:
      'Surface repair, skim work, drywall installation, and prep that creates a smoother base before paint or trim.',
  },
  {
    title: 'Interior painting',
    summary:
      'Clean paint work that sharpens the final look and helps renovated spaces feel complete.',
  },
  {
    title: 'Cabinet installation',
    summary:
      'Kitchen, bath, and storage cabinetry fitted with attention to reveal lines, hardware, and surrounding finishes.',
  },
  {
    title: 'Doors and trim',
    summary:
      'Interior door installation, replacement, and finishing touches that pull the room together.',
  },
  {
    title: 'Steps design',
    summary:
      'Built-in stair and step solutions that balance structure, utility, and cleaner visual flow.',
  },
  {
    title: 'Fireplace design',
    summary:
      'Fireplace surround and finish upgrades that create a strong focal point inside the room.',
  },
] as const;

export const craftsmanshipPoints = [
  {
    title: 'Detail-first execution',
    body:
      'The small things matter here: how tile lines land, how cabinetry sits, and how one material transitions into the next.',
  },
  {
    title: 'Interior-focused scope',
    body:
      'Bathrooms, kitchens, finishes, surfaces, and interior upgrades stay at the center of the work.',
  },
  {
    title: 'Modern, clean results',
    body:
      'The visual direction leans quiet and polished instead of flashy, matching the kind of finished spaces clients are hiring for.',
  },
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Conversation and scope',
    description:
      'We start with the room, the problem, and the finish level you want to reach.',
  },
  {
    step: '02',
    title: 'Material and layout planning',
    description:
      'Tile direction, cabinetry, surfaces, and practical details are aligned before the work moves.',
  },
  {
    step: '03',
    title: 'Build and finish',
    description:
      'Execution stays focused on clean lines, durable installation, and a better final feel in the space.',
  },
  {
    step: '04',
    title: 'Final walkthrough',
    description:
      'The last pass is about tightening details, checking finish quality, and handing over a space that feels complete.',
  },
] as const;

export const valuePoints = [
  'Real project imagery instead of stock photos',
  'A cleaner finish language across tile, paint, cabinetry, and trim',
  'A direct contact point for estimates and scheduling',
  'Interior renovation scope presented in clearer, simpler language',
] as const;

export type GalleryCategory =
  | 'all'
  | 'bathroom-tiles'
  | 'bathroom-flooring'
  | 'bathroom-shower'
  | 'bathroom-painting'
  | 'kitchen-cabinets';

export const galleryCategories: Array<{ id: GalleryCategory; label: string }> = [
  { id: 'all', label: 'All photos' },
  { id: 'bathroom-shower', label: 'Showers' },
  { id: 'bathroom-tiles', label: 'Bathroom tile' },
  { id: 'bathroom-flooring', label: 'Flooring' },
  { id: 'kitchen-cabinets', label: 'Kitchen and cabinets' },
  { id: 'bathroom-painting', label: 'Paint and prep' },
];

const makeImageItems = (
  category: Exclude<GalleryCategory, 'all'>,
  folder: string,
  count: number,
  label: string,
) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${category}-${index + 1}`,
    category,
    src: `/gallery/${folder}/${index + 1}.jpg`,
    alt: `${label} project photo ${index + 1} completed by ${siteData.brandName} in the New York City area.`,
  }));

export const galleryItems = [
  ...makeImageItems('bathroom-tiles', 'bathroom-tiles', 10, 'Bathroom tile detail'),
  ...makeImageItems(
    'bathroom-flooring',
    'bathroom-flooring',
    9,
    'Bathroom flooring detail',
  ),
  ...makeImageItems('bathroom-shower', 'bathroom-shower', 9, 'Bathroom shower remodel'),
  ...makeImageItems(
    'bathroom-painting',
    'bathroom-painting',
    6,
    'Surface prep and painting',
  ),
  ...makeImageItems(
    'kitchen-cabinets',
    'kitchen-cabinets',
    9,
    'Kitchen and cabinet installation',
  ),
] as const;

export const photoCount = galleryItems.length;

export const featuredWork = [
  {
    title: 'Tile-led bathrooms',
    body:
      'Shower walls, niches, floors, benches, and marble-look surfaces that make bathrooms feel more complete.',
    src: '/gallery/bathroom-shower/9.jpg',
    alt: 'Finished shower enclosure with marble-look tile and hex floor.',
  },
  {
    title: 'Cabinet and kitchen updates',
    body:
      'Storage, finish upgrades, and cleaner kitchen layouts built around daily use.',
    src: '/gallery/kitchen-cabinets/3.jpg',
    alt: 'Gray kitchen cabinets with backsplash and new appliances.',
  },
  {
    title: 'Material and finish details',
    body:
      'The smaller alignment and transition decisions that make the entire room read better.',
    src: '/gallery/bathroom-flooring/4.jpg',
    alt: 'Herringbone shower wall tile paired with hex flooring and bench detail.',
  },
] as const;
