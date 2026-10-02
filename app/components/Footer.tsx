import Link from 'next/link';

import { coreServices, navItems, siteData } from '../siteData';

export default function Footer() {
  return (
    <footer className="section-rule bg-sage-soft pt-14 pb-28 md:pb-14">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <p className="eyebrow">Interior remodeling</p>
            <h3 className="mt-3 font-serif text-4xl text-accent">{siteData.brandName}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink/80">
              Interior renovation from our Ridgewood base, serving Queens, Brooklyn,
              Manhattan, the Bronx, and Staten Island. Bathrooms, kitchens, tile,
              cabinets, flooring, plaster, and paint.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/80">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink/80 hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/80">
              Core Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {coreServices.slice(0, 5).map((service) => (
                <li key={service.title}>
                  {'href' in service ? (
                    <Link href={service.href} className="hover:text-accent">
                      {service.title}
                    </Link>
                  ) : (
                    service.title
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li>
                <a href={`tel:${siteData.phoneHref}`} className="hover:text-accent">
                  {siteData.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteData.email}`} className="break-all hover:text-accent">
                  {siteData.email}
                </a>
              </li>
              <li>{siteData.location}</li>
              <li>{siteData.hours[0].label}: {siteData.hours[0].value}</li>
              <li>{siteData.hours[1].label}: {siteData.hours[1].value}</li>
            </ul>
            <a
              href={siteData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary mt-5 px-5 py-3"
            >
              Follow {siteData.instagramHandle}<span className="sr-only">, opens in a new tab</span>
            </a>
            <a href={siteData.yelp} target="_blank" rel="noopener noreferrer"
              className="mt-4 block text-sm text-accent underline underline-offset-4">
              Find LOKEIL on Yelp<span className="sr-only">, opens in a new tab</span>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-7 text-sm text-ink/80">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} {siteData.legalName} Ridgewood, Queens, NY.</p>
            <div className="flex gap-5"><Link href="/privacy" className="hover:text-accent">Privacy</Link><Link href="/terms" className="hover:text-accent">Terms</Link></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
