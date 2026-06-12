import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import EstimatePrepChecklist from '../components/EstimatePrepChecklist';
import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cabinet Installation Queens | Kitchen and Bathroom Cabinets',
  description:
    'Cabinet installation in Queens for kitchens, bathrooms, storage areas, appliance clearances, trim, and interior remodeling projects from LOKEIL Renovation.',
  path: '/cabinet-installation-queens',
});

const projectFit = [
  'Kitchen cabinet installation, adjustment, filler panels, toe kicks, and trim details',
  'Bathroom vanity and storage cabinet work tied to tile, plaster, paint, and flooring',
  'Cabinet updates where uneven walls, floors, appliance clearances, or backsplash edges need review',
  'Queens apartments and homes where cabinetry needs to connect cleanly with the surrounding finish work',
] as const;

const planningNotes = [
  {
    title: 'Start with the cabinet plan',
    body:
      'A useful cabinet estimate starts with width, depth, wall conditions, appliance openings, sink location, door swings, and the finish details around the boxes.',
  },
  {
    title: 'Check walls, floors, and fillers',
    body:
      'Older Queens kitchens and bathrooms are not always square or level. Filler strips, trim, toe kicks, and wall repair can decide whether the finished cabinet line looks intentional.',
  },
  {
    title: 'Coordinate backsplash and paint',
    body:
      'Cabinets rarely stand alone. Backsplash tile, plaster repair, flooring transitions, paint, hardware, and trim should be planned before final placement closes the room.',
  },
] as const;

const cabinetPlanning = [
  {
    title: 'Kitchen cabinet fit and clearances',
    body:
      'Cabinet installation should account for appliance openings, sink and plumbing locations, countertop expectations, backsplash edges, door swings, filler strips, toe kicks, and how level the walls and floors actually are.',
  },
  {
    title: 'Bathroom vanities and storage',
    body:
      'Bathroom cabinet work often touches tile, flooring, mirror placement, lighting, wall repair, paint, and plumbing access. Planning those details together helps avoid awkward gaps around the vanity or storage area.',
  },
  {
    title: 'Finish details after the boxes are set',
    body:
      'The room is not finished when the cabinet boxes are simply placed. Trim, hardware, caulk lines, wall touch-ups, paint edges, and adjacent flooring or tile transitions decide whether the installation looks complete.',
  },
] as const;

const faqs = [
  {
    q: 'Does LOKEIL install cabinets in Queens?',
    a:
      'Yes. LOKEIL handles cabinet installation and related finish work for kitchens, bathrooms, storage areas, and interior remodeling projects in Queens and nearby New York City areas.',
  },
  {
    q: 'Can cabinet installation be part of a smaller update?',
    a:
      'Yes. Cabinet work can be scoped as a focused installation, adjustment, or finish update, or it can be part of a larger kitchen, bathroom, tile, flooring, plaster, and painting project.',
  },
  {
    q: 'What should I send for a cabinet installation estimate?',
    a:
      'Send wide photos of the room, close-ups of existing cabinets and wall conditions, rough cabinet measurements, appliance sizes, plumbing or sink locations, and any cabinet drawings or inspiration photos you already have.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cabinet Installation Queens',
  serviceType: 'Cabinet installation',
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
  url: `${siteData.siteUrl}/cabinet-installation-queens`,
  description:
    'Cabinet installation in Queens for kitchens, bathrooms, storage areas, and remodeling projects where cabinetry connects to tile, flooring, plaster, painting, trim, and finish details.',
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

export default function CabinetInstallationQueens() {
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
              <p className="eyebrow">Queens cabinet installation</p>
              <h1 className="page-title mt-4">
                Cabinet installation in Queens with cleaner lines, storage, and finish detail.
              </h1>
              <p className="lead mt-6">
                {siteData.brandName} is based in Ridgewood and handles cabinet installation
                and related interior finish work across Queens and nearby New York City areas,
                including kitchens, bathrooms, storage areas, tile, plaster, flooring, painting,
                hardware, and trim.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/gallery" className="button-secondary">
                  View Cabinet Work
                </Link>
                <Link href="/kitchen-remodeling-queens" className="button-secondary">
                  Kitchen Remodeling
                </Link>
              </div>
            </div>

            <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
              <Image
                src="/gallery/kitchen-cabinets/3.jpg"
                alt="Kitchen cabinet installation and finish work by LOKEIL Renovation in Queens."
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
              <h2 className="section-title mt-4">Cabinet work that belongs inside a real room plan.</h2>
              <p className="lead mt-6">
                Cabinet installation is strongest when the box, wall, floor, hardware, appliance,
                and finish details are planned together instead of treated as separate tasks.
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
              <h2 className="section-title mt-4">Good cabinet installation depends on the surrounding surfaces.</h2>
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
          <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Cabinet planning</p>
              <h2 className="section-title mt-4">Good cabinet work depends on the room around it.</h2>
              <p className="lead mt-6">
                For Queens kitchens, bathrooms, and storage areas, the cabinet estimate should
                cover the cabinet plan, wall and floor conditions, clearances, hardware, and
                the finish details that surround the installation.
              </p>
            </div>

            <div className="grid gap-5">
              {cabinetPlanning.map((detail, index) => (
                <article key={detail.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-2xl text-olive-50">{detail.title}</h3>
                  <p className="mt-4 text-base leading-7 text-olive-100/72">{detail.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <EstimatePrepChecklist />

        <section className="section-rule section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Cabinet installation FAQ</p>
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
                  <h2 className="section-title mt-4">Planning cabinet work in Queens?</h2>
                  <p className="lead mt-6">
                    Call or email with room photos, rough measurements, cabinet drawings if you
                    have them, and the finish issues around the installation area. LOKEIL can turn
                    that into a clearer scope conversation.
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
