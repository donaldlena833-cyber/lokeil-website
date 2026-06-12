import type { Metadata } from 'next';
import Image from 'next/image';

import { buildPageMetadata } from '../seo';
import { featuredImages, photoCount } from '../siteData';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = buildPageMetadata({
  title: 'Remodeling Gallery in Queens',
  description:
    'Browse LOKEIL Renovation project photos for bathroom remodeling, tile installation, flooring, cabinets, paint preparation, and interior finish work in Queens and NYC.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <main>
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Gallery</p>
            <h1 className="page-title mt-4">
              Real bathrooms, kitchens, tile details, and finish work from recent projects.
            </h1>
            <p className="lead mt-6">
              Browse the photo archive by room and finish type. The gallery is organized so Queens
              homeowners can compare tile layouts, shower surrounds, floor transitions, cabinetry,
              paint preparation, and finish details before starting an estimate.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-olive-100/72">
              Use the photos to narrow what matters for your own project: a niche location, tile
              direction, shower bench, cabinet reveal, floor pattern, or the level of wall prep you
              want before paint. The more specific the reference, the better the first conversation.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-olive-100/72">
              When you contact LOKEIL, reference the room type and the kind of finish you liked in
              the gallery. That makes the first estimate conversation more specific and helps avoid
              vague remodeling requests that are hard to price.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="media-frame min-h-[20rem] sm:min-h-[24rem]" data-reveal="scale-in" data-delay="1">
              <Image
                src={featuredImages.galleryFeature.src}
                alt={featuredImages.galleryFeature.alt}
                fill
                priority
                quality={68}
                sizes="(max-width: 1023px) 100vw, 32vw"
                className="object-cover"
              />
              <div className="image-veil" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <span className="chip">Client project archive only</span>
              </div>
            </div>

            <div className="surface p-6 sm:p-8" data-reveal="fade-up" data-delay="2">
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Photos</p>
                  <p className="mt-3 text-4xl text-olive-50">{photoCount}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Collections</p>
                  <p className="mt-3 text-4xl text-olive-50">5</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Location</p>
                  <p className="mt-3 text-2xl text-olive-50">Queens + NYC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space bg-black/8">
        <div className="site-shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Bathrooms and showers',
              body:
                'Review shower walls, niches, bathtub surrounds, marble-look tile, flooring, and finish transitions before planning a Queens bathroom remodel.',
            },
            {
              title: 'Kitchens and cabinets',
              body:
                'Use the cabinet and kitchen photos to discuss storage, backsplash, floor transitions, hardware, and the level of finish expected.',
            },
            {
              title: 'Paint, plaster, and prep',
              body:
                'Surface preparation matters. Wall repair, skim work, paint, trim, and clean edges often decide whether the final room feels polished.',
            },
          ].map((item, index) => (
            <article key={item.title} className="surface px-6 py-7 sm:px-8" data-reveal="fade-up" data-delay={String(index + 1)}>
              <h2 className="text-3xl text-olive-50">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-olive-100/72">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal="fade-up">
            <p className="eyebrow">Planning from photos</p>
            <h2 className="section-title mt-4">Turn the gallery into a clearer estimate request.</h2>
            <p className="lead mt-6">
              The best estimate calls start with more than “I want to remodel.” Use the gallery to
              point to the finish direction, surface condition, and room type you have in mind.
            </p>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                'Save two or three photos that match the tile, cabinet, flooring, or paint finish you like.',
                'Take current photos of the room from each corner, plus close-ups of problem areas.',
                'Note what must stay in place: tub, toilet, vanity, cabinets, doors, trim, or appliances.',
                'Mention the property location and whether building access, elevator timing, or parking may affect work.',
              ].map((item) => (
                <p key={item} className="border-l border-accent/45 pl-4 text-base leading-7 text-olive-100/72">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GalleryClient />
    </main>
  );
}
