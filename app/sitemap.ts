import type { MetadataRoute } from 'next';

import { blogPosts } from './blog/blogData';
import { siteData } from './siteData';

const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const, lastModified: '2026-05-24' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/bathroom-remodeling-queens', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/kitchen-remodeling-queens', priority: 0.88, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/tile-installation-queens', priority: 0.86, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/flooring-installation-queens', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/plaster-drywall-finishing-queens', priority: 0.84, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/interior-painting-queens', priority: 0.84, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
  { path: '/cabinet-installation-queens', priority: 0.84, changeFrequency: 'monthly' as const, lastModified: '2026-05-26' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-05-24' },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.72,
    changeFrequency: 'monthly' as const,
    lastModified: post.publishDate,
  })),
  { path: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-05-10' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-05-10' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteData.siteUrl}${route.path}`,
    lastModified: new Date(`${route.lastModified}T00:00:00.000Z`),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
