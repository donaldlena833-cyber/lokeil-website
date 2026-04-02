import type { Metadata } from 'next';

import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Contact LOKEIL Renovation in Ridgewood, Queens for bathrooms, kitchens, tile work, flooring, painting, cabinetry, and other interior remodeling estimates.',
  path: '/contact',
});

const contactCards = [
  {
    label: 'Phone',
    value: siteData.phoneDisplay,
    href: `tel:${siteData.phoneHref}`,
    note: 'Best for direct estimate calls',
  },
  {
    label: 'Email',
    value: siteData.email,
    href: `mailto:${siteData.email}`,
    note: 'Send room details and project photos',
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
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title mt-4">
              Start the estimate conversation with a direct phone call or email.
            </h1>
            <p className="lead mt-6">
              Reach out with the room, the rough scope, and any project photos you have. Phone is
              the fastest path, but email works well too for details and references.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                Call {siteData.phoneDisplay}
              </a>
              <a href={`mailto:${siteData.email}`} className="button-secondary">
                Email Photos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="chip normal-case tracking-[0.06em] text-olive-100/82">
                Ridgewood based
              </span>
              <span className="chip normal-case tracking-[0.06em] text-olive-100/82">
                Queens + NYC service area
              </span>
              <span className="chip normal-case tracking-[0.06em] text-olive-100/82">
                Free estimates
              </span>
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Based in</p>
            <h2 className="mt-3 text-4xl text-olive-50">{siteData.location}</h2>
            <p className="mt-4 text-base leading-7 text-olive-100/72">
              Serving {siteData.serviceArea}.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noreferrer"
                className="soft-surface px-5 py-4 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Instagram</p>
                <p className="mt-2 text-lg text-olive-50">{siteData.instagramHandle}</p>
              </a>
              <div className="soft-surface px-5 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Fastest window</p>
                <p className="mt-2 text-lg text-olive-50">{siteData.hours[0].label}</p>
                <p className="mt-1 text-sm text-olive-100/72">{siteData.hours[0].value}</p>
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
              rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              className="surface tile-hover px-6 py-7"
              data-reveal="fade-up"
              data-delay={String(index + 1)}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent/82">
                {card.label}
              </p>
              <p className="mt-4 text-3xl text-olive-50 break-words">{card.value}</p>
              <p className="mt-3 text-base leading-7 text-olive-100/68">{card.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface p-6 sm:p-8" data-reveal="fade-up">
            <p className="eyebrow">Hours</p>
            <h2 className="section-title mt-4">Business hours</h2>
            <div className="mt-8 space-y-4">
              {siteData.hours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-base text-olive-100/72">{item.label}</span>
                  <span className="text-base font-semibold text-accent">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <p className="eyebrow">Service area</p>
            <h2 className="section-title mt-4">Ridgewood first, broader NYC area after that.</h2>
            <p className="mt-6 text-base leading-8 text-olive-100/72">
              Ridgewood, Queens is the home base, and the company also works across Brooklyn,
              Manhattan, parts of Long Island, and Westchester County.
            </p>
            <p className="mt-5 text-base leading-8 text-olive-100/72">
              If your project is interior-focused and falls within that area, call or send an
              email with the room, location, and rough scope.
            </p>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.634!2d-73.9055!3d40.7004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e3e2a3d7f0b%3A0x2b71f791d3a62e4c!2sRidgewood%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1711843200000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LOKEIL Renovation service area map"
            />
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell">
          <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div data-reveal="fade-up">
                <p className="eyebrow">Free estimate</p>
                <h2 className="section-title mt-4">Call now or send the project by email.</h2>
                <p className="lead mt-6">
                  {siteData.phoneDisplay} is the fastest path. If email is easier, send photos,
                  room dimensions, or a short description to {siteData.email}.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <a href={`mailto:${siteData.email}`} className="button-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
