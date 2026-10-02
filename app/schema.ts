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
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': `${siteData.siteUrl}/#business`,
    name: siteData.brandName,
    legalName: siteData.legalName,
    founder: { '@type': 'Person', name: siteData.owner },
    description: siteData.description,
    url: siteData.siteUrl,
    telephone: siteData.phoneHref,
    email: siteData.email,
    logo: {
      '@type': 'ImageObject',
      url: `${siteData.siteUrl}${siteData.logo}`,
    },
    image: `${siteData.siteUrl}${siteData.ogImage}`,
    sameAs: [siteData.instagram, siteData.yelp],
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
        email: siteData.email,
        contactType: 'customer service',
        areaServed: 'US-NY',
        availableLanguage: ['English'],
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Queens, NY' },
      { '@type': 'AdministrativeArea', name: 'Brooklyn, NY' },
      { '@type': 'AdministrativeArea', name: 'Manhattan, NY' },
      { '@type': 'AdministrativeArea', name: 'Bronx, NY' },
      { '@type': 'AdministrativeArea', name: 'Staten Island, NY' },
      { '@type': 'AdministrativeArea', name: 'Long Island, NY' },
      { '@type': 'AdministrativeArea', name: 'Westchester County, NY' },
    ],
    paymentAccepted: siteData.paymentMethods.join(', '),
    openingHoursSpecification: siteData.hours.map((hour) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hour.days,
      opens: hour.opens,
      closes: hour.closes,
    })),
  },
];
