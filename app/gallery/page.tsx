'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

type GalleryCategory = 'all' | 'bathroom-tiles' | 'bathroom-flooring' | 'bathroom-shower' | 'bathroom-painting' | 'kitchen-cabinets' | 'videos';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'bathroom-tiles', label: 'Bathroom Tiles' },
  { id: 'bathroom-flooring', label: 'Bathroom Flooring' },
  { id: 'bathroom-shower', label: 'Bathroom Showers' },
  { id: 'bathroom-painting', label: 'Bathroom Painting' },
  { id: 'kitchen-cabinets', label: 'Kitchen Cabinets' },
  { id: 'videos', label: 'Videos' },
];

const galleryItems = [
  // Bathroom Tiles
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `bathroom-tiles-${i + 1}`,
    category: 'bathroom-tiles',
    type: 'image' as const,
    src: `/gallery/bathroom-tiles/${i + 1}.jpg`,
    alt: `Bathroom Tiles Project ${i + 1}`,
  })),
  // Bathroom Flooring
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `bathroom-flooring-${i + 1}`,
    category: 'bathroom-flooring',
    type: 'image' as const,
    src: `/gallery/bathroom-flooring/${i + 1}.jpg`,
    alt: `Bathroom Flooring Project ${i + 1}`,
  })),
  // Bathroom Shower
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `bathroom-shower-${i + 1}`,
    category: 'bathroom-shower',
    type: 'image' as const,
    src: `/gallery/bathroom-shower/${i + 1}.jpg`,
    alt: `Bathroom Shower Project ${i + 1}`,
  })),
  // Bathroom Painting
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `bathroom-painting-${i + 1}`,
    category: 'bathroom-painting',
    type: 'image' as const,
    src: `/gallery/bathroom-painting/${i + 1}.jpg`,
    alt: `Bathroom Painting Project ${i + 1}`,
  })),
  // Kitchen Cabinets
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `kitchen-cabinets-${i + 1}`,
    category: 'kitchen-cabinets',
    type: 'image' as const,
    src: `/gallery/kitchen-cabinets/${i + 1}.jpg`,
    alt: `Kitchen Cabinets Project ${i + 1}`,
  })),
  // Videos
  { id: 'video-1', category: 'videos', type: 'video' as const, src: '/gallery/videos/1.mp4', alt: 'Project Video 1' },
  { id: 'video-2', category: 'videos', type: 'video' as const, src: '/gallery/videos/2.mp4', alt: 'Project Video 2' },
  { id: 'video-3', category: 'videos', type: 'video' as const, src: '/gallery/videos/3.mp4', alt: 'Project Video 3' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="bg-olive-500">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-olive-600 to-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-50 mb-6" data-reveal="fade-up">
            Our Gallery
          </h1>
          <p className="text-xl text-olive-200 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            Showcasing our finest interior remodeling projects
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-20 z-30 bg-olive-500 bg-opacity-95 backdrop-blur-xs border-b border-olive-50 border-opacity-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as GalleryCategory)}
                className={`px-4 py-2 rounded transition-all ${
                  activeCategory === cat.id
                    ? 'bg-accent text-olive-900 font-semibold'
                    : 'bg-olive-400 bg-opacity-30 text-olive-200 hover:bg-opacity-50 border border-olive-50 border-opacity-10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-olive-200 text-xl">No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-lg overflow-hidden bg-olive-600 card-hover h-64"
                  data-reveal="fade-in"
                >
                  {item.type === 'image' ? (
                    <>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <p className="text-olive-50 font-semibold">{item.alt}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        controls
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <svg className="w-16 h-16 text-accent opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="fade-up">
          <h2 className="text-4xl font-serif font-bold text-olive-50 mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-olive-200 mb-8">
            Let's create something beautiful for your space. Contact us today for a free consultation.
          </p>
          <a
            href="tel:917-518-8753"
            className="inline-block px-8 py-4 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-all hover:shadow-xl"
          >
            Call Now: 917-518-8753
          </a>
        </div>
      </section>
    </main>
  );
}
