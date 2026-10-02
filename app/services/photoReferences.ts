// Select photographs by the work they show, rather than their original folder names.
export const servicePhotoReferences: Record<string, { heading: string; intro: string; images: string[] }> = {
  '/bathroom-remodeling-queens': {
    heading: 'Look at the bathroom details before choosing your scope.',
    intro: 'Compare a vanity beside glass, recessed shower storage, and a niche in progress. Each photograph opens its own story about the decisions behind that detail.',
    images: ['/gallery/bathroom-tiles/3.jpg', '/gallery/bathroom-flooring/4.jpg', '/gallery/bathroom-tiles/9.jpg'],
  },
  '/kitchen-remodeling-queens': {
    heading: 'Follow a kitchen from cabinet placement to the final surfaces.',
    intro: 'These kitchen photographs show backsplash boundaries, a cabinet installation in progress, and the counter decision that helps define a refresh.',
    images: ['/gallery/bathroom-tiles/4.jpg', '/gallery/kitchen-cabinets/6.jpg', '/gallery/bathroom-painting/6.jpg'],
  },
  '/tile-installation-queens': {
    heading: 'See how a tile choice changes the layout.',
    intro: 'A vertical shower wall, a loose floor selection, and a marked tile wall bring different questions: layout, future care, and final edge finishing. Open the detail closest to your project.',
    images: ['/gallery/bathroom-tiles/1.jpg', '/gallery/bathroom-flooring/1.jpg', '/gallery/bathroom-tiles/10.jpg'],
  },
  '/flooring-installation-queens': {
    heading: 'Start with the places where the floor meets something else.',
    intro: 'A floor layout, the boundaries beside a shower entry, and a bold hexagon pattern show why flooring needs more than a material choice.',
    images: ['/gallery/bathroom-flooring/3.jpg', '/gallery/bathroom-flooring/6.jpg', '/gallery/bathroom-flooring/8.jpg'],
  },
  '/cabinet-installation-queens': {
    heading: 'Cabinet fit is easier to discuss with a real reference.',
    intro: 'Use these photos to compare room clearances, the installation work area, and the cabinet and counter boundaries of a kitchen refresh.',
    images: ['/gallery/kitchen-cabinets/2.jpg', '/gallery/kitchen-cabinets/6.jpg', '/gallery/bathroom-painting/6.jpg'],
  },
  '/interior-painting-queens': {
    heading: 'A fresh color starts with the condition of the wall.',
    intro: 'The painted bathroom and the exposed edge beside a counter show two different starting points. A preparation and painting estimate should reflect yours.',
    images: ['/gallery/bathroom-painting/2.jpg', '/gallery/bathroom-tiles/7.jpg'],
  },
  '/plaster-drywall-finishing-queens': {
    heading: 'Show the unfinished areas, not just the finish you want.',
    intro: 'An open wall edge and an unfinished bathroom ceiling help explain where repairs stop and the final finish begins.',
    images: ['/gallery/bathroom-tiles/7.jpg', '/gallery/bathroom-shower/4.jpg'],
  },
};
