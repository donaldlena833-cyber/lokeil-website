// Shared by the service page and its text representation.
export const projectFit = [
  'Bathroom floors, kitchen floors, and interior floor updates tied to remodel work',
  'Tile flooring, finish transitions, doorway edges, and floor-to-wall details',
  'Older Queens apartments where subfloor condition, height changes, and room sequencing matter',
  'Projects where flooring connects to tile, plaster, painting, cabinets, doors, and trim',
] as const;

export const planningNotes = [
  {
    title: 'Start with the surface under the finish',
    body:
      'A new floor depends on what is below it. Soft spots, uneven areas, old tile, damaged underlayment, and doorway height changes should be checked before selecting the final material.',
  },
  {
    title: 'Plan transitions before installation',
    body:
      'Doorways, bathroom thresholds, cabinet toe kicks, tubs, showers, and hallway connections decide whether a floor looks intentional or patched in after the fact.',
  },
  {
    title: 'Connect the floor to the whole room',
    body:
      'LOKEIL can coordinate flooring with surrounding tile, plaster, paint, cabinets, doors, and trim so the finished space reads as one project instead of separate repairs.',
  },
] as const;

export const flooringDecisionSignals = [
  {
    title: 'The transition details decide the finish',
    body:
      'Doorways, bathroom thresholds, cabinet runs, and hallway connections are where flooring work either looks intentional or patched.',
  },
  {
    title: 'Plan connected room finishes together',
    body:
      'If the flooring connects to bathroom, kitchen, tile, plaster, painting, or cabinet work, include those nearby finishes in the estimate so transitions and the work sequence can be planned together.',
  },
  {
    title: 'Prep matters before material choice',
    body:
      'Uneven surfaces, old tile, soft spots, damaged underlayment, and height changes affect the work before the final flooring material is even selected.',
  },
] as const;

export const localFlooringPaths = [
  {
    title: 'Bathroom floor installation',
    body:
      'Bathroom flooring has to deal with tile edges, shower or tub transitions, soft spots, moisture concerns, thresholds, and the way the new floor meets the vanity and walls.',
    href: '/bathroom-remodeling-queens',
    label: 'Bathroom Remodeling Queens',
  },
  {
    title: 'Kitchen floor and cabinet transitions',
    body:
      'Kitchen flooring should be planned with cabinets, appliances, toe kicks, door swings, hallway transitions, backsplash work, and painting so the room does not feel pieced together.',
    href: '/kitchen-remodeling-queens',
    label: 'Kitchen Remodeling Queens',
  },
  {
    title: 'Queens apartment flooring constraints',
    body:
      'Ridgewood, Astoria, Sunnyside, Woodside, and nearby Queens apartments can bring older subfloors, uneven surfaces, building access limits, and room sequencing that should be scoped early.',
    href: '/blog/bathroom-flooring-installation-queens-guide',
    label: 'Bathroom Flooring Guide',
  },
] as const;

export const faqs = [
  {
    q: "Can a new floor go over the existing one?",
    a: "That depends on the existing material, its condition, the chosen flooring system, and the finished height at doors and adjoining rooms. Photograph the current floor and transitions. The supporting surface and product requirements need to be checked before agreeing to cover it.",
  },
  {
    q: 'What flooring installation work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles interior flooring updates for bathrooms, kitchens, apartments, and remodeling projects where the floor connects to tile, plaster, paint, cabinets, doors, and trim.',
  },
  {
    q: 'Can LOKEIL help with bathroom flooring?',
    a:
      'Yes. Bathroom flooring, tile floors, shower-adjacent transitions, subfloor prep conversations, and finish details are part of LOKEIL Renovation’s interior remodeling scope.',
  },
  {
    q: 'What should I send for a flooring installation estimate?',
    a:
      'Send photos of the room, close-ups of damaged or uneven areas, doorway transitions, the Queens neighborhood, rough dimensions, and whether the flooring is part of a bathroom, kitchen, or larger apartment renovation.',
  },
] as const;

