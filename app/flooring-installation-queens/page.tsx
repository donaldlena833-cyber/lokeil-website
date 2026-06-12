import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import EstimatePrepChecklist from '../components/EstimatePrepChecklist';
import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Flooring Installation Queens',
  description:
    'Flooring installation in Queens for bathrooms, kitchens, apartments, and interior remodels from LOKEIL Renovation in Ridgewood.',
  path: '/flooring-installation-queens',
});

const projectFit = [
  'Bathroom floors, kitchen floors, and interior floor updates tied to remodel work',
  'Tile flooring, finish transitions, doorway edges, and floor-to-wall details',
  'Older Queens apartments where subfloor condition, height changes, and room sequencing matter',
  'Projects where flooring connects to tile, plaster, painting, cabinets, doors, and trim',
] as const;

const planningNotes = [
  {
    title: 'Start with the surface under the finish',
    body:
      'A new floor depends on what is below it. Soft spots, uneven areas, old tile, damaged underlayment, and doorway height changes should be checked before selecting the final material.',
  },
  {
    title: 'Plan transitions before installation',
    body:
      'Doorways, bathroom thresholds, cabinet toe kicks, tubs, showers, and hallway connections decide whether a floor looks intentional or patched in after the fact.',
  },
  {
    title: 'Connect the floor to the whole room',
    body:
      'LOKEIL can coordinate flooring with surrounding tile, plaster, paint, cabinets, doors, and trim so the finished space reads as one project instead of separate repairs.',
  },
] as const;

const flooringDecisionSignals = [
  {
    title: 'The transition details decide the finish',
    body:
      'Doorways, bathroom thresholds, cabinet runs, and hallway connections are where flooring work either looks intentional or patched.',
  },
  {
    title: 'Flooring is usually part of a bigger room scope',
    body:
      'Queens flooring leads often connect to bathroom remodels, kitchens, tile, plaster, painting, or cabinet work. The page should route those buyers to the right connected service.',
  },
  {
    title: 'Prep matters before material choice',
    body:
      'Uneven surfaces, old tile, soft spots, damaged underlayment, and height changes affect the work before the final flooring material is even selected.',
  },
] as const;

const faqs = [
  {
    q: 'What flooring installation work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles interior flooring updates for bathrooms, kitchens, apartments, and remodeling projects where the floor connects to tile, plaster, paint, cabinets, doors, and trim.',
  },
  {
    q: 'Can LOKEIL help with bathroom flooring?',
    a:
      'Yes. Bathroom flooring, tile floors, shower-adjacent transitions, subfloor prep conversations, and finish details are part of LOKEIL Renovation’s interior remodeling scope.',
  },
  {
    q: 'What should I send for a flooring installation estimate?',
    a:
      'Send photos of the room, close-ups of damaged or uneven areas, doorway transitions, the Queens neighborhood, rough dimensions, and whether the flooring is part of a bathroom, kitchen, or larger apartment renovation.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flooring Installation Queens',
  serviceType: 'Flooring installation',
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
  url: `${siteData.siteUrl}/flooring-installation-queens`,
  description:
    'Flooring installation in Queens for bathrooms, kitchens, apartments, transitions, and interior remodeling finish work.',
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

export default function FlooringInstallationQueens() {
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
              <p className="eyebrow">Queens flooring installation</p>
              <h1 className="page-title mt-4">
                Flooring installation in Queens with cleaner prep, transitions, and finish details.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles flooring installation
                across Queens and nearby New York City areas, especially when floors connect to
                bathroom, kitchen, tile, plaster, painting, cabinet, door, and trim work.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/blog/bathroom-flooring-installation-queens-guide" className="button-secondary">
                  Read Flooring Guide
                </Link>
                <Link href="/tile-installation-queens" className="button-secondary">
                  Tile Installation
                </Link>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src="/gallery/bathroom-flooring/4.jpg"
                alt="Bathroom flooring and tile transition work by LOKEIL Renovation."
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
              <h2 className="section-title mt-4">Where a dedicated flooring scope makes sense.</h2>
              <p className="lead mt-6">
                Flooring work is strongest when the existing surface, room use, height transitions,
                and surrounding finishes are planned together.
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
              <h2 className="section-title mt-4">The floor has to work with the room, not just cover it.</h2>
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
              <p className="eyebrow">Flooring decision path</p>
              <h2 className="section-title mt-4">Flooring work has to explain prep, transitions, and the room around it.</h2>
              <p className="lead mt-6">
                A flooring estimate gets clearer when the room, surface condition, transitions, and connected remodeling work are understood first.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/gallery" className="button-secondary">
                  Flooring Photos
                </Link>
                <Link href="/bathroom-remodeling-queens" className="button-secondary">
                  Bathroom Remodeling
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {flooringDecisionSignals.map((item, index) => (
                <article key={item.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-3xl text-olive-50">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-olive-100/72">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <EstimatePrepChecklist />

        <section className="section-rule section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Flooring FAQ</p>
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
                  <h2 className="section-title mt-4">Planning new flooring in Queens?</h2>
                  <p className="lead mt-6">
                    Call or email with the room, photos if available, and whether the flooring
                    connects to a bathroom, kitchen, or larger apartment renovation.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                  <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                    Call {siteData.phoneDisplay}
                  </a>
                  <Link href="/bathroom-remodeling-queens" className="button-secondary">
                    Bathroom Remodeling
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
