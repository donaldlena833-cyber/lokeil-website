import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { buildPageMetadata } from '../../seo';
import { siteData } from '../../siteData';
import { blogPosts, getBlogPost } from '../blogData';

const formatPublishDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const metadata = buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      authors: [siteData.brandName],
      tags: post.keywords,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${siteData.siteUrl}${post.heroImage}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Organization',
      name: siteData.brandName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteData.brandName,
    },
    mainEntityOfPage: `${siteData.siteUrl}/blog/${post.slug}`,
    keywords: post.keywords,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }}
      />

      <article>
        <section className="section-space border-b border-white/8">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div data-reveal="fade-up">
              <Link href="/blog" className="eyebrow hover:text-accent-hover">
                Remodeling blog
              </Link>
              <h1 className="page-title mt-4">{post.title}</h1>
              <p className="lead mt-6">{post.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="chip">{post.primaryKeyword}</span>
                <span className="chip">{post.readTime}</span>
                <time className="chip" dateTime={post.publishDate}>
                  {formatPublishDate(post.publishDate)}
                </time>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                priority
                quality={68}
                sizes="(max-width: 1023px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="image-veil" />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="surface px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
              <div className="space-y-6">
                {post.intro.map((paragraph) => (
                  <p key={paragraph} className="lead max-w-none">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-4xl leading-tight text-olive-50">{section.heading}</h2>
                    <div className="mt-5 space-y-5">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-olive-100/76 sm:text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.list ? (
                      <ul className="mt-6 grid gap-3">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="border-l border-accent/50 pl-4 text-base leading-7 text-olive-100/78"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <section className="mt-12 border-t border-white/10 pt-10">
                <h2 className="text-4xl leading-tight text-olive-50">Common questions</h2>
                <div className="mt-6 divide-y divide-white/10">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="py-6 first:pt-0 last:pb-0">
                      <h3 className="text-2xl text-olive-50">{faq.question}</h3>
                      <p className="mt-3 text-base leading-8 text-olive-100/76">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {post.sources ? (
                <section className="mt-10 border-t border-white/10 pt-8">
                  <h2 className="text-3xl leading-tight text-olive-50">Sources</h2>
                  <ul className="mt-4 grid gap-3">
                    {post.sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          className="text-base leading-7 text-accent hover:text-accent-hover"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <aside className="surface sticky top-32 p-6">
              <p className="eyebrow">Keywords</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="chip normal-case tracking-[0.04em]">
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-2xl text-olive-50">Planning a remodel?</p>
                <p className="mt-3 text-sm leading-7 text-olive-100/72">
                  Send photos, location, and a short scope so LOKEIL can start the estimate
                  conversation clearly.
                </p>
                <Link href="/contact" className="button-primary mt-5 w-full">
                  Get Free Estimate
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Keep planning</p>
            <h2 className="section-title mt-4">More Queens remodeling guides.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="tile-hover">
                <article>
                  <div className="media-frame h-[18rem]">
                    <Image
                      src={related.heroImage}
                      alt={related.heroAlt}
                      fill
                      quality={68}
                      sizes="(max-width: 1023px) 100vw, 29vw"
                      className="object-cover"
                    />
                    <div className="image-veil" />
                  </div>
                  <h3 className="mt-5 text-3xl leading-tight text-olive-50">{related.title}</h3>
                  <p className="mt-3 text-base leading-7 text-olive-100/72">{related.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
