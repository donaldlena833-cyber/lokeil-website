import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CustomerFeedback from '../components/CustomerFeedback';

import {
  featuredImages,
  processSteps,
  siteData,
  valuePoints,
} from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Our Queens Remodeling Team',
  description:
    'Meet Lorel Beqari and learn LOKEIL’s story from Albania in 1995 to its US expansion in 2022 and today’s remodeling work from Ridgewood, Queens.',
  path: '/about',
});

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
      <section className="section-space border-b border-ink/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">About the company</p>
            <h1 className="page-title mt-4">
              LOKEIL Renovation, based in Ridgewood and working across New York City.
            </h1>
            <p className="lead mt-6">
              {siteData.brandName} is led by {siteData.owner} and built around practical interior
              renovation work: bathrooms, kitchens, tile installation, flooring, cabinets,
              plaster, painting, doors, steps, and fireplace design.
            </p>
            <p className="mt-5 text-base leading-7 text-ink/80">
              Our company is {siteData.legalName} We serve Queens, Brooklyn, Manhattan, the Bronx,
              and Staten Island, plus parts of Long Island and Westchester County.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a href={siteData.yelp} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                LOKEIL on Yelp<span className="sr-only">, opens in a new tab</span>
              </a>
              <a href={siteData.instagram} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                {siteData.instagramHandle}<span className="sr-only">, opens in a new tab</span>
              </a>
            </div>
          </div>

          <div className="media-frame min-h-[23rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
            <Image
              src={featuredImages.aboutFeature.src}
              alt={featuredImages.aboutFeature.alt}
              fill
              priority
              quality={68}
              sizes="(max-width: 1023px) 100vw, 42vw"
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
            <h2 className="section-title mt-4">{siteData.history.heading}</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-ink/80">
              <p>
                {siteData.history.origin}
              </p>
              <p>
                {siteData.history.expansion}
              </p>
              <p>
                Bathrooms, kitchens, tile and finish work are at the heart of our New York
                portfolio. Explore the photos to see the rooms and details we work on.
              </p>
              <a href={siteData.yelp} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-accent underline underline-offset-4">
                Company history on Yelp<span className="sr-only">, opens in a new tab</span>
              </a>
            </div>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <p className="text-sm uppercase tracking-[0.18em] text-accent/95">
              Meet the owner
            </p>
            <h3 className="mt-3 text-4xl text-ink">{siteData.owner}</h3>
            <p className="mt-5 text-base leading-8 text-ink/80">
              {siteData.owner} leads {siteData.brandName}. Our work brings together the surfaces
              you see every day: a shower wall, the floor underfoot, a cabinet door that closes
              properly, and the trim that completes a room.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/80">
              The goal is simple: do the work cleanly, choose materials carefully, and leave the
              space looking sharper, more functional, and more comfortable to live with.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {valuePoints.map((item) => (
                <span key={item} className="chip normal-case tracking-[0.06em] text-ink/82">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CustomerFeedback />

      <section className="section-rule section-space bg-sage-soft/60">
        <div className="site-shell grid gap-6 lg:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={item.title}
              className="surface px-6 py-7"
              data-reveal="fade-up"
              data-delay={String(index + 1)}
            >
              <h3 className="text-3xl text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-ink/80">{item.body}</p>
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
                    <h3 className="text-2xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-ink/80">{step.description}</p>
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
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
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
