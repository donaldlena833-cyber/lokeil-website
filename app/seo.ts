import type { Metadata } from 'next';

import { siteData } from './siteData';

type MetadataArgs = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: MetadataArgs): Metadata {
  const fullTitle = `${title} | ${siteData.shortName}`;
  const metaDescription =
    description.length <= 155
      ? description
      : `${description.slice(0, 152).replace(/\s+\S*$/, '')}…`;

  return {
    title: path === '/' ? fullTitle : title,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: path,
      title: fullTitle,
      description: metaDescription,
      siteName: siteData.brandName,
      images: [
        {
          url: siteData.socialImage,
          alt: siteData.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [siteData.socialImage],
    },
  };
}
