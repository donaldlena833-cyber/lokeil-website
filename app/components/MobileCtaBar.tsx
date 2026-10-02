'use client';

import { usePathname } from 'next/navigation';
import { neighborhoodArticleSlugs } from '../blog/neighborhoods/routes';
import { estimateEmailHref, siteData } from '../siteData';

export default function MobileCtaBar() {
  const pathname = usePathname();
  const hasBrief = neighborhoodArticleSlugs.some((slug) => pathname === `/blog/${slug}`);
  const isContact = pathname === '/contact';
  return (
    <div className="mobile-cta fixed bottom-0 left-0 right-0 z-40 border-t border-ink/15 bg-paper/95 px-4 pb-[calc(0.55rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-[34rem] gap-2">
        <a href={`tel:${siteData.phoneHref}`} className="button-primary flex-1 px-4 py-3 text-sm">
          Call Now
        </a>
        <a href={isContact ? '#estimate-actions' : hasBrief ? '#estimate-brief' : estimateEmailHref} className="button-secondary flex-1 px-4 py-3 text-sm">
          {isContact ? 'Your Project Brief' : hasBrief ? 'Plan Your Project' : 'Email Project'}
        </a>
      </div>
    </div>
  );
}
