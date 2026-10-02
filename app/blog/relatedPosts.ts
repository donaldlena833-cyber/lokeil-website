import type { BlogPost } from './blogData';

export const isPublishedPost = (post: Pick<BlogPost, 'slug'>) =>
  !/^bathroom-remodeling-(astoria|jackson-heights|long-island-city|ridgewood|sunnyside|woodside)-nyc-planning-guide$/.test(post.slug);

export function relatedBlogPosts(post: BlogPost, posts: BlogPost[], limit = 3) {
  const servicePaths = new Set(post.relatedServices?.map((service) => service.href).filter((path) => path.endsWith('-queens')));
  const words = new Set(post.primaryKeyword.toLowerCase().split(/\W+/).filter((word) => word.length > 3));
  return posts.filter((item) => item.slug !== post.slug && isPublishedPost(item))
    .map((item, index) => {
      const matchingServices = item.relatedServices?.filter((service) => servicePaths.has(service.href)).length || 0;
      const matchingWords = item.primaryKeyword.toLowerCase().split(/\W+/).filter((word) => words.has(word)).length;
      const sameFormat = Boolean(item.processDiagram) === Boolean(post.processDiagram) ? 1 : 0;
      return { item, score: matchingServices * 3 + matchingWords * 2 + sameFormat, index };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit).map(({ item }) => item);
}
