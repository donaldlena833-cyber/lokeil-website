import { projectFit, planningNotes, localScopeSignals, faqs } from '../services/content/kitchen-remodeling';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '../components/Breadcrumbs';
import ServicePhotoReferences from '../components/ServicePhotoReferences';
import EstimatePrepChecklist from '../components/EstimatePrepChecklist';
import { estimateEmailHref, siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Kitchen Remodeling in Queens',
  description:
    'Kitchen remodeling from Ridgewood across Queens. See LOKEIL cabinet and finish work, learn what to send for an estimate, and call or email your project.',
  path: '/kitchen-remodeling-queens',
});

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteData.siteUrl}/kitchen-remodeling-queens#service`,
  name: 'Kitchen Remodeling Queens',
  serviceType: 'Kitchen remodeling',
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
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Kitchen remodeling', href: '/kitchen-remodeling-queens' }]} />
        <section className="section-space border-b border-ink/8">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div data-reveal="fade-up">
              <p className="eyebrow">Queens kitchen remodeling</p>
              <h1 className="page-title mt-4">
                Kitchen remodeling in Queens, from cabinets to finishes.
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
                <a href={estimateEmailHref} className="button-secondary">
                  Email Project Details
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-ink/80">
                Send your Queens neighborhood, kitchen photos, and what you want to keep or change.{' '}
                <Link href="/gallery" className="underline underline-offset-4 hover:text-accent">See kitchen work</Link>{' '}
                or read about <Link href="/blog/nyc-kitchen-bathroom-remodel-permits-queens" className="underline underline-offset-4 hover:text-accent">permit questions</Link>.
              </p>
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
              <h2 className="section-title mt-4">A clearer kitchen remodel starts with the room as it is.</h2>
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
                <Link href="/flooring-installation-queens" className="button-secondary">
                  Kitchen Flooring
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {localScopeSignals.map((item, index) => (
                <article key={item.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-3xl text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/80">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServicePhotoReferences servicePath="/kitchen-remodeling-queens" />
        <EstimatePrepChecklist />

        <section className="section-rule section-space">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal="fade-up">
              <p className="eyebrow">Kitchen remodeling FAQ</p>
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
                  <h2 className="section-title mt-4">Planning a Queens kitchen remodel?</h2>
                  <p className="lead mt-6">
                    Call or email with the room, photos if available, and the kitchen changes you
                    want to make. LOKEIL can help turn that into a clearer scope conversation for
                    cabinets, backsplash tile, flooring, painting, permits questions, and any nearby bathroom work.
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
