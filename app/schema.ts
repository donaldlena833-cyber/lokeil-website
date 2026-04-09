import { siteData } from './siteData';

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteData.brandName,
    url: siteData.siteUrl,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteData.brandName,
    legalName: siteData.legalName,
    description: siteData.description,
    url: siteData.siteUrl,
    telephone: siteData.phoneHref,
    email: siteData.email,
    image: `${siteData.siteUrl}${siteData.ogImage}`,
    priceRange: '$$',
    sameAs: [siteData.instagram],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ridgewood',
      addressRegion: 'NY',
      postalCode: '11385',
      addressCountry: 'US',
      streetAddress: siteData.location,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteData.phoneHref,
        contactType: 'customer service',
        areaServed: 'US-NY',
        availableLanguage: ['English'],
      },
    ],
    areaServed: [
      'Queens',
      'Brooklyn',
      'Manhattan',
      'Long Island',
      'Westchester County',
    ],
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
  },
];
