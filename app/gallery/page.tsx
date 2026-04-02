import type { Metadata } from 'next';
import Image from 'next/image';

import { buildPageMetadata } from '../seo';
import { featuredImages, photoCount } from '../siteData';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = buildPageMetadata({
  title: 'Gallery',
  description:
    'Browse the LOKEIL Renovation photo gallery featuring bathrooms, showers, flooring, cabinets, paint preparation, and interior finish work across Queens and the wider NYC area.',
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
              Browse the photo archive by room and finish type. The gallery now keeps the focus on
              the work itself, with a quieter layout and no video or caption clutter.
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

      <GalleryClient />
    </main>
  );
}
