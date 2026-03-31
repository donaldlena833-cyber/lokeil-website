import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About | LOKEIL inc - Interior Remodeling Queens NY',
  description: 'Learn about LOKEIL inc, our owner Lorel Beqari, and our commitment to quality interior remodeling.',
};

export default function About() {
  return (
    <main className="bg-olive-500">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-olive-600 to-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-50 mb-6" data-reveal="fade-up">
            About LOKEIL inc
          </h1>
          <p className="text-xl text-olive-200 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            Creating spaces that are comfortable, memorable and inspiring
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div data-reveal="fade-up">
              <h2 className="text-4xl font-serif font-bold text-olive-50 mb-6">Our Story</h2>
              <p className="text-olive-200 text-lg mb-4">
                LOKEIL inc was founded with a simple vision: to transform spaces into environments that enhance the quality of everyday life. Since our inception, we've been dedicated to delivering exceptional interior remodeling services throughout Ridgewood, Queens and the broader NYC metro area.
              </p>
              <p className="text-olive-200 text-lg mb-4">
                What started as a passion for craftsmanship and design has grown into a trusted name for homeowners seeking professional, reliable remodeling services. We understand that your home is more than just a space, it's where memories are made and lives are lived.
              </p>
              <p className="text-olive-200 text-lg">
                Every project we undertake reflects our commitment to excellence, attention to detail, and deep respect for our clients' vision and investment.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden" data-reveal="fade-in" data-delay="1">
              <img
                src="/gallery/bathroom-tiles/1.jpg"
                alt="LOKEIL workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Owner Section */}
          <div className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-12 mb-16" data-reveal="scale-in" data-delay="1">
            <h3 className="text-3xl font-serif font-bold text-olive-50 mb-6">Meet Lorel Beqari</h3>
            <p className="text-olive-200 text-lg mb-4">
              Lorel Beqari is the founder and driving force behind LOKEIL inc. With extensive experience in interior remodeling and a genuine passion for transforming spaces, Lorel brings leadership, integrity, and a meticulous eye for detail to every project.
            </p>
            <p className="text-olive-200 text-lg mb-4">
              Lorel's approach to remodeling goes beyond aesthetics. He believes that great design should be functional, durable, and reflect the personality and needs of those who inhabit the space. This philosophy guides all of LOKEIL inc's work, ensuring that every kitchen, bathroom, or remodeled space is not just beautiful, but truly enhances how you live.
            </p>
            <p className="text-olive-200 text-lg">
              When he's not overseeing projects, Lorel is continually exploring new design trends, materials, and techniques to bring the best solutions to his clients.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8" data-reveal="fade-up">
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">Our Mission</h3>
              <p className="text-olive-200 text-lg">
                To create spaces that are comfortable, memorable and inspiring through exceptional craftsmanship, innovative design, and unwavering commitment to client satisfaction.
              </p>
            </div>

            <div className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8" data-reveal="fade-up" data-delay="1">
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">Our Values</h3>
              <ul className="text-olive-200 text-lg space-y-2">
                <li>Craftsmanship & Quality</li>
                <li>Integrity & Transparency</li>
                <li>Client-Centric Approach</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-olive-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-olive-50 mb-16" data-reveal="fade-up">
            Why Choose LOKEIL inc
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Craftsmanship',
                description: 'Meticulous attention to detail and years of experience in every project.',
              },
              {
                title: 'Custom Solutions',
                description: 'We tailor every remodel to match your unique vision, budget, and lifestyle.',
              },
              {
                title: 'Reliable Service',
                description: 'Professional, punctual, and dedicated to delivering on our promises.',
              },
              {
                title: 'Wide Range of Services',
                description: 'From bathrooms to kitchens to painting, we handle all interior remodeling needs.',
              },
              {
                title: 'Local Expertise',
                description: 'Deep knowledge of the Ridgewood, Queens area and NYC metro building codes.',
              },
              {
                title: 'Client Communication',
                description: 'Clear, honest communication throughout the entire remodeling process.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-olive-500 bg-opacity-40 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 card-hover"
                data-reveal="scale-in"
                data-delay={Math.min(index + 1, 5).toString()}
              >
                <h3 className="text-xl font-serif font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-olive-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="fade-up">
          <h2 className="text-4xl font-serif font-bold text-olive-50 mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-xl text-olive-200 mb-8">
            Contact LOKEIL inc today to discuss your interior remodeling project.
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
