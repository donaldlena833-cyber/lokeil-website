import { siteData } from './siteData';

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteData.siteUrl}/#website`,
    name: siteData.brandName,
    url: siteData.siteUrl,
    publisher: { '@id': `${siteData.siteUrl}/#business` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteData.siteUrl}/#business`,
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
      { '@type': 'AdministrativeArea', name: 'Queens, NY' },
      { '@type': 'AdministrativeArea', name: 'Brooklyn, NY' },
      { '@type': 'AdministrativeArea', name: 'Manhattan, NY' },
      { '@type': 'AdministrativeArea', name: 'Long Island, NY' },
      { '@type': 'AdministrativeArea', name: 'Westchester County, NY' },
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
