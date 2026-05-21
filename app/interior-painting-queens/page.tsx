import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Interior Painting Queens',
  description:
    'Interior painting in Queens for apartments, bathrooms, kitchens, and remodeling finish work from LOKEIL Renovation in Ridgewood.',
  path: '/interior-painting-queens',
});

const projectFit = [
  'Apartment painting, room refreshes, and interior repainting tied to remodeling work',
  'Bathroom and kitchen paint work after tile, flooring, cabinet, plaster, or drywall updates',
  'Wall and ceiling prep where patching, skim work, sanding, and cleaner edges matter',
  'Finish-stage projects where paint needs to coordinate with trim, doors, cabinets, and tile',
] as const;

const planningNotes = [
  {
    title: 'Prep decides the finish',
    body:
      'Paint looks cleaner when the wall underneath is handled first. Small repairs, sanding, caulk lines, and edge prep should be part of the plan before color goes on.',
  },
  {
    title: 'Match paint to the room',
    body:
      'Bathrooms, kitchens, hallways, and bedrooms do not all wear the same way. Moisture, cleaning, light, and daily use should guide the finish choice.',
  },
  {
    title: 'Sequence around the remodel',
    body:
      'Paint should land at the right point in the project, after messy surface work and before the final trim, door, cabinet, or fixture details are fully closed out.',
  },
] as const;

const faqs = [
  {
    q: 'What interior painting work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles interior painting for apartments, bathrooms, kitchens, bedrooms, hallways, and remodeling projects where paint connects to plaster, drywall, tile, flooring, cabinets, doors, and trim.',
  },
  {
    q: 'Can LOKEIL help with wall prep before painting?',
    a:
      'Yes. Surface prep, patching conversations, drywall or plaster finishing, sanding, and cleaner paint edges are part of LOKEIL Renovation’s interior remodeling scope.',
  },
  {
    q: 'What should I send for an interior painting estimate?',
    a:
      'Send photos of the rooms, close-ups of damaged or uneven walls, the Queens neighborhood, approximate room count, ceiling height if unusual, and whether painting is part of a bathroom, kitchen, or larger apartment renovation.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Interior Painting Queens',
  serviceType: 'Interior painting',
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
  url: `${siteData.siteUrl}/interior-painting-queens`,
  description:
    'Interior painting in Queens for apartments, bathrooms, kitchens, surface prep, drywall or plaster finishing, and remodeling finish work.',
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

export default function InteriorPaintingQueens() {
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
              <p className="eyebrow">Queens interior painting</p>
              <h1 className="page-title mt-4">
                Interior painting in Queens with better prep, sharper edges, and cleaner finish work.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles interior painting
                across Queens and nearby New York City areas, especially when paint connects
                to plaster, drywall, tile, flooring, cabinets, doors, and trim.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/services" className="button-secondary">
                  View Services
                </Link>
                <Link href="/gallery" className="button-secondary">
                  See Project Photos
                </Link>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src="/gallery/bathroom-painting/1.jpg"
                alt="Interior painting and surface prep work by LOKEIL Renovation."
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
              <h2 className="section-title mt-4">Where a dedicated painting scope makes sense.</h2>
              <p className="lead mt-6">
                Interior painting works best when the wall condition, room use, surrounding
                finishes, and project sequencing are planned before the first coat.
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
              <h2 className="section-title mt-4">A better paint job starts before the paint.</h2>
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
              <p className="eyebrow">Painting FAQ</p>
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
                  <h2 className="section-title mt-4">Planning interior painting in Queens?</h2>
                  <p className="lead mt-6">
                    Call or email with the room count, photos if available, and whether the painting
                    connects to drywall, plaster, bathroom, kitchen, or larger apartment renovation work.
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
