import { projectFit, planningNotes, tileProofSignals, localTilePaths, faqs } from '../services/content/tile-installation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '../components/Breadcrumbs';
import ServicePhotoReferences from '../components/ServicePhotoReferences';
import EstimatePrepChecklist from '../components/EstimatePrepChecklist';
import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Tile Installation Queens | Bathrooms & Showers',
  description:
    'Tile installation in Queens for showers, bathroom walls, floors, niches, backsplashes, and clean transitions in Ridgewood and nearby neighborhoods.',
  path: '/tile-installation-queens',
});

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteData.siteUrl}/tile-installation-queens#service`,
  name: 'Tile Installation Queens',
  serviceType: 'Tile installation',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteData.siteUrl}/#business`,
    name: siteData.brandName,
    url: siteData.siteUrl,
    telephone: siteData.phoneHref,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Queens, NY' },
    { '@type': 'City', name: 'New York, NY' },
  ],
  url: `${siteData.siteUrl}/tile-installation-queens`,
  description:
    'Tile installation in Queens for bathroom walls, shower surrounds, floors, niches, backsplashes, and finish-focused interior remodeling work.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function TileInstallationQueens() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Tile installation', href: '/tile-installation-queens' }]} />
        <section className="section-space border-b border-ink/8">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div data-reveal="fade-up">
              <p className="eyebrow">Queens tile installation</p>
              <h1 className="page-title mt-4">
                Tile installation in Queens with cleaner layout, prep, and finish transitions.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles tile installation across
                Queens and nearby New York City areas, including shower tile, bathroom walls,
                tub surrounds, floors, niches, backsplashes, and finish details around the tile work.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/blog/shower-tile-installation-queens-guide" className="button-secondary">
                  Read Tile Guide
                </Link>
                <Link href="/bathroom-remodeling-queens" className="button-secondary">
                  Bathroom Remodeling
                </Link>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src="/gallery/bathroom-tiles/8.jpg"
                alt="Large-format bathroom wall tile with a decorative niche band by LOKEIL Renovation."
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
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Project fit</p>
              <h2 className="section-title mt-4">What Queens homeowners can ask LOKEIL to tile.</h2>
              <p className="lead mt-6">
                The work stays focused on practical interior remodeling: tile that fits the room,
                aligns cleanly, and connects to the surrounding finishes.
              </p>
            </div>

            <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
              <div className="grid gap-5">
                {projectFit.map((item, index) => (
                  <div key={item} className="grid gap-3 border-b border-ink/8 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/95">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg leading-8 text-ink/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-rule section-space bg-sage-soft/60">
          <div className="site-shell">
            <div className="max-w-3xl" data-reveal="fade-up">
              <p className="eyebrow">Planning notes</p>
              <h2 className="section-title mt-4">Better tile work starts before the first piece is set.</h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {planningNotes.map((note, index) => (
                <article key={note.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-3xl text-ink">{note.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/80">{note.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rule section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Finish details</p>
              <h2 className="section-title mt-4">Tile installation needs more detail than a service name.</h2>
              <p className="lead mt-6">
                Good tile work depends on layout, prep, transitions, and how the tile ties into the rest of the remodel.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/gallery" className="button-secondary">
                  Tile Photos
                </Link>
                <Link href="/flooring-installation-queens" className="button-secondary">
                  Flooring Installation
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {tileProofSignals.map((item, index) => (
                <article key={item.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-3xl text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/80">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rule section-space bg-sage-soft/60">
          <div className="site-shell">
            <div className="max-w-3xl" data-reveal="fade-up">
              <p className="eyebrow">Queens tile paths</p>
              <h2 className="section-title mt-4">Tile projects usually start with a room, not just a material.</h2>
              <p className="mt-5 text-base leading-7 text-ink/80">
                A clearer estimate starts by naming where the tile is going, what is around it, and
                which finish details have to land cleanly.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {localTilePaths.map((item, index) => (
                <article key={item.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-3xl text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/80">{item.body}</p>
                  <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-accent hover:text-accent-hover">
                    {item.label}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServicePhotoReferences servicePath="/tile-installation-queens" />
        <EstimatePrepChecklist />

        <section className="section-rule section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Tile installation FAQ</p>
              <h2 className="section-title mt-4">Quick answers before starting the estimate.</h2>
            </div>

            <div className="surface px-6 py-6 sm:px-8">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-ink/8 py-5 first:pt-0 last:border-b-0 last:pb-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-xl text-ink">
                    <span>{faq.q}</span>
                    <span className="text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pt-4 text-base leading-7 text-ink/80">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rule section-space">
          <div className="site-shell">
            <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div data-reveal="fade-up">
                  <p className="eyebrow">Estimate</p>
                  <h2 className="section-title mt-4">Planning tile work in Queens?</h2>
                  <p className="lead mt-6">
                    Call or email with the room, photos if available, and the tile area you want
                    updated. LOKEIL can help turn that into a clearer scope conversation.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                  <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                    Call {siteData.phoneDisplay}
                  </a>
                  <Link href="/kitchen-remodeling-queens" className="button-secondary">
                    Kitchen Remodeling
                  </Link>
                  <Link href="/contact" className="button-secondary">
                    Contact LOKEIL
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
