import { customerFeedback } from '../customerFeedback';
import { siteData } from '../siteData';

export default function CustomerFeedback() {
  return (
    <section id="customer-feedback" className="section-rule section-space scroll-mt-20 bg-sage-soft/40" aria-labelledby="customer-feedback-title">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="eyebrow">Customer feedback</p>
          <h2 id="customer-feedback-title" className="section-title mt-4">From a bathroom renovation.</h2>
          <a href={siteData.yelp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-accent underline underline-offset-4">
            Visit LOKEIL on Yelp<span className="sr-only">, opens in a new tab</span>
          </a>
        </div>
        <figure className="min-w-0 border-l border-accent/30 pl-6 sm:pl-8">
          <blockquote className="max-w-3xl font-serif text-3xl leading-[1.35] text-ink sm:text-4xl">
            <p>“{customerFeedback.excerpt}”</p>
          </blockquote>
          <figcaption className="mt-6 text-sm leading-7 text-ink/80">
            <p className="font-semibold text-ink">{customerFeedback.author}</p>
            <p>{customerFeedback.project} · <time dateTime={customerFeedback.date}>{customerFeedback.dateDisplay}</time></p>
            <a href={customerFeedback.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-accent underline underline-offset-4">
              Read this review on Yelp<span className="sr-only">, opens in a new tab</span>
            </a>
            <p className="mt-3 max-w-xl">{customerFeedback.sourceNote}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
