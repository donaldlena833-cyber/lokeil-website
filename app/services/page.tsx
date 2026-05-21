import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  coreServices,
  featuredImages,
  processSteps,
  siteData,
} from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Services',
  description:
    'Explore the interior remodeling services offered by LOKEIL Renovation, including bathrooms, kitchens, tile installation, flooring, plaster, painting, cabinets, doors, steps, and fireplace design.',
  path: '/services',
});

export default function Services() {
  return (
    <main>
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Services</p>
            <h1 className="page-title mt-4">
              Interior remodeling services shaped around the work in the portfolio.
            </h1>
            <p className="lead mt-6">
              From bathrooms and kitchens to tile work, flooring, plaster, painting, cabinets,
              and finish details, these are the services most often requested for interior projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/bathroom-remodeling-queens" className="button-secondary">
                Bathroom Remodeling Queens
              </Link>
              <Link href="/kitchen-remodeling-queens" className="button-secondary">
                Kitchen Remodeling Queens
              </Link>
              <Link href="/tile-installation-queens" className="button-secondary">
                Tile Installation Queens
              </Link>
              <Link href="/flooring-installation-queens" className="button-secondary">
                Flooring Installation Queens
              </Link>
              <Link href="/interior-painting-queens" className="button-secondary">
                Interior Painting Queens
              </Link>
              <Link href="/blog" className="button-secondary">
                Remodeling Guides
              </Link>
            </div>
          </div>

          <div className="media-frame min-h-[23rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
            <Image
              src={featuredImages.galleryFeature.src}
              alt={featuredImages.galleryFeature.alt}
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
        <div className="site-shell">
          <div className="max-w-3xl" data-reveal="fade-up">
            <p className="eyebrow">What the client can hire for</p>
            <h2 className="section-title mt-4">Interior work for the rooms people use every day.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {coreServices.map((service, index) => (
              <article
                key={service.title}
                className="surface px-6 py-7 sm:px-8"
                data-reveal="fade-up"
                data-delay={String((index % 5) + 1)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/84">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-3xl text-olive-50">
                      {'href' in service ? (
                        <Link href={service.href} className="hover:text-accent">
                          {service.title}
                        </Link>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-olive-100/72">{service.summary}</p>
                    {'href' in service ? (
                      <Link href={service.href} className="mt-5 inline-flex text-sm font-semibold text-accent hover:text-accent-hover">
                        View {service.title}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">How projects move</p>
            <h2 className="section-title mt-4">Simple sequencing, better client confidence.</h2>
            <p className="lead mt-6">
              Every project starts with the room, the materials, and the practical scope. From
              there, the work moves toward cleaner installation, better finishing, and a final walkthrough.
            </p>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="grid gap-4 border-b border-white/8 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]"
                  data-reveal="slide-left"
                  data-delay={String(index + 1)}
                >
                  <span className="text-4xl text-accent">{step.step}</span>
                  <div>
                    <h3 className="text-2xl text-olive-50">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-olive-100/72">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell">
          <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div data-reveal="fade-up">
                <p className="eyebrow">Estimate</p>
                <h2 className="section-title mt-4">Need a bathroom, kitchen, tile, flooring, or finish upgrade?</h2>
                <p className="lead mt-6">
                  Reach out and describe the room, the scope, and the kind of finish you&apos;re
                  aiming for. We&apos;ll help you start the estimate conversation.
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
  );
}
