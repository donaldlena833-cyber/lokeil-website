import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import EstimateRequestForm from '../components/EstimateRequestForm';
import { estimateEmailHref, siteData } from '../siteData';
import { buildPageMetadata } from '../seo';
import { estimateDeliveryConfig, issueEstimateToken } from '../../lib/estimateDelivery';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildPageMetadata({
  title: 'Request a Remodeling Estimate',
  description: 'Request an estimate for bathroom, kitchen, tile, flooring, cabinets, plaster, or painting. LOKEIL Renovation serves all five NYC boroughs from Ridgewood, Queens.',
  path: '/contact',
});

export default function Contact() {
  const config = estimateDeliveryConfig(process.env);
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      <section className="border-b border-ink/10 pb-10 pt-8 sm:pb-14 sm:pt-10">
        <div className="site-shell max-w-5xl">
          <p className="eyebrow">LOKEIL Renovation</p>
          <h1 className="page-title mt-4 max-w-3xl">Let’s talk about your room.</h1>
          <p className="lead mt-5 max-w-2xl">A bathroom, a kitchen, or a finish that needs attention. Tell us what you have in mind.</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="site-shell grid min-w-0 max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <EstimateRequestForm deliveryEnabled={Boolean(config)} initialToken={config ? issueEstimateToken(config).token : ''} />
          <aside className="min-w-0 border-t border-ink/15 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h2 className="text-3xl">Prefer a conversation?</h2>
            <a href={`tel:${siteData.phoneHref}`} className="mt-5 inline-block text-xl font-semibold text-accent underline decoration-accent/35 underline-offset-8">{siteData.phoneDisplay}</a>
            <a href={estimateEmailHref} className="mt-5 block break-words text-sm text-accent underline underline-offset-4">{siteData.email}</a>
            <div className="mt-9 border-t border-ink/15 pt-6">
              <h3 className="text-xl">When to reach us</h3>
              <dl className="mt-4 space-y-3 text-sm leading-6">
                {siteData.hours.map((hour) => <div key={hour.label}><dt className="text-ink/70">{hour.label}</dt><dd>{hour.value}</dd></div>)}
              </dl>
            </div>
            <div className="mt-8 border-t border-ink/15 pt-6">
              <h3 className="text-xl">Based in Ridgewood</h3>
              <p className="mt-3 text-sm leading-7 text-ink/80">Serving Queens, Brooklyn, Manhattan, the Bronx, and Staten Island, with selected projects in Long Island and Westchester County.</p>
              <p className="mt-3 text-sm leading-7 text-ink/80">Share your neighborhood first. We can discuss the address and building access when planning a visit.</p>
            </div>
            <figure className="mt-8">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/gallery/bathroom-tiles/6.jpg" alt="Pale shower tile with a recessed niche and glass enclosure." fill sizes="(max-width: 1023px) 80vw, 255px" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-xs leading-6 text-ink/70">A detail from the LOKEIL gallery. <Link href="/gallery" className="text-accent underline underline-offset-4">Explore the project photos</Link>.</figcaption>
            </figure>
          </aside>
        </div>
      </section>
      <section id="payment-options" className="scroll-mt-20 border-t border-ink/10 py-10 sm:py-12" aria-labelledby="payment-options-title">
        <div className="site-shell grid max-w-5xl gap-8 sm:grid-cols-2">
          <div>
            <h2 id="payment-options-title" className="text-3xl">Payment options</h2>
            <p className="mt-4 text-base leading-7 text-ink/80">We accept {siteData.paymentMethods.join(', ')}.</p>
            <p className="mt-3 text-sm leading-7 text-ink/80">We’ll agree on the project price, payment schedule, and chosen method before work begins.</p>
          </div>
          <div>
            <h2 className="text-3xl">Communication</h2>
            <p className="mt-4 text-base leading-7 text-ink/80">{siteData.communicationNote}</p>
            <p className="mt-3 text-sm leading-7 text-ink/80">Let us know how you prefer to communicate when you contact us about your project.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-ink/10 bg-sage-soft/45 py-10 sm:py-12">
        <div className="site-shell grid max-w-5xl gap-7 sm:grid-cols-2">
          <div><h2 className="text-3xl">Have photos ready?</h2><p className="mt-4 max-w-md text-base leading-7 text-ink/80">A wide view, one close detail, and approximate measurements help us understand the starting point. Attach them to your estimate email.</p></div>
          <div><h2 className="text-3xl">Still choosing the scope?</h2><p className="mt-4 text-base leading-7 text-ink/80">Start with the room and the problem. You can compare <Link href="/services" className="text-accent underline underline-offset-4">our services</Link> or read the <Link href="/blog" className="text-accent underline underline-offset-4">remodeling planning guides</Link>.</p><p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-accent"><a href={siteData.yelp} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LOKEIL on Yelp<span className="sr-only">, opens in a new tab</span></a><a href={siteData.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram project updates<span className="sr-only">, opens in a new tab</span></a></p></div>
        </div>
      </section>
    </main>
  );
}
