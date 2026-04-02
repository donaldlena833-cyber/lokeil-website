import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  coreServices,
  craftsmanshipPoints,
  featuredImages,
  featuredWork,
  heroStats,
  processSteps,
  siteData,
  valuePoints,
} from './siteData';
import { buildPageMetadata } from './seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Interior Remodeling in Ridgewood, Queens',
  description:
    'Interior remodeling in Ridgewood, Queens with bathrooms, kitchens, tile work, flooring, plaster, painting, cabinetry, and finish-focused upgrades.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="grid-lines absolute inset-0 opacity-[0.18]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.14),transparent_28%)]" />

        <div className="site-shell relative grid gap-12 pb-20 pt-10 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="max-w-[38rem]">
            <p className="eyebrow" data-reveal="fade-up">
              {siteData.tagline}
            </p>
            <h1 className="display-title mt-5" data-reveal="fade-up" data-delay="1">
              Cleaner bathrooms, kitchens, and finish work.
            </h1>
            <p className="lead mt-6" data-reveal="fade-up" data-delay="2">
              {siteData.brandName} handles bathrooms, kitchens, flooring, plaster, painting,
              cabinets, doors, steps, and fireplace design across Queens and the wider
              New York City area.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row" data-reveal="fade-up" data-delay="3">
              <Link href="/gallery" className="button-primary">
                View Our Work
              </Link>
              <Link href="/contact" className="button-secondary">
                Get Free Estimate
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3" data-reveal="fade-up" data-delay="4">
              {heroStats.map((item) => (
                <div key={item.value} className="info-chip">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent/85">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-olive-100/68">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr] lg:gap-5" data-reveal="fade-in" data-delay="2">
            <div className="media-frame min-h-[24rem] sm:min-h-[38rem]">
              <Image
                src={featuredImages.heroMain.src}
                alt={featuredImages.heroMain.alt}
                fill
                priority
                quality={68}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 28vw"
                className="object-cover"
              />
              <div className="image-veil" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="chip">{featuredImages.heroMain.label}</span>
              </div>
            </div>

            <div className="grid gap-4 lg:gap-5">
              {[featuredImages.heroSideTop, featuredImages.heroSideBottom].map((image, index) => (
                <div
                  key={image.src}
                  className="media-frame min-h-[15rem] sm:min-h-[18rem]"
                  data-reveal="scale-in"
                  data-delay={String(index + 3)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={68}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 18vw"
                    className="object-cover"
                  />
                  <div className="image-veil" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="chip">{image.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-reveal="fade-up">
            <p className="eyebrow">What we focus on</p>
            <h2 className="section-title mt-4">
              Interior upgrades that feel more finished, more usable, and easier to live with.
            </h2>
            <p className="lead mt-6">
              We focus on the rooms and surfaces that change everyday living the most:
              bathrooms, kitchens, tile work, cabinetry, flooring, and the finish details that
              bring the whole space together.
            </p>

            <div className="mt-8 space-y-6">
              {craftsmanshipPoints.map((point, index) => (
                <div key={point.title} className="border-l border-accent/50 pl-5" data-reveal="fade-up" data-delay={String(index + 1)}>
                  <h3 className="text-2xl text-olive-50">{point.title}</h3>
                  <p className="mt-2 text-base leading-7 text-olive-100/72">{point.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface overflow-hidden" data-reveal="scale-in" data-delay="2">
            <div className="grid divide-y divide-white/8">
              {coreServices.slice(0, 6).map((service, index) => (
                <div key={service.title} className="grid gap-3 px-6 py-6 sm:grid-cols-[auto_1fr] sm:px-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent/82">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl text-olive-50">{service.title}</h3>
                    <p className="mt-2 text-base leading-7 text-olive-100/70">{service.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/8 px-6 py-6 sm:px-8">
              <Link href="/services" className="button-secondary">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell">
          <div className="max-w-3xl" data-reveal="fade-up">
            <p className="eyebrow">Featured work</p>
            <h2 className="section-title mt-4">
              Bathrooms, kitchens, and finish details from recent interior projects.
            </h2>
            <p className="lead mt-6">
              From tile layouts and shower walls to cabinetry and flooring, these project photos
              show the kind of clean, modern interior work LOKEIL is hired to deliver.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredWork.map((item, index) => (
              <article
                key={item.title}
                className="tile-hover"
                data-reveal="fade-up"
                data-delay={String(index + 1)}
              >
                <div className="media-frame h-[30rem]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    quality={68}
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 29vw"
                    className="object-cover"
                  />
                  <div className="image-veil" />
                </div>
                <div className="mt-5">
                  <h3 className="text-3xl text-olive-50">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-olive-100/72">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">How the work moves</p>
            <h2 className="section-title mt-4">A simple process with clearer expectations.</h2>
            <p className="lead mt-6">
              This isn&apos;t padded with buzzwords. It stays focused on what homeowners actually
              care about: understanding the room, choosing finishes well, executing cleanly, and
              landing the final details.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {valuePoints.map((item) => (
                <span key={item} className="chip normal-case tracking-[0.06em] text-olive-100/82">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="2">
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

            <div className="mt-8 rounded-[22px] border border-white/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-accent/82">
                Ready to talk through your space?
              </p>
              <p className="mt-3 text-base leading-7 text-olive-100/72">
                Call {siteData.phoneDisplay} or email {siteData.email} for a free estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell">
          <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div data-reveal="fade-up">
                <p className="eyebrow">Next step</p>
                <h2 className="section-title mt-4">Let&apos;s make the room feel better, not busier.</h2>
                <p className="lead mt-6">
                  If you&apos;re planning a bathroom, kitchen, tile, cabinet, flooring, or finish
                  update, the quickest way to start is still the simplest one: call or send an
                  email and describe the project.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <Link href="/contact" className="button-secondary">
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
