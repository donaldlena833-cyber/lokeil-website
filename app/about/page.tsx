import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  featuredImages,
  processSteps,
  siteData,
  valuePoints,
} from '../siteData';

export const metadata: Metadata = {
  title: `About | ${siteData.name} - Interior Remodeling Queens NY`,
  description:
    'Learn about LOKEIL inc, owner Lorel Beqari, and the interior remodeling approach behind the company\'s bathrooms, kitchens, tile, and finish work.',
};

const principles = [
  {
    title: 'Clean finish work',
    body: 'Alignment, material transitions, and final detailing are treated with care from the start.',
  },
  {
    title: 'Straightforward communication',
    body: 'Clients get direct contact, clear next steps, and a simpler estimate conversation.',
  },
  {
    title: 'Interior remodeling focus',
    body: 'Bathrooms, kitchens, tile, cabinetry, flooring, and finish work stay at the center of the business.',
  },
];

export default function About() {
  return (
    <main>
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">About the company</p>
            <h1 className="page-title mt-4">
              A quieter, cleaner approach to interior remodeling in Queens.
            </h1>
            <p className="lead mt-6">
              {siteData.name} is led by {siteData.owner} and built around practical interior
              renovation work: bathrooms, kitchens, tile installation, flooring, cabinets,
              plaster, painting, doors, steps, and fireplace design.
            </p>
          </div>

          <div className="media-frame min-h-[23rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
            <Image
              src={featuredImages.aboutFeature.src}
              alt={featuredImages.aboutFeature.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="image-veil" />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-4">Built around rooms, materials, and the details that finish well.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-olive-100/76">
              <p>
                {siteData.name} works on interior spaces that need a stronger finish and a better
                sense of order, whether that means a new shower surround, updated flooring,
                cleaner cabinetry, or a more complete kitchen layout.
              </p>
              <p>
                The company approach is practical and finish-focused. Materials need to look good,
                but they also need to fit the room well and hold up in daily use.
              </p>
              <p>
                That is why the portfolio leans into bathrooms, kitchens, tile work, flooring,
                cabinetry, and the smaller transition details that make the final result feel complete.
              </p>
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <p className="text-sm uppercase tracking-[0.18em] text-accent/84">
              Meet the owner
            </p>
            <h3 className="mt-3 text-4xl text-olive-50">{siteData.owner}</h3>
            <p className="mt-5 text-base leading-8 text-olive-100/74">
              Lorel Beqari is the owner behind {siteData.name}. He brings the company around
              interior upgrades that benefit from patience and detail: bathrooms, kitchens, tile,
              floors, cabinetry, trim, and finish work that should feel composed once the room is complete.
            </p>
            <p className="mt-5 text-base leading-8 text-olive-100/74">
              The goal is simple: do the work cleanly, choose materials carefully, and leave the
              space looking sharper, more functional, and more comfortable to live with.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {valuePoints.map((item) => (
                <span key={item} className="chip normal-case tracking-[0.06em] text-olive-100/82">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell grid gap-6 lg:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={item.title}
              className="surface px-6 py-7"
              data-reveal="fade-up"
              data-delay={String(index + 1)}
            >
              <h3 className="text-3xl text-olive-50">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-olive-100/72">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">Working style</p>
            <h2 className="section-title mt-4">
              A small process that respects the room and lands the finish.
            </h2>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <div className="space-y-7">
              {processSteps.map((step, index) => (
                <div key={step.step} className="grid gap-4 sm:grid-cols-[auto_1fr]">
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
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div data-reveal="fade-up">
                <p className="eyebrow">Contact</p>
                <h2 className="section-title mt-4">Want to talk through the remodel?</h2>
                <p className="lead mt-6">
                  If you already know the room and the kind of upgrade you want, the next step is
                  easy: call or email and start the estimate conversation.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                <a href={`tel:${siteData.phonePrimary}`} className="button-primary">
                  Call {siteData.phonePrimary}
                </a>
                <Link href="/contact" className="button-secondary">
                  Open Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
