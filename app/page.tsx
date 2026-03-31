import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Home | LOKEIL inc - Interior Remodeling Queens NY',
  description: 'Professional interior remodeling services. Creating spaces that are comfortable, memorable and inspiring.',
};

export default function Home() {
  const services = [
    { name: 'Bathroom Remodeling', icon: '🚿' },
    { name: 'Kitchen Remodeling', icon: '🍳' },
    { name: 'Flooring', icon: '⬜' },
    { name: 'Painting', icon: '🎨' },
    { name: 'Tile Installation', icon: '◼️' },
    { name: 'Cabinet Installation', icon: '🚪' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-olive-500 to-olive-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%234A5440%22 width=%22100%22 height=%22100%22/><path d=%22M0 50 Q25 25 50 50 T100 50%22 fill=%22none%22 stroke=%22%23C8A96E%22 opacity=%220.1%22 stroke-width=%221%22/></svg>')] bg-repeat" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-olive-50 mb-6 leading-tight" data-reveal="fade-up">
            Creating Spaces That Inspire
          </h1>
          <p className="text-xl md:text-2xl text-olive-200 mb-8 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            Professional interior remodeling services for kitchens, bathrooms, and more. Serving Ridgewood, Queens and the NYC metro area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-reveal="fade-up" data-delay="2">
            <Link
              href="/gallery"
              className="px-8 py-4 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-all hover:shadow-xl"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded hover:bg-olive-600 transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-olive-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-olive-50" data-reveal="fade-up">
            Our Services
          </h2>
          <p className="text-center text-olive-200 text-lg mb-16 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            Comprehensive interior remodeling solutions tailored to your vision and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group card-hover bg-olive-400 bg-opacity-40 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 text-center hover:border-accent hover:border-opacity-30 transition-all"
                data-reveal="scale-in"
                data-delay={Math.min(index + 1, 5).toString()}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-olive-50 mb-2">{service.name}</h3>
                <p className="text-olive-200 text-sm">Expert craftsmanship and attention to detail in every project.</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-olive-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-olive-50" data-reveal="fade-up">
            Our Gallery
          </h2>
          <p className="text-center text-olive-200 text-lg mb-16 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            See some of our recent projects and transformations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { src: '/gallery/bathroom-tiles/1.jpg', alt: 'Bathroom Tiles' },
              { src: '/gallery/bathroom-flooring/1.jpg', alt: 'Bathroom Flooring' },
              { src: '/gallery/kitchen-cabinets/1.jpg', alt: 'Kitchen Cabinets' },
            ].map((image, index) => (
              <div
                key={image.alt}
                className="group relative h-64 rounded-lg overflow-hidden bg-olive-500 card-hover"
                data-reveal="fade-in"
                data-delay={Math.min(index + 1, 5).toString()}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-olive-50 font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-olive-50">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-olive-200 mb-8">
            Contact LOKEIL inc today for a free consultation and estimate. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:917-518-8753"
              className="px-8 py-4 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-all hover:shadow-xl inline-block"
            >
              Call: 917-518-8753
            </a>
            <a
              href="mailto:lokeil2024@gmail.com"
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded hover:bg-olive-600 transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
