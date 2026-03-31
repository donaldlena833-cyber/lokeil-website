import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services | LOKEIL inc - Interior Remodeling Queens NY',
  description: 'Comprehensive interior remodeling services including bathrooms, kitchens, flooring, painting, and more.',
};

export default function Services() {
  const services = [
    {
      name: 'Bathroom Remodeling',
      icon: '🚿',
      description: 'Complete bathroom renovations including tile work, fixtures, plumbing, and custom design. We create spa-like spaces that combine elegance with functionality.',
    },
    {
      name: 'Kitchen Remodeling',
      icon: '🍳',
      description: 'Transform your kitchen with custom cabinetry, countertops, appliances, and layout optimization. We design kitchens that are both beautiful and highly functional.',
    },
    {
      name: 'Tiling & Tile Installation',
      icon: '◼️',
      description: 'Expert tile work for floors, walls, and backsplashes. We work with premium tile materials and ensure perfect installation for lasting beauty.',
    },
    {
      name: 'Flooring',
      icon: '⬜',
      description: 'Quality flooring solutions including tile, hardwood, laminate, and more. We help you choose durable materials that complement your design aesthetic.',
    },
    {
      name: 'Plaster & Drywall',
      icon: '🏗️',
      description: 'Professional plaster repair, drywall installation and finishing. Smooth, even surfaces that provide the perfect base for painting and design.',
    },
    {
      name: 'Painting',
      icon: '🎨',
      description: 'Interior and exterior painting services. Quality finishes that transform spaces and protect your investment for years to come.',
    },
    {
      name: 'Cabinet Installation',
      icon: '🚪',
      description: 'Custom and semi-custom cabinet installation for kitchens, bathrooms, and storage areas. Built to last with expert craftsmanship.',
    },
    {
      name: 'Door Installation',
      icon: '🚪',
      description: 'Interior and exterior door installation. We handle everything from standard doors to custom designs that enhance your home\'s character.',
    },
    {
      name: 'Steps Design',
      icon: '🪜',
      description: 'Custom staircase design and construction. We create stunning focal points that are both safe and beautifully proportioned.',
    },
    {
      name: 'Fireplace Design',
      icon: '🔥',
      description: 'Fireplace installation and renovation. From classic designs to modern focal points, we create spaces that bring warmth and ambiance.',
    },
  ];

  return (
    <main className="bg-olive-500">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-olive-600 to-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-50 mb-6" data-reveal="fade-up">
            Our Services
          </h1>
          <p className="text-xl text-olive-200 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            Comprehensive interior remodeling solutions for every room in your home
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 card-hover hover:border-accent hover:border-opacity-30 transition-all"
                data-reveal="scale-in"
                data-delay={Math.min(index + 1, 5).toString()}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-olive-50 mb-3">{service.name}</h3>
                <p className="text-olive-200 text-base leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-olive-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-olive-50 mb-16" data-reveal="fade-up">
            Our Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We meet with you to understand your vision, budget, and timeline. We discuss your ideas and share our expertise.',
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our team creates detailed plans and designs. We source materials, finalize specifications, and provide a clear estimate.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our skilled crew executes the project with precision and professionalism. Regular updates keep you informed every step of the way.',
              },
              {
                step: '04',
                title: 'Quality Assurance',
                description: 'We conduct thorough inspections to ensure everything meets our high standards. Your satisfaction is our priority.',
              },
              {
                step: '05',
                title: 'Final Walkthrough',
                description: 'We walk through the completed project with you, addressing any final details and ensuring you\'re completely satisfied.',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex gap-8 items-start"
                data-reveal="slide-left"
                data-delay={Math.min(index + 1, 5).toString()}
              >
                <div className="flex-shrink-0">
                  <div className="text-4xl font-serif font-bold text-accent">{item.step}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-olive-50 mb-2">{item.title}</h3>
                  <p className="text-olive-200 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-olive-50 mb-6" data-reveal="fade-up">
            Service Areas
          </h2>
          <p className="text-center text-olive-200 text-lg mb-12 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            We primarily serve Ridgewood, Queens and the surrounding NYC metro area.
          </p>
          <div className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 text-center" data-reveal="scale-in">
            <p className="text-olive-200 text-lg mb-4">
              Based in Ridgewood, Queens, NY 11385, LOKEIL inc serves:
            </p>
            <p className="text-olive-50 text-lg font-semibold">
              Queens • Brooklyn • Manhattan • Parts of Long Island • Westchester County
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="fade-up">
          <h2 className="text-4xl font-serif font-bold text-olive-50 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-olive-200 mb-8">
            Contact us today for a free estimate and consultation.
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
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded hover:bg-olive-500 transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
