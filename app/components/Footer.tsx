import Link from 'next/link';

import { coreServices, navItems, siteData } from '../siteData';

export default function Footer() {
  return (
    <footer className="section-rule bg-olive-700/70 py-14">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <p className="eyebrow">Interior remodeling</p>
            <h3 className="mt-3 font-serif text-4xl text-accent">{siteData.brandName}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-olive-100/72">
              Bathrooms, kitchens, tile work, flooring, plaster, painting, cabinets,
              doors, steps, and fireplace design with a cleaner, modern finish language.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-olive-100/54">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-olive-100/76 hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-olive-100/54">
              Core Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-olive-100/76">
              {coreServices.slice(0, 5).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-olive-100/54">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-olive-100/76">
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
              Follow {siteData.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7 text-sm text-olive-100/48">
          <p>
            &copy; {new Date().getFullYear()} {siteData.legalName}. Ridgewood, Queens, NY.
          </p>
        </div>
      </div>
    </footer>
  );
}
