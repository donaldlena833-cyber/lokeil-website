'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  GalleryCategory,
  galleryCategories,
  galleryItems,
  photoCount,
  siteData,
} from '../siteData';

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="sticky top-[104px] z-30 border-b border-white/8 bg-olive-600/90 py-4 backdrop-blur-xl">
        <div className="site-shell">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {galleryCategories.map((category) => {
              const count =
                category.id === 'all'
                  ? photoCount
                  : galleryItems.filter((item) => item.category === category.id).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-accent text-olive-900'
                      : 'border border-white/10 bg-white/[0.04] text-olive-100/78 hover:border-accent/30 hover:text-olive-50'
                  }`}
                >
                  {category.label} <span className="text-current/70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space pt-12">
        <div className="site-shell">
          <div className="mb-8 flex flex-col gap-3 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div data-reveal="fade-up">
              <p className="eyebrow">Current selection</p>
              <h2 className="section-title mt-4">
                {activeCategory === 'all'
                  ? 'All renovation photos'
                  : galleryCategories.find((category) => category.id === activeCategory)?.label}
              </h2>
            </div>

            <p
              className="text-sm uppercase tracking-[0.18em] text-olive-100/56"
              data-reveal="fade-up"
              data-delay="1"
            >
              {filteredItems.length} photos
            </p>
          </div>

          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-tile"
                data-reveal="fade-up"
                data-delay={String((index % 5) + 1)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1600}
                  quality={64}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="gallery-image"
                />
              </div>
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
                  Use the gallery as a reference point, then call {siteData.phoneDisplay} or email{' '}
                  {siteData.email} with your own room photos and scope.
                </p>
              </div>

              <div
                className="flex flex-col gap-4 sm:flex-row lg:flex-col"
                data-reveal="fade-up"
                data-delay="1"
              >
                <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                  Call {siteData.phoneDisplay}
                </a>
                <a href={`mailto:${siteData.email}`} className="button-secondary">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
