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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="site-shell">
        <div className="surface relative flex min-h-[84px] items-center justify-between rounded-[28px] px-5 py-4 sm:px-7">
          <Link href="/" className="group shrink-0">
            <span className="block font-serif text-[1.7rem] leading-none text-accent">
              {siteData.shortName}
            </span>
            <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.26em] text-olive-100/58">
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
                      : 'text-olive-100/80 hover:text-olive-50'
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
              Free Estimate
            </Link>
          </div>

          <button
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`absolute h-0.5 w-5 bg-olive-50 transition-all ${
                mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-olive-50 transition-all ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-olive-50 transition-all ${
                mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="surface mt-3 rounded-[28px] px-5 py-5 lg:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-base ${
                      isActive(item.href)
                        ? 'bg-white/[0.08] text-accent'
                        : 'text-olive-100/82 hover:bg-white/[0.05] hover:text-olive-50'
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
