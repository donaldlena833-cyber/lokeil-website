import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-olive-600 border-t border-olive-50 border-opacity-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif text-accent mb-4">LOKEIL</h3>
            <p className="text-olive-200 text-sm">
              Creating spaces that are comfortable, memorable and inspiring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-olive-50 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-olive-200 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-olive-200 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-olive-200 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-olive-200 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-olive-50 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-olive-200">
              <li className="flex items-center gap-2">
                <span>Phone:</span>
                <a href="tel:917-518-8753" className="text-accent hover:text-accent-hover">
                  917-518-8753
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>Email:</span>
                <a href="mailto:lokeil2024@gmail.com" className="text-accent hover:text-accent-hover">
                  lokeil2024@gmail.com
                </a>
              </li>
              <li>Ridgewood, Queens, NY 11385</li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-olive-50 font-semibold mb-4">Hours & Social</h4>
            <ul className="space-y-2 text-sm text-olive-200 mb-4">
              <li>Mon-Fri: 10am - 6pm</li>
              <li>Sat: 12pm - 5pm</li>
              <li>Sun: Closed</li>
            </ul>
            <a
              href="https://instagram.com/lokeil.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-colors text-sm"
            >
              Follow @lokeil.inc
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-olive-50 border-opacity-10 pt-8 text-center text-sm text-olive-300">
          <p>
            &copy; {new Date().getFullYear()} LOKEIL inc. All rights reserved. | Queens, NY
          </p>
        </div>
      </div>
    </footer>
  );
}
