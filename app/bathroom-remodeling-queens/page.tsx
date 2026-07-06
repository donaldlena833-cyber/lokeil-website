import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import EstimatePrepChecklist from '../components/EstimatePrepChecklist';
import { featuredImages, siteData } from '../siteData';
import { buildPageMetadata } from '../seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Bathroom Remodeling Queens | Ridgewood, Steinway, Astoria',
  description:
    'Bathroom remodeling in Queens for Ridgewood, Steinway, Astoria, Sunnyside, Woodside, and nearby apartments with tile, shower, flooring, plaster, painting, and finish work.',
  path: '/bathroom-remodeling-queens',
});

const projectFit = [
  'Bathroom tile replacement, shower walls, niches, and floor updates',
  'Plaster, drywall, painting, trim, and finish work around the remodel',
  'Vanity, cabinet, door, and detail upgrades that help the room feel complete',
  'Queens apartment and home projects where clean sequencing matters',
] as const;

const queensPlanningDetails = [
  {
    title: 'Ridgewood, Steinway, Astoria, and nearby Queens bathrooms',
    body:
      'LOKEIL is a Ridgewood-based remodeler for Queens bathrooms, especially apartments and homes in Ridgewood, Steinway, Astoria, Sunnyside, Woodside, Long Island City, Jackson Heights, and Forest Hills where tile, floors, plaster, paint, and finish details all touch the same room.',
  },
  {
    title: 'Tile, waterproofing, and shower surfaces',
    body:
      'Bathroom remodeling searches in Queens are already showing up in Search Console, but homeowners need more than a generic service page. Wet areas should be planned around the existing walls, tile substrate, niche placement, curb or tub edge, grout lines, and the way the shower will be used every day.',
  },
  {
    title: 'Vanity, flooring, and finish transitions',
    body:
      'A bathroom can look unfinished if the vanity, floor edge, baseboard, mirror, lighting, paint, and door trim are scoped separately. LOKEIL keeps those finish details in the same conversation so the room feels complete after the main surfaces are done.',
  },
  {
    title: 'Queens buildings and access',
    body:
      'Ridgewood, Astoria, Jackson Heights, Sunnyside, Woodside, Long Island City, Forest Hills, and nearby Queens neighborhoods all bring different building conditions. Co-ops, condos, two-family homes, and older apartments may require work-hour planning, hallway protection, debris coordination, elevator timing, or superintendent communication.',
  },
  {
    title: 'Board, permit, and scope questions',
    body:
      'Some bathroom updates stay cosmetic, while plumbing, electrical, layout, or building-system changes can require a different review path. LOKEIL keeps those questions visible early so the estimate can separate surface work from anything that needs board, building, DOB, or licensed trade guidance.',
  },
] as const;

const photoChecklist = [
  'One wide photo from the bathroom doorway',
  'Straight-on photos of the tub or shower wall',
  'Close-ups of damaged tile, grout, plaster, or flooring',
  'Vanity, mirror, lighting, toilet, and doorway clearance photos',
  'Any inspiration images, tile choices, or fixture finish preferences',
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

const faqs = [
  {
    q: 'What bathroom remodeling work does LOKEIL handle in Queens?',
    a:
      'LOKEIL handles bathroom tile work, shower surrounds, flooring, plaster, painting, cabinetry details, doors, trim, and finish work for Queens interior remodels.',
  },
  {
    q: 'Can LOKEIL work from project photos and a simple scope?',
    a:
      'Yes. The fastest estimate conversation starts with room photos, the neighborhood, and a clear list of the bathroom changes the client wants to make.',
  },
  {
    q: 'Does LOKEIL only do bathrooms?',
    a:
      'No. Bathrooms are a strong service fit, but LOKEIL also handles kitchens, flooring, tile, plaster, painting, cabinets, doors, steps, and fireplace upgrades.',
  },
] as const;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathroom Remodeling Queens',
  serviceType: 'Bathroom remodeling',
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
  url: `${siteData.siteUrl}/bathroom-remodeling-queens`,
  description:
    'Bathroom remodeling in Queens with tile work, shower surrounds, flooring, plaster, painting, cabinetry details, and finish-focused interior upgrades.',
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

export default function BathroomRemodelingQueens() {
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
              <Link href="/tile-installation-queens" className="button-secondary">
                Tile Installation
              </Link>
              <Link href="/blog/nyc-kitchen-bathroom-remodel-permits-queens" className="button-secondary">
                Permit Questions
              </Link>
              <Link href="/flooring-installation-queens" className="button-secondary">
                Bathroom Flooring
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
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">Queens scope</p>
            <h2 className="section-title mt-4">The bathroom page now carries the neighborhood intent.</h2>
            <p className="lead mt-6">
              Instead of spreading thin pages across every Queens neighborhood, this page is the main
              bathroom remodeling surface for Ridgewood and nearby Queens searches. It should answer
              the core planning questions first, then link into gallery proof and related services.
            </p>
          </div>

          <div className="grid gap-5">
            {queensPlanningDetails.map((detail, index) => (
              <article key={detail.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
                <h3 className="text-2xl text-olive-50">{detail.title}</h3>
                <p className="mt-4 text-base leading-7 text-olive-100/72">{detail.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div data-reveal="fade-up">
            <p className="eyebrow">Estimate prep</p>
            <h2 className="section-title mt-4">What to send before asking for a bathroom estimate.</h2>
            <p className="lead mt-6">
              Clear photos help separate a cosmetic refresh from a larger remodel. They also make it
              easier to discuss tile, flooring, wall repair, vanity fit, painting, and finish details
              without guessing from a short text message.
            </p>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <div className="grid gap-4">
              {photoChecklist.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/84">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-7 text-olive-100/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EstimatePrepChecklist />

      <section className="section-rule section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">Bathroom remodeling FAQ</p>
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
                <h2 className="section-title mt-4">Planning a Queens bathroom remodel?</h2>
                <p className="lead mt-6">
                  Call or email with the room, photos if available, and the bathroom changes you
                  want to make. LOKEIL can help turn that into a clearer scope conversation for
                  tile, flooring, painting, permits questions, and any nearby kitchen work.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
              <Link href="/kitchen-remodeling-queens" className="button-secondary">
                Kitchen Remodeling
              </Link>
              <Link href="/blog/bathroom-remodeling-cost-queens-ny" className="button-secondary">
                Bathroom Cost Guide
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
