import { astoriaLocalSeoPost } from './astoriaLocalSeoPost';
import { jacksonHeightsBathroomRemodelingPost } from './jacksonHeightsBathroomRemodelingPost';
import { longIslandCityBathroomRemodelingPost } from './longIslandCityBathroomRemodelingPost';
import { ridgewoodBathroomRemodelingPost } from './ridgewoodBathroomRemodelingPost';
import { sunnysideBathroomRemodelingPost } from './sunnysideBathroomRemodelingPost';
import { woodsideBathroomRemodelingPost } from './woodsideBathroomRemodelingPost';
import { photoStoryPosts } from './photoStories';
import { bathroomCostGuide, remodelPermitGuide, showerTileGuide } from './planningGuides';
import { buyerPlanningGuides } from './buyerGuides';

export type BlogSection = {
  heading: string;
  body: string[];
  list?: string[];
  references?: Array<{ label: string; href: string }>;
  links?: Array<{ label: string; href: string }>;
  comparison?: {
    caption: string;
    headings: [string, string];
    rows: Array<[string, string]>;
  };
  visual?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
    legend?: Array<{ label: string; detail: string }>;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  publishDate: string;
  modifiedDate?: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  primaryKeyword: string;
  keywords: string[];
  intro: string[];
  sections: BlogSection[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  sources?: Array<{
    label: string;
    href: string;
  }>;
  relatedServices?: Array<{
    label: string;
    href: string;
  }>;
  processDiagram?: {
    src: string;
    alt: string;
    caption: string;
  };
  diagramAfter?: number;
  diagramHeading?: string;
  processSteps?: string[];
  editorial?: {
    neighborhood: string;
    photoCaption: string;
    takeaway: string;
    choices: Array<{ label: string; detail: string }>;
    estimateTitle: string;
    estimateScope: string;
    illustrationAspect?: 'portrait';
  };
};

export const blogPosts: BlogPost[] = [
  ...photoStoryPosts,
  jacksonHeightsBathroomRemodelingPost,
  woodsideBathroomRemodelingPost,
  sunnysideBathroomRemodelingPost,
  longIslandCityBathroomRemodelingPost,
  ridgewoodBathroomRemodelingPost,
  astoriaLocalSeoPost,
  ...buyerPlanningGuides,
  bathroomCostGuide,
  showerTileGuide,
  remodelPermitGuide,
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
