import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import EstimatePrepChecklist from '../components/EstimatePrepChecklist';
import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Kitchen Remodeling Queens | Renovation and Cabinets',
  description:
    'Kitchen remodeling and kitchen renovation in Queens with cabinet installation, backsplash tile, flooring, painting, plaster, trim, doors, and finish work from LOKEIL.',
  path: '/kitchen-remodeling-queens',
});

const projectFit = [
  'Cabinet installation, adjustment, trim, and finish details',
  'Kitchen floor, wall, backsplash, and tile-related updates',
  'Painting, plaster, doors, and surface repair around the kitchen scope',
  'Queens apartment and home kitchens where sequencing and clean finish work matter',
] as const;

const planningNotes = [
  {
    title: 'Start with cabinets and layout',
    body:
      'Kitchen projects get clearer when the cabinet condition, wall lines, flooring transitions, and appliance areas are understood before finish work starts.',
  },
  {
    title: 'Match the visible finish to the real scope',
    body:
      'Some Queens kitchens need cabinet detail work and paint. Others need tile, flooring, doors, plaster, and trim around the same room. The estimate should separate those pieces clearly.',
  },
  {
    title: 'Use real kitchen references',
    body:
      'LOKEIL can use existing kitchen and cabinet photos to talk through finish direction, cabinet detail, and practical scope before the estimate conversation gets too broad.',
  },
] as const;

const localScopeSignals = [
  {
    title: 'Queens kitchen remodeling and renovation are both in play',
    body:
      'Search Console is already showing near-page-two demand for Queens kitchen remodeling and Queens kitchen renovation. The page needs to speak to both: cabinet-led updates, backsplash and flooring work, finish repairs, and larger room changes when the scope calls for it.',
  },
  {
    title: 'Cabinets and finish lines first',
    body:
      'A Queens kitchen remodel needs more than a broad promise. Cabinets, reveals, trim, backsplash edges, paint, and flooring all have to land together.',
  },
  {
    title: 'Partial updates still need sequencing',
    body:
      'Many kitchen leads are not full gut renovations. Cabinet work, backsplash, floor repair, and paint still need a clean order so one trade does not damage the next finish.',
  },
  {
    title: 'Use the gallery as proof',
    body:
      'Kitchen cabinet photos and surrounding finish work make the estimate conversation more concrete than a generic service list.',
  },
] as const;

const faqs = [
  {
    q: 'What kitchen remodeling work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles kitchen cabinet installation and details, flooring, tile-related work, painting, plaster, doors, trim, and finish work for Queens interior remodels.',
  },
  {
    q: 'Can LOKEIL help with a partial kitchen update?',
    a:
      'Yes. A kitchen project can be scoped around cabinets, surfaces, painting, flooring, tile, or finish details without turning into a full gut renovation.',
  },
  {
    q: 'What should I send for a kitchen estimate?',
    a:
      'Send photos of the full kitchen, cabinets, floors, walls, problem areas, and the changes you want. Include the neighborhood and whether appliances or layout changes are part of the plan.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Remodeling Queens',
  serviceType: 'Kitchen remodeling',
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
  url: `${siteData.siteUrl}/kitchen-remodeling-queens`,
  description:
    'Kitchen remodeling in Queens with cabinet installation, tile-related work, flooring, plaster, painting, doors, trim, and finish-focused interior upgrades.',
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

export default function KitchenRemodelingQueens() {
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
              <p className="eyebrow">Queens kitchen remodeling</p>
              <h1 className="page-title mt-4">
                Kitchen remodeling in Queens with cleaner cabinets, surfaces, and finish work.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles kitchen updates across
                Queens and nearby New York City areas, including cabinet work, flooring, tile,
                plaster, painting, doors, trim, and finish details.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/gallery" className="button-secondary">
                  View Kitchen Work
                </Link>
                <Link href="/bathroom-remodeling-queens" className="button-secondary">
                  Bathroom Remodeling
                </Link>
                <Link href="/blog/nyc-kitchen-bathroom-remodel-permits-queens" className="button-secondary">
                  Permit Questions
                </Link>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src="/gallery/kitchen-cabinets/1.jpg"
                alt="Kitchen cabinet installation and finish work by LOKEIL Renovation."
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
              <h2 className="section-title mt-4">What Queens homeowners can ask LOKEIL to handle.</h2>
              <p className="lead mt-6">
                The work stays focused on practical interior remodeling: making the kitchen cleaner,
                more usable, and more finished without overstating the scope.
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
              <h2 className="section-title mt-4">A clearer kitchen remodel starts with the room as it is.</h2>
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
              <p className="eyebrow">Queens kitchen scope</p>
              <h2 className="section-title mt-4">Kitchen updates work best when the cabinet, surface, and finish scope is clear.</h2>
              <p className="lead mt-6">
                A kitchen project can be a full room update, a cabinet-led scope, or a tighter finish repair. The first conversation should separate those paths so the estimate stays practical.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/gallery" className="button-secondary">
                  Kitchen Photos
                </Link>
                <Link href="/cabinet-installation-queens" className="button-secondary">
                  Cabinet Installation
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {localScopeSignals.map((item, index) => (
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
              <p className="eyebrow">Kitchen remodeling FAQ</p>
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
                  <h2 className="section-title mt-4">Planning a Queens kitchen remodel?</h2>
                  <p className="lead mt-6">
                    Call or email with the room, photos if available, and the kitchen changes you
                    want to make. LOKEIL can help turn that into a clearer scope conversation.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                  <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                    Call {siteData.phoneDisplay}
                  </a>
                  <Link href="/tile-installation-queens" className="button-secondary">
                    Tile Installation
                  </Link>
                  <Link href="/blog/kitchen-remodeling-queens-planning-guide" className="button-secondary">
                    Kitchen Planning Guide
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
