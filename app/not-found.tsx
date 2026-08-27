import Link from 'next/link';

export default function NotFound() {
  return <main><section className="section-space"><div className="site-shell max-w-4xl"><p className="eyebrow">404 · Page not found</p><h1 className="page-title mt-4">That remodeling page is not available.</h1><p className="lead mt-6">Use the service index, gallery, or contact page to find the closest useful information and continue the estimate conversation.</p><nav className="mt-8 flex flex-wrap gap-4" aria-label="Recovery links"><Link className="button-primary" href="/">Home</Link><Link className="button-secondary" href="/services">Services</Link><Link className="button-secondary" href="/contact">Contact</Link><a className="button-secondary" href="/sitemap.xml">Sitemap</a></nav></div></section></main>;
}
