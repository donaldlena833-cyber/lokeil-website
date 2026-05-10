import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { featuredImages, siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Bathroom Remodeling Queens',
  description:
    'Bathroom remodeling in Queens with tile work, shower surrounds, flooring, painting, plaster, cabinetry details, and direct estimates from LOKEIL Renovation in Ridgewood.',
  path: '/bathroom-remodeling-queens',
});

const projectFit = [
  'Bathroom tile replacement, shower walls, niches, and floor updates',
  'Plaster, drywall, painting, trim, and finish work around the remodel',
  'Vanity, cabinet, door, and detail upgrades that help the room feel complete',
  'Queens apartment and home projects where clean sequencing matters',
] as const;

const planningNotes = [
  {
    title: 'Start with the existing room',
    body:
      'Older Queens bathrooms often need practical planning before finishes: wall condition, flooring transitions, fixture locations, and how the tile layout will land in the actual space.',
  },
  {
    title: 'Keep the scope clear',
    body:
      'A focused bathroom remodel can include tile, surfaces, paint, cabinetry, doors, and detail work without turning every conversation into a full-house renovation.',
  },
  {
    title: 'Use real project references',
    body:
      'LOKEIL shows real bathroom, tile, flooring, and finish photos so clients can talk about style and expectations from visible work instead of stock examples.',
  },
] as const;

export default function BathroomRemodelingQueens() {
  return (
    <main>
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Queens bathroom remodeling</p>
            <h1 className="page-title mt-4">
              Bathroom remodeling in Queens with cleaner tile, surfaces, and finish work.
            </h1>
            <p className="lead mt-6">
              {siteData.brandName} is based in Ridgewood and handles bathroom upgrades across
              Queens and nearby New York City areas, including tile work, shower surrounds,
              flooring, plaster, painting, cabinets, doors, and finish details.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                Call {siteData.phoneDisplay}
              </a>
              <Link href="/gallery" className="button-secondary">
                View Bathroom Work
              </Link>
            </div>
          </div>

          <div className="media-frame min-h-[24rem] sm:min-h-[34rem]" data-reveal="fade-in" data-delay="1">
            <Image
              src={featuredImages.heroMain.src}
              alt={featuredImages.heroMain.alt}
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
              The work stays focused on practical interior remodeling: making the bathroom cleaner,
              more usable, and more finished without burying the client in vague contractor language.
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
            <h2 className="section-title mt-4">A clearer bathroom remodel starts before demolition.</h2>
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
        <div className="site-shell">
          <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div data-reveal="fade-up">
                <p className="eyebrow">Estimate</p>
                <h2 className="section-title mt-4">Planning a Queens bathroom remodel?</h2>
                <p className="lead mt-6">
                  Call or email with the room, photos if available, and the bathroom changes you
                  want to make. LOKEIL can help turn that into a clearer scope conversation.
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
