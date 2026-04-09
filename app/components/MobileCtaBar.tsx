import { siteData } from '../siteData';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-olive-700/85 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-[34rem] gap-3">
        <a href={`tel:${siteData.phoneHref}`} className="button-primary flex-1 px-4 py-3 text-sm">
          Call Now
        </a>
        <a href={`mailto:${siteData.email}`} className="button-secondary flex-1 px-4 py-3 text-sm">
          Email
        </a>
      </div>
    </div>
  );
}
