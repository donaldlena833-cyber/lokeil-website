'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  GalleryCategory,
  galleryCategories,
  galleryItems,
  siteData,
} from '../siteData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      <section className="section-space border-b border-white/8">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-reveal="fade-up">
            <p className="eyebrow">Gallery</p>
            <h1 className="page-title mt-4">
              Real bathrooms, kitchens, tile details, and walkthroughs from recent work.
            </h1>
            <p className="lead mt-6">
              Browse bathrooms, flooring, shower work, painting and prep, kitchen cabinetry, and
              a few short project videos to get a better feel for the finished direction.
            </p>
          </div>

          <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Photos</p>
                <p className="mt-3 text-4xl text-olive-50">43</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Videos</p>
                <p className="mt-3 text-4xl text-olive-50">3</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-accent/82">Location</p>
                <p className="mt-3 text-2xl text-olive-50">Queens + NYC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[104px] z-30 border-b border-white/8 bg-olive-600/85 py-4 backdrop-blur-xl">
        <div className="site-shell">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-accent text-olive-900'
                    : 'border border-white/10 bg-white/[0.04] text-olive-100/78 hover:border-accent/30 hover:text-olive-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div data-reveal="fade-up">
              <p className="eyebrow">Current selection</p>
              <h2 className="section-title mt-4">
                {activeCategory === 'all'
                  ? 'All available project media'
                  : galleryCategories.find((category) => category.id === activeCategory)?.label}
              </h2>
            </div>
            <p className="text-sm uppercase tracking-[0.18em] text-olive-100/56" data-reveal="fade-up" data-delay="1">
              {filteredItems.length} items
            </p>
          </div>

          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className="surface tile-hover mb-5 break-inside-avoid overflow-hidden"
                data-reveal="fade-up"
                data-delay={String((index % 5) + 1)}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-auto w-full"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    playsInline
                    preload="none"
                    className="h-auto w-full bg-olive-700"
                  />
                )}

                <div className="px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-accent/82">
                    {item.category === 'videos'
                      ? 'Video walkthrough'
                      : galleryCategories.find((category) => category.id === item.category)?.label}
                  </p>
                  <p className="mt-2 text-lg text-olive-50">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-space">
        <div className="site-shell">
          <div className="surface overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div data-reveal="fade-up">
                <p className="eyebrow">Next step</p>
                <h2 className="section-title mt-4">See something close to your space?</h2>
                <p className="lead mt-6">
                  Use the gallery as a reference point, then call {siteData.phonePrimary} or email
                  {siteData.email} with your own room photos and scope.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col" data-reveal="fade-up" data-delay="1">
                <a href={`tel:${siteData.phonePrimary}`} className="button-primary">
                  Call {siteData.phonePrimary}
                </a>
                <a href={`mailto:${siteData.email}`} className="button-secondary">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
