import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { buildPageMetadata } from '../seo';
import { siteData } from '../siteData';
import { blogPosts } from './blogData';
import { isPublishedPost } from './relatedPosts';

export const metadata: Metadata = buildPageMetadata({
  title: 'Renovation Photo Stories and Planning Guides',
  description:
    'See real LOKEIL renovation photos with clear notes on shower tile, floors, cabinetry, paint, and practical remodeling decisions across New York City.',
  path: '/blog',
});

export default function BlogIndex() {
  const visiblePosts = blogPosts.filter(isPublishedPost);
  const photoPosts = visiblePosts.filter((post) => post.processDiagram);
  const guidePosts = visiblePosts.filter((post) => !post.processDiagram);
  const featuredPost = photoPosts[0];
  const otherPosts = photoPosts.slice(1);

  return (
    <main>
      <section className="section-space border-b border-ink/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Remodeling blog</p>
            <h1 className="page-title mt-4">Real rooms. Better renovation decisions.</h1>
            <p className="lead mt-6">
              Start with a room, a detail, or a neighborhood. Explore LOKEIL project photographs,
              illustrated planning advice, and practical questions to bring to your own renovation.
            </p>
            <nav aria-label="Browse remodeling articles" className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-base font-medium text-accent">
              <a href="#project-photos" className="underline underline-offset-4">Explore the photos</a>
              <a href="#planning-guides" className="underline underline-offset-4">Find a planning guide</a>
            </nav>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="tile-hover block"
            data-reveal="fade-in"
            data-delay="1"
          >
            <article className="media-frame min-h-[26rem] sm:min-h-[34rem]">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.heroAlt}
                fill
                priority
                quality={68}
                sizes="(max-width: 1023px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,11,0.04)_0%,rgba(12,16,11,0.82)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="chip">{featuredPost.primaryKeyword}</span>
                <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-white">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/90">
                  {featuredPost.readTime}
                </p>
              </div>
            </article>
          </Link>
        </div>
      </section>

      <section className="section-space border-b border-ink/8" aria-labelledby="start-planning">
        <div className="site-shell">
          <p className="eyebrow">Start with your question</p>
          <h2 id="start-planning" className="section-title mt-4">Before you choose the finishes.</h2>
          <div className="mt-8 grid gap-7 divide-y divide-ink/10 md:grid-cols-3 md:divide-y-0">
            {[
              ['Compare bathroom estimates', 'See what belongs in the scope and what to ask about allowances.', 'bathroom-remodeling-cost-queens-ny'],
              ['Check the permit questions', 'Separate cosmetic work, trade changes, and building approval.', 'nyc-kitchen-bathroom-remodel-permits-queens'],
              ['Understand the shower layers', 'See the support and waterproofing behind the visible tile.', 'shower-tile-installation-queens-guide'],
            ].map(([label, description, slug]) => <Link key={slug} href={`/blog/${slug}`} className="group pt-6 first:pt-0 md:pt-0">
              <h3 className="text-3xl leading-tight text-accent underline-offset-4 group-hover:underline">{label}</h3>
              <p className="mt-3 max-w-sm text-base leading-7 text-ink/80">{description}</p>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section-space" id="project-photos">
        <div className="site-shell">
          <h2 className="section-title mb-8">Explore the renovation journal</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {otherPosts.map((post, index) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="surface tile-hover grid overflow-hidden sm:grid-cols-[0.82fr_1fr]"
                data-reveal="fade-up"
                data-delay={String((index % 4) + 1)}
              >
                <div className="relative min-h-[16rem]">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    quality={68}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 42vw, 22vw"
                    className="object-cover"
                  />
                  <div className="image-veil" />
                </div>
                <article className="p-6 sm:p-7">
                  <p className="eyebrow">{post.eyebrow}</p>
                  <h2 className="mt-3 text-3xl leading-tight text-ink">{post.title}</h2>
                  <p className="mt-4 text-base leading-7 text-ink/80">{post.description}</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.16em] text-accent/95">
                    {post.readTime}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <h2 className="section-title mb-8 mt-16" id="planning-guides">Remodeling planning guides</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {guidePosts.map((post, index) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="surface tile-hover grid overflow-hidden sm:grid-cols-[0.82fr_1fr]"
                data-reveal="fade-up"
                data-delay={String((index % 4) + 1)}
              >
                <div className="relative min-h-[16rem]">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    quality={68}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 42vw, 22vw"
                    className="object-cover"
                  />
                  <div className="image-veil" />
                </div>
                <article className="p-6 sm:p-7">
                  <p className="eyebrow">{post.eyebrow}</p>
                  <h3 className="mt-3 text-3xl leading-tight text-ink">{post.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/80">{post.description}</p>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">Estimate</p>
                <h2 className="section-title mt-4">Have a Queens bathroom, kitchen, or tile project?</h2>
                <p className="lead mt-6">
                  Use the guides to shape the scope, then send photos and project notes so the
                  estimate conversation starts with the right details.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/contact" className="button-secondary">
                  Contact LOKEIL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
