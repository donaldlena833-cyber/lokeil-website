import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Plaster and Drywall Finishing Queens',
  description:
    'Plaster and drywall finishing in Queens for wall repair, skim work, paint prep, apartments, bathrooms, kitchens, and interior remodels from LOKEIL Renovation.',
  path: '/plaster-drywall-finishing-queens',
});

const projectFit = [
  'Wall and ceiling repair before interior painting, trim, cabinet, or tile finish work',
  'Drywall installation, patching, skim work, sanding, and cleaner surface prep',
  'Queens apartment refreshes where older walls need attention before the final finish',
  'Bathroom and kitchen remodels where surfaces need to meet tile, flooring, doors, or cabinetry cleanly',
] as const;

const planningNotes = [
  {
    title: 'Repair before finish',
    body:
      'Paint and trim expose wall problems quickly. Patching, skim work, sanding, and edge prep should be handled before the final coat or finish details go in.',
  },
  {
    title: 'Sequence the messy work',
    body:
      'Drywall and plaster work can create dust and touch-up needs. Planning it before paint, doors, cabinets, and final trim keeps the project cleaner.',
  },
  {
    title: 'Coordinate with the room',
    body:
      'The best surface work connects to the full remodel: tile edges, flooring transitions, cabinet lines, bathroom walls, kitchen backsplashes, and paint finish.',
  },
] as const;

const faqs = [
  {
    q: 'What plaster and drywall finishing work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles interior plaster and drywall finishing tied to remodeling work, including patching, skim work, surface prep, sanding, and wall or ceiling repair before paint, trim, tile, cabinets, doors, or flooring.',
  },
  {
    q: 'Can LOKEIL help before an interior painting project?',
    a:
      'Yes. Wall prep, patching, drywall or plaster finishing, sanding, and cleaner edges can be planned before interior painting so the final room looks more finished.',
  },
  {
    q: 'What should I send for a plaster or drywall estimate?',
    a:
      'Send photos of the damaged or uneven surfaces, the Queens neighborhood, rough room count, whether ceilings are involved, and whether the work connects to painting, bathroom, kitchen, flooring, or other interior remodeling.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plaster and Drywall Finishing Queens',
  serviceType: 'Plaster and drywall finishing',
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
  url: `${siteData.siteUrl}/plaster-drywall-finishing-queens`,
  description:
    'Plaster and drywall finishing in Queens for patching, skim work, surface prep, sanding, painting prep, and interior remodeling finish work.',
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

export default function PlasterDrywallFinishingQueens() {
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
              <p className="eyebrow">Queens plaster and drywall</p>
              <h1 className="page-title mt-4">
                Plaster and drywall finishing in Queens for smoother walls before the final finish.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles interior plaster
                and drywall finishing across Queens and nearby New York City areas, especially
                when surface prep connects to painting, tile, flooring, cabinets, doors, and trim.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/interior-painting-queens" className="button-secondary">
                  Interior Painting
                </Link>
                <Link href="/gallery" className="button-secondary">
                  See Project Photos
                </Link>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src="/gallery/bathroom-painting/2.jpg"
                alt="Surface prep and interior finish work by LOKEIL Renovation."
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
              <h2 className="section-title mt-4">Where plaster and drywall work belongs in the remodel.</h2>
              <p className="lead mt-6">
                Surface work is most useful when it is planned with the room, not treated as a
                last-minute patch after paint, trim, or tile decisions are already locked.
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
              <h2 className="section-title mt-4">Clean walls make the whole room feel more finished.</h2>
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
              <p className="eyebrow">Plaster and drywall FAQ</p>
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
                  <h2 className="section-title mt-4">Planning plaster or drywall finishing in Queens?</h2>
                  <p className="lead mt-6">
                    Call or email with room photos, close-ups of the wall or ceiling condition,
                    and whether the surface work connects to painting, bathroom, kitchen, flooring,
                    or larger apartment renovation work.
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
