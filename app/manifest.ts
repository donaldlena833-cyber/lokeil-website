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
    background_color: '#F1F3E8',
    theme_color: '#F1F3E8',
    icons: [
      { src: '/icon-192.png?v=20260919', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png?v=20260919', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon.svg?v=20260919',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
