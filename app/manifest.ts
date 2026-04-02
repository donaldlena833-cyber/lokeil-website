import type { MetadataRoute } from 'next';

import { siteData } from './siteData';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.brandName,
    short_name: siteData.shortName,
    description: siteData.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#4A5440',
    theme_color: '#4A5440',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
