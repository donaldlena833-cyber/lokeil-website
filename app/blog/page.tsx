import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { buildPageMetadata } from '../seo';
import { siteData } from '../siteData';
import { blogPosts } from './blogData';

export const metadata: Metadata = buildPageMetadata({
  title: 'Remodeling Blog',
  description:
    'Queens remodeling guides from LOKEIL Renovation covering bathroom remodeling, kitchen remodeling, shower tile, small bathrooms, and NYC permit questions.',
  path: '/blog',
});

export default function BlogIndex() {
  const visiblePosts = blogPosts.filter(
    (post) =>
      !post.slug.match(
        /^bathroom-remodeling-(astoria|jackson-heights|long-island-city|ridgewood|sunnyside|woodside)-nyc-planning-guide$/,
      ),
  );
  const featuredPost = visiblePosts[0];
  const otherPosts = visiblePosts.slice(1);

  return (
    <main>
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Remodeling blog</p>
            <h1 className="page-title mt-4">Queens remodeling guides for better project planning.</h1>
            <p className="lead mt-6">
              Practical notes on bathroom remodeling, kitchen planning, shower tile, small spaces,
              and NYC renovation questions for homeowners comparing the next step.
            </p>
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
                <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-olive-50">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-olive-100/70">
                  {featuredPost.readTime}
                </p>
              </div>
            </article>
          </Link>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
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
                  <h2 className="mt-3 text-3xl leading-tight text-olive-50">{post.title}</h2>
                  <p className="mt-4 text-base leading-7 text-olive-100/72">{post.description}</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.16em] text-accent/82">
                    {post.readTime}
                  </p>
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
