import type { MetadataRoute } from 'next';

import { blogPosts } from './blog/blogData';
import { siteData } from './siteData';

const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/bathroom-remodeling-queens', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/kitchen-remodeling-queens', priority: 0.88, changeFrequency: 'monthly' as const },
  { path: '/tile-installation-queens', priority: 0.86, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.72,
    changeFrequency: 'monthly' as const,
  })),
  { path: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteData.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
