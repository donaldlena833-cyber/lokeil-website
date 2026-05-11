import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Tile Installation Queens',
  description:
    'Tile installation in Queens for bathroom walls, shower surrounds, floors, niches, backsplashes, and clean finish transitions from LOKEIL Renovation in Ridgewood.',
  path: '/tile-installation-queens',
});

const projectFit = [
  'Bathroom wall tile, shower surrounds, niches, benches, and tub areas',
  'Bathroom floors, kitchen backsplashes, and interior tile feature surfaces',
  'Layout planning for grout lines, edge trim, corners, and transitions',
  'Queens apartments and homes where tile work connects to plaster, paint, flooring, and finish details',
] as const;

const planningNotes = [
  {
    title: 'Plan the layout before setting tile',
    body:
      'The finished look depends on where full tiles, cuts, grout lines, niches, fixtures, and trim edges land. A cleaner layout conversation avoids awkward slivers in the most visible places.',
  },
  {
    title: 'Think about the surface behind the tile',
    body:
      'Tile installation is not only the visible material. Wet areas, older walls, uneven floors, and patched surfaces all need the right prep before the finish layer can look clean.',
  },
  {
    title: 'Tie tile into the whole room',
    body:
      'LOKEIL can connect tile work with surrounding paint, plaster, flooring, cabinets, doors, and trim so the room feels finished instead of partly updated.',
  },
] as const;

const faqs = [
  {
    q: 'What tile installation work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles bathroom wall tile, shower surrounds, tub areas, floors, niches, kitchen backsplashes, and interior tile feature surfaces as part of Queens remodeling work.',
  },
  {
    q: 'Can LOKEIL help with shower tile installation?',
    a:
      'Yes. Shower tile, tub surrounds, niches, benches, floor transitions, and finish details are part of LOKEIL Renovation’s bathroom remodeling scope.',
  },
  {
    q: 'What should I send for a tile installation estimate?',
    a:
      'Send photos of the room, the surface that needs tile, any tile inspiration or material already selected, the neighborhood, and whether the work is part of a bathroom, kitchen, floor, or backsplash project.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tile Installation Queens',
  serviceType: 'Tile installation',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
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
        <section className="section-space border-b border-white/8">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div data-reveal="fade-up">
              <p className="eyebrow">Queens tile installation</p>
              <h1 className="page-title mt-4">
                Tile installation in Queens with cleaner layout, prep, and finish transitions.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles tile installation across
                Queens and nearby New York City areas, including bathroom walls, shower surrounds,
                floors, niches, backsplashes, and finish details around the tile work.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/blog/shower-tile-installation-queens-guide" className="button-secondary">
                  Read Tile Guide
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
                  <div key={item} className="grid gap-3 border-b border-white/8 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/84">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg leading-8 text-olive-100/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-rule section-space bg-black/8">
          <div className="site-shell">
            <div className="max-w-3xl" data-reveal="fade-up">
              <p className="eyebrow">Planning notes</p>
              <h2 className="section-title mt-4">Better tile work starts before the first piece is set.</h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {planningNotes.map((note, index) => (
                <article key={note.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-3xl text-olive-50">{note.title}</h3>
                  <p className="mt-4 text-base leading-7 text-olive-100/72">{note.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rule section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Tile installation FAQ</p>
              <h2 className="section-title mt-4">Quick answers before starting the estimate.</h2>
            </div>

            <div className="surface px-6 py-6 sm:px-8">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-white/8 py-5 first:pt-0 last:border-b-0 last:pb-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-xl text-olive-50">
                    <span>{faq.q}</span>
                    <span className="text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pt-4 text-base leading-7 text-olive-100/72">{faq.a}</p>
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
