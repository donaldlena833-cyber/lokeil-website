import type { Metadata } from 'next';
import Link from 'next/link';

import { siteData } from '../siteData';
import { buildPageMetadata } from '../seo';
import { privacyIntro, privacySections } from './content';

export const metadata: Metadata = buildPageMetadata({ title: 'Privacy Notice', description: 'How LOKEIL Renovation handles estimate inquiries, project details, photographs, and website information.', path: '/privacy' });

export default function PrivacyPage() {
  return (
    <main>
      <section className="section-space border-b border-ink/8">
        <div className="site-shell max-w-4xl">
          <p className="eyebrow">Privacy notice</p>
          <h1 className="page-title mt-4">How estimate and project information is handled.</h1>
          <p className="lead mt-6">{privacyIntro}</p>
        </div>
      </section>
      <article className="site-shell max-w-4xl space-y-10 py-12 text-base leading-8 text-ink/80">
        {privacySections.map((section) => (
          <section key={section.heading}>
            <h2 className="section-title">{section.heading}</h2>
            <p className="mt-5">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="section-title">Your choices</h2>
          <p className="mt-5">To request an eligible correction or deletion, email <a className="text-accent underline underline-offset-4" href={`mailto:${siteData.email}`}>{siteData.email}</a>. Some information may be retained when reasonably required for an active project, legal obligation, safety, fraud prevention, or ordinary business records.</p>
        </section>
        <p className="text-sm">Updated October 7, 2026. <Link className="ml-2 text-accent underline underline-offset-4" href="/contact">Contact LOKEIL</Link></p>
      </article>
    </main>
  );
}
