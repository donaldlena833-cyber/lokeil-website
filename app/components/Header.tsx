'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-olive-500 bg-opacity-95 backdrop-blur-xs border-b border-olive-50 border-opacity-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Company Name */}
        <Link href="/" className="text-2xl font-serif font-bold text-accent">
          LOKEIL
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/" className="text-olive-50 hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-olive-50 hover:text-accent transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-olive-50 hover:text-accent transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-olive-50 hover:text-accent transition-colors">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-6 py-2 bg-accent text-olive-900 font-semibold rounded hover:bg-accent-hover transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 relative w-6 h-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-olive-50 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`h-0.5 w-full bg-olive-50 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-olive-50 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-olive-600 border-t border-olive-50 border-opacity-10">
          <ul className="flex flex-col gap-0 py-4">
            <li>
              <Link
                href="/"
                className="block px-6 py-3 text-olive-50 hover:bg-olive-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-6 py-3 text-olive-50 hover:bg-olive-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block px-6 py-3 text-olive-50 hover:bg-olive-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block px-6 py-3 text-olive-50 hover:bg-olive-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-6 py-3 text-accent font-semibold hover:bg-olive-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
