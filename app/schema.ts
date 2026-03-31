export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LOKEIL inc',
  description: 'Professional interior remodeling services in Ridgewood, Queens, NY',
  url: 'https://lokeil.com',
  telephone: '917-518-8753',
  email: 'lokeil2024@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ridgewood',
    addressRegion: 'Queens',
    postalCode: '11385',
    addressCountry: 'US',
    streetAddress: 'Ridgewood, Queens, NY',
  },
  image: 'https://lokeil.com/og-image.jpg',
  sameAs: [
    'https://instagram.com/lokeil.inc',
  ],
  priceRange: '$$',
  businessType: 'Interior Remodeling Service',
  areaServed: ['Queens', 'Brooklyn', 'Manhattan', 'Long Island', 'Westchester'],
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
