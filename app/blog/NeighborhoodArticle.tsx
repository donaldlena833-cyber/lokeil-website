import Image from 'next/image';
import Link from 'next/link';
import NeighborhoodEstimateBrief from '../components/NeighborhoodEstimateBrief';
import Breadcrumbs from '../components/Breadcrumbs';
import { siteData } from '../siteData';
import type { BlogPost } from './blogData';

type Props = { post: BlogPost; schema: object[]; relatedPosts: BlogPost[] };

const dateLabel = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default function NeighborhoodArticle({ post, schema, relatedPosts }: Props) {
  const editorial = post.editorial!;
  const figure = post.processDiagram ? (
    <figure className="my-12 border-y border-ink/15 py-8">
      <p className="eyebrow">A closer look</p>
      <h3 className="mt-3 text-3xl sm:text-4xl">{post.diagramHeading}</h3>
      {editorial.illustrationAspect === 'portrait' ? <div className="relative mx-auto mt-5 aspect-[3/4] w-full max-w-md overflow-hidden"><Image src={post.processDiagram.src} alt={post.processDiagram.alt} fill sizes="(max-width: 639px) 100vw, 450px" className="object-cover" /></div> : <Image src={post.processDiagram.src} alt={post.processDiagram.alt} width={1536} height={1024} sizes="(max-width: 1023px) 100vw, 760px" className="mt-5 h-auto w-full" />}
      <figcaption className="mt-3 text-xs leading-6 text-ink/70">{post.processDiagram.caption}</figcaption>
      {post.processSteps?.length ? <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-7 text-ink/85">{post.processSteps.map((step) => <li key={step}>{step}</li>)}</ol> : null}
    </figure>
  ) : null;

  return (
    <main>
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: editorial.neighborhood, href: `/blog/${post.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="section-space border-b border-ink/15">
          <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div data-reveal="fade-up">
              <Link href="/blog" className="eyebrow underline-offset-4 hover:underline">Renovation journal</Link>
              <p className="mt-6 text-sm font-medium text-accent">{post.eyebrow}</p>
              <h1 className="mt-4 text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">{post.title}</h1>
              <p className="lead mt-7">{post.description}</p>
              <p className="mt-7 text-xs tracking-wide text-ink/70">{post.readTime} · Updated <time dateTime={post.modifiedDate || post.publishDate}>{dateLabel(post.modifiedDate || post.publishDate)}</time> · By <Link href="/about" className="underline underline-offset-4">{siteData.brandName}</Link></p>
              <a href="#estimate-brief" className="mt-7 inline-block border-b border-accent pb-1 text-sm font-medium text-accent">Plan a similar project →</a>
            </div>
            <figure data-reveal="fade-in">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={post.heroImage} alt={post.heroAlt} fill priority quality={68} sizes="(max-width: 1023px) 100vw, 43vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 max-w-xl text-xs leading-6 text-ink/70">{editorial.photoCaption}</figcaption>
            </figure>
          </div>
        </header>
        <div className="site-shell grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div className="min-w-0 max-w-3xl">
            <div className="space-y-6">{post.intro.map((paragraph) => <p key={paragraph} className="text-lg leading-9 text-ink sm:text-xl">{paragraph}</p>)}</div>
            <blockquote className="my-10 border-l-2 border-accent pl-6 font-serif text-3xl leading-snug sm:text-4xl">{editorial.takeaway}</blockquote>
            {post.sections.map((section, index) => (
              <div key={section.heading}>
                <section id={`decision-${index + 1}`} className="mt-10 scroll-mt-32">
                  <h2 className="text-3xl leading-tight sm:text-4xl">{section.heading}</h2>
                  <div className="mt-5 space-y-5">{section.body.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-ink/85 sm:text-lg sm:leading-9">{paragraph}</p>)}</div>
                  {section.list ? <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-8 text-ink/85">{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                  {section.comparison ? (
                    <table className="guide-table mt-7 w-full table-fixed text-left text-sm leading-6 sm:text-base">
                      <caption className="mb-4 text-left font-semibold text-ink">{section.comparison.caption}</caption>
                      <thead><tr>{section.comparison.headings.map((heading) => <th key={heading} scope="col" className="border-b border-ink/20 px-3 py-4 align-top font-semibold first:w-[36%]">{heading}</th>)}</tr></thead>
                      <tbody>{section.comparison.rows.map(([label, detail]) => <tr key={label}><th scope="row" className="border-b border-ink/10 px-3 py-4 align-top font-semibold">{label}</th><td className="border-b border-ink/10 px-3 py-4 align-top text-ink/80">{detail}</td></tr>)}</tbody>
                    </table>
                  ) : null}
                  {section.links?.length ? <ul className="mt-5 grid gap-3 text-sm leading-6">{section.links.map((link) => <li key={link.href}><Link href={link.href} className="text-accent underline underline-offset-4">{link.label}</Link></li>)}</ul> : null}
                  {section.references ? <div className="mt-5 space-y-2">{section.references.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="block text-sm leading-6 text-accent underline decoration-accent/40 underline-offset-4">{source.label} ↗</a>)}</div> : null}
                </section>
                {post.diagramAfter === index ? figure : null}
              </div>
            ))}
            <section className="my-12 border-t border-ink/15 pt-9" aria-label="Compare project scopes">
              <p className="eyebrow">Choose a starting point</p>
              <div className="mt-5 grid gap-7 sm:grid-cols-2">{editorial.choices.map((choice) => <div key={choice.label}><h3 className="text-3xl">{choice.label}</h3><p className="mt-3 text-base leading-8 text-ink/80">{choice.detail}</p></div>)}</div>
            </section>
            <NeighborhoodEstimateBrief neighborhood={editorial.neighborhood} title={editorial.estimateTitle} scope={editorial.estimateScope} slug={post.slug} />
            <nav aria-label="Related renovation services" className="mt-9 flex flex-wrap gap-x-6 gap-y-3 lg:hidden">{post.relatedServices?.map((service) => <Link key={service.href} href={service.href} className="text-sm leading-6 text-accent underline underline-offset-4">{service.label}</Link>)}</nav>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-32 border-l border-ink/15 pl-6">
              <p className="eyebrow">In this story</p>
              <nav className="mt-5 space-y-4" aria-label="Article sections">{post.sections.map((section, index) => <a className="block text-sm leading-6 text-ink/75 hover:text-accent hover:underline" key={section.heading} href={`#decision-${index + 1}`}>{section.heading}</a>)}<a className="block text-sm font-semibold text-accent" href="#estimate-brief">Prepare your estimate brief →</a></nav>
              <div className="mt-8 border-t border-ink/15 pt-6"><p className="eyebrow">Explore the work</p><div className="mt-4 space-y-3">{post.relatedServices?.map((service) => <Link className="block text-sm leading-6 text-accent underline-offset-4 hover:underline" key={service.href} href={service.href}>{service.label}</Link>)}</div></div>
            </div>
          </aside>
        </div>
      </article>
      <section className="section-space border-t border-ink/15 bg-sage-soft/60">
        <div className="site-shell"><p className="eyebrow">Keep planning</p><h2 className="section-title mt-4">Another room, another decision.</h2>
          <div className="mt-9 grid gap-9 sm:grid-cols-2">{relatedPosts.slice(0, 2).map((related) => <Link className="group" key={related.slug} href={`/blog/${related.slug}`}><p className="text-sm text-accent">{related.eyebrow}</p><h3 className="mt-3 text-3xl leading-tight group-hover:underline">{related.title}</h3><p className="mt-3 max-w-xl text-base leading-8 text-ink/80">{related.description}</p></Link>)}</div>
          <Link href="/gallery" className="mt-9 inline-block text-sm font-medium text-accent underline underline-offset-4">See the LOKEIL project gallery →</Link>
        </div>
      </section>
    </main>
  );
}
