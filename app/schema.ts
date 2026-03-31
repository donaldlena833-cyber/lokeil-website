import { siteData } from './siteData';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteData.name,
  description:
    'Interior remodeling services in Ridgewood, Queens focused on bathrooms, kitchens, tile work, flooring, plaster, painting, cabinetry, doors, steps, and fireplace design.',
  telephone: siteData.phonePrimary,
  email: siteData.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ridgewood',
    addressRegion: 'NY',
    postalCode: '11385',
    addressCountry: 'US',
    streetAddress: siteData.location,
  },
  sameAs: [
    siteData.instagram,
  ],
  priceRange: '$$',
  areaServed: ['Queens', 'Brooklyn', 'Manhattan', 'Long Island', 'Westchester County'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '12:00',
      closes: '17:00',
    },
  ],
};
