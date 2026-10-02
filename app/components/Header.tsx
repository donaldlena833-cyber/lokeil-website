'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { navItems, siteData } from '../siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-xl">
      <div className="site-shell relative">
        <div className="relative flex min-h-[70px] items-center justify-between gap-4 py-3">
          <Link href="/" className="group shrink-0">
            <span className="block font-serif text-[1.65rem] leading-none text-accent">
              {siteData.shortName}
            </span>
            <span className="mt-1 block text-[0.61rem] uppercase tracking-[0.2em] text-ink/80">
              {siteData.descriptor}
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm tracking-[0.08em] transition-colors ${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-ink/80 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${siteData.phoneHref}`} className="button-secondary px-5 py-3">
              {siteData.phoneDisplay}
            </a>
            <Link href="/contact" className="button-primary px-5 py-3">
              Request Estimate
            </Link>
          </div>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/25 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-all ${
                mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-all ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-all ${
                mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-navigation" className="absolute inset-x-0 top-full max-h-[calc(100svh-70px)] overflow-y-auto border-b border-ink/15 bg-paper px-5 pb-5 pt-2 shadow-xl sm:px-8 lg:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-base ${
                      isActive(item.href)
                        ? 'bg-sage-soft text-accent'
                        : 'text-ink/82 hover:bg-sage-soft/60 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${siteData.phoneHref}`} className="button-primary">
                Call {siteData.phoneDisplay}
              </a>
              <a href={`mailto:${siteData.email}`} className="button-secondary">
                Email Us
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
