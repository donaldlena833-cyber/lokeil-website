import type { Metadata } from 'next';
import Image from 'next/image';

import { buildPageMetadata } from '../seo';
import { featuredImages, photoCount } from '../siteData';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = buildPageMetadata({
  title: 'Renovation Project Photos and Stories',
  description:
    'Browse distinct LOKEIL project photos and read the story behind each visible tile, floor, shower, cabinet, and paint detail across New York City.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <main>
      <section className="section-space border-b border-ink/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Gallery</p>
            <h1 className="page-title mt-4">
              Real bathrooms, kitchens, tile details, and finish work from recent projects.
            </h1>
            <p className="lead mt-6">
              Browse real project photos by room and finish. Each image opens a story about
              the detail shown and the decisions behind it.
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
                <span className="chip">Real project photos</span>
              </div>
            </div>

            <div className="surface p-6 sm:p-8" data-reveal="fade-up" data-delay="2">
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/95">Photos</p>
                  <p className="mt-3 text-4xl text-ink">{photoCount}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/95">Collections</p>
                  <p className="mt-3 text-4xl text-ink">5</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/95">Location</p>
                  <p className="mt-3 text-2xl text-ink">Five boroughs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-space bg-sage-soft/60">
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
              <h2 className="text-3xl text-ink">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-ink/80">{item.body}</p>
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
                <p key={item} className="border-l border-accent/45 pl-4 text-base leading-7 text-ink/80">
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
