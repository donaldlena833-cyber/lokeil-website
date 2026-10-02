// Public Yelp review checked on October 2, 2026. Keep its filtering status
// alongside the excerpt; this individual review is not a business rating.
export const customerFeedback = {
  author: 'Ilkersa B.',
  project: 'Bathroom renovation',
  date: '2025-05-06',
  dateDisplay: 'May 6, 2025',
  excerpt: 'The service was prompt and professional, with great communication throughout the entire process.',
  sourceUrl: 'https://www.yelp.com/not_recommended_reviews/lokeil-ridgewood',
  sourceNote: 'Yelp lists this review as not currently recommended and excludes it from the business rating.',
} as const;

export const customerFeedbackMarkdown = [
  '## From a bathroom renovation',
  `> ${customerFeedback.excerpt}`,
  `${customerFeedback.author}. ${customerFeedback.project}. ${customerFeedback.dateDisplay}.`,
  customerFeedback.sourceNote,
  `Read this review on Yelp: ${customerFeedback.sourceUrl}`,
].join('\n\n');
