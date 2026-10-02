import Link from 'next/link';

import { siteData } from '../siteData';

type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: 'Home', href: '/' }, ...items];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteData.siteUrl}${item.href}`,
    })),
  };

  return (
    <div className="site-shell pt-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6 text-ink/80">
          {trail.map((item, index) => (
            <li key={item.href} className="flex items-center gap-3">
              {index > 0 ? <span aria-hidden="true" className="text-ink/40">/</span> : null}
              {index === trail.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href} className="underline decoration-ink/20 underline-offset-4 hover:text-accent">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
