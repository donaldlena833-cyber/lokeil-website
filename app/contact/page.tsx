import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact | LOKEIL inc - Interior Remodeling Queens NY',
  description: 'Contact LOKEIL inc for your interior remodeling needs. Call for a free estimate.',
};

export default function Contact() {
  return (
    <main className="bg-olive-500">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-olive-600 to-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-50 mb-6" data-reveal="fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-olive-200 max-w-2xl mx-auto" data-reveal="fade-up" data-delay="1">
            Ready to transform your space? Contact us today for a free estimate.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone 1 */}
            <div
              className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 text-center card-hover"
              data-reveal="scale-in"
            >
              <div className="text-4xl mb-4">☎️</div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-2">Primary Phone</h3>
              <a
                href="tel:917-518-8753"
                className="text-xl text-olive-50 hover:text-accent transition-colors font-semibold"
              >
                917-518-8753
              </a>
              <p className="text-olive-200 text-sm mt-2">Best for immediate inquiries</p>
            </div>

            {/* Phone 2 */}
            <div
              className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 text-center card-hover"
              data-reveal="scale-in"
              data-delay="1"
            >
              <div className="text-4xl mb-4">☎️</div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-2">Secondary Phone</h3>
              <a
                href="tel:917-518-3866"
                className="text-xl text-olive-50 hover:text-accent transition-colors font-semibold"
              >
                917-518-3866
              </a>
              <p className="text-olive-200 text-sm mt-2">Alternative contact number</p>
            </div>

            {/* Email */}
            <div
              className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 text-center card-hover"
              data-reveal="scale-in"
              data-delay="2"
            >
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-2">Email</h3>
              <a
                href="mailto:lokeil2024@gmail.com"
                className="text-xl text-olive-50 hover:text-accent transition-colors font-semibold break-all"
              >
                lokeil2024@gmail.com
              </a>
              <p className="text-olive-200 text-sm mt-2">Send us a detailed message</p>
            </div>
          </div>

          {/* Address and Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Address */}
            <div
              className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8"
              data-reveal="fade-up"
            >
              <h2 className="text-3xl font-serif font-bold text-olive-50 mb-6">Our Location</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-2">LOKEIL inc</h3>
                  <p className="text-olive-200 text-lg leading-relaxed">
                    Ridgewood, Queens<br />
                    New York, NY 11385<br />
                    <span className="text-olive-300">Serving NYC Metro Area</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="bg-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8"
              data-reveal="fade-up"
              data-delay="1"
            >
              <h2 className="text-3xl font-serif font-bold text-olive-50 mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-olive-200">Monday - Friday:</span>
                  <span className="text-accent font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-olive-200">Saturday:</span>
                  <span className="text-accent font-semibold">12:00 PM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-olive-200">Sunday:</span>
                  <span className="text-olive-300">Closed</span>
                </div>
                <p className="text-olive-300 text-sm pt-4">
                  Contact us anytime via phone or email, and we'll get back to you during business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div
            className="bg-gradient-to-r from-olive-400 to-olive-400 bg-opacity-30 backdrop-blur-xs border border-olive-50 border-opacity-10 rounded-lg p-8 text-center card-hover"
            data-reveal="scale-in"
          >
            <h2 className="text-3xl font-serif font-bold text-olive-50 mb-4">Follow Our Work</h2>
            <p className="text-olive-200 mb-6">Stay inspired with our latest projects and design ideas</p>
            <a
              href="https://instagram.com/lokeil.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-all hover:shadow-xl"
            >
              Follow @lokeil.inc on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-olive-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-olive-50 mb-12" data-reveal="fade-up">
            Find Us
          </h2>
          <div
            className="rounded-lg overflow-hidden h-96 border border-olive-50 border-opacity-10"
            data-reveal="scale-in"
            data-delay="1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.634!2d-73.9055!3d40.7004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e3e2a3d7f0b%3A0x2b71f791d3a62e4c!2sRidgewood%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1711843200000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LOKEIL inc Location Map"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="fade-up">
          <h2 className="text-4xl font-serif font-bold text-olive-50 mb-6">
            Call Us Today
          </h2>
          <p className="text-xl text-olive-200 mb-8">
            Get your free estimate for your interior remodeling project
          </p>
          <a
            href="tel:917-518-8753"
            className="inline-block px-8 py-4 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-all hover:shadow-xl text-lg"
          >
            917-518-8753
          </a>
        </div>
      </section>
    </main>
  );
}
