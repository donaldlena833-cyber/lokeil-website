import type { Metadata } from 'next';

import { estimateEmailHref, siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact LOKEIL Renovation',
  description:
    'Contact LOKEIL Renovation in Ridgewood, Queens for bathroom remodeling, kitchen remodeling, tile work, flooring, painting, cabinetry, and interior estimate requests.',
  path: '/contact',
});

const contactCards = [
  {
    label: 'Phone',
    value: siteData.phoneDisplay,
    href: `tel:${siteData.phoneHref}`,
    note: 'For direct estimate conversations',
  },
  {
    label: 'Email',
    value: siteData.email,
    href: estimateEmailHref,
    note: 'Opens an email draft with the details we need',
  },
  {
    label: 'Instagram',
    value: siteData.instagramHandle,
    href: siteData.instagram,
    note: 'See more project updates',
  },
];

export default function Contact() {
  return (
    <main>
      <section className="section-space border-b border-ink/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title mt-4">Request a remodeling estimate in Queens.</h1>
            <p className="lead mt-6">
              Call LOKEIL Renovation or email your project details. We are based in Ridgewood
              and handle bathrooms, kitchens, tile, flooring, cabinets, and interior finishes.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/80">
              Include your neighborhood, the room, what you want to change, and current photos.
              The email button opens a draft you can fill in and send from your own email app.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                Call {siteData.phoneDisplay}
              </a>
              <a href={estimateEmailHref} className="button-secondary">
                Draft Estimate Email
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="chip normal-case tracking-[0.06em] text-ink/82">
                Ridgewood based
              </span>
              <span className="chip normal-case tracking-[0.06em] text-ink/82">
                Queens + NYC service area
              </span>
              <span className="chip normal-case tracking-[0.06em] text-ink/82">
                Project-specific estimates
              </span>
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <p className="text-sm uppercase tracking-[0.18em] text-accent/95">Based in</p>
            <h2 className="mt-3 text-4xl text-ink">{siteData.location}</h2>
            <p className="mt-4 text-base leading-7 text-ink/80">
              Serving {siteData.serviceArea}.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface px-5 py-4 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-accent/95">Instagram</p>
                <p className="mt-2 text-lg text-ink">{siteData.instagramHandle}<span className="sr-only">, opens in a new tab</span></p>
              </a>
              <div className="soft-surface px-5 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-accent/95">Business hours</p>
                <p className="mt-2 text-lg text-ink">{siteData.hours[0].label}</p>
                <p className="mt-1 text-sm text-ink/80">{siteData.hours[0].value}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactCards.map((card, index) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="surface tile-hover px-6 py-7"
                data-reveal="fade-up"
                data-delay={String(index + 1)}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent/95">
                {card.label}
              </p>
              <p className="mt-4 text-3xl text-ink break-words">{card.value}</p>
              <p className="mt-3 text-base leading-7 text-ink/80">{card.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-rule section-space bg-sage-soft/60">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface p-6 sm:p-8" data-reveal="fade-up">
            <p className="eyebrow">Hours</p>
            <h2 className="section-title mt-4">Business hours</h2>
            <div className="mt-8 space-y-4">
              {siteData.hours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-ink/8 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-base text-ink/80">{item.label}</span>
                  <span className="text-base font-semibold text-accent">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <p className="eyebrow">Service area</p>
            <h2 className="section-title mt-4">Ridgewood first, broader NYC area after that.</h2>
            <p className="mt-6 text-base leading-8 text-ink/80">
              Ridgewood, Queens is the home base. LOKEIL works across the five boroughs and also
              takes projects in parts of Long Island and Westchester County.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/80">
              If your project is interior-focused and falls within that area, call or send an
              email with the room, location, and rough scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">Estimate prep</p>
            <h2 className="section-title mt-4">What to send before a Queens remodeling estimate.</h2>
            <p className="lead mt-6">
              A few practical details make the first conversation faster and help LOKEIL understand
              whether the job is mostly tile, plumbing-adjacent bathroom work, cabinet fitting,
              flooring, plaster, paint, or another interior finish scope.
            </p>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <div className="space-y-5">
              {[
                'Project address or neighborhood, especially if access, elevator windows, or parking may affect work.',
                'Current photos of the room, including corners, floors, walls, ceilings, fixtures, and damaged areas.',
                'The main goal: repair, refresh, full remodel, new tile, cabinet installation, flooring, plaster, or painting.',
                'Any finish references from the gallery, service pages, or materials you already selected.',
              ].map((item) => (
                <p key={item} className="border-b border-ink/8 pb-5 text-base leading-7 text-ink/80 last:border-b-0 last:pb-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell">
          <div className="mb-8 max-w-3xl" data-reveal="fade-up">
            <p className="eyebrow">Map</p>
            <h2 className="section-title mt-4">Find the service base in Ridgewood, Queens.</h2>
          </div>

          <div className="media-frame h-[24rem] overflow-hidden sm:h-[32rem]" data-reveal="scale-in" data-delay="1">
            <a className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center" href="https://www.google.com/maps/search/?api=1&amp;query=Ridgewood%20Queens%20NY" target="_blank" rel="noopener noreferrer"><span className="section-title">Ridgewood, Queens</span><span className="button-secondary">Open Google Maps — new tab</span></a>
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell">
          <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div data-reveal="fade-up">
                <p className="eyebrow">Estimate request</p>
                <h2 className="section-title mt-4">Call now or send the project by email.</h2>
                <p className="lead mt-6">
                  Call {siteData.phoneDisplay} for a direct conversation, or send photos,
                  room dimensions, and a short description to {siteData.email}.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <a href={estimateEmailHref} className="button-secondary">
                  Draft Estimate Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
