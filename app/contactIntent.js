/**
 * Build the privacy-safe analytics payload for a direct contact link.
 * The destination itself is intentionally excluded.
 *
 * @param {string | null | undefined} href
 * @param {string} pagePath
 * @returns {{event: 'click_call' | 'click_email', page_path: string} | null}
 */
export function contactIntentPayload(href, pagePath) {
  const normalizedHref = href?.trim().toLowerCase();
  if (!normalizedHref) return null;

  if (normalizedHref.startsWith('tel:')) {
    return { event: 'click_call', page_path: pagePath };
  }

  if (normalizedHref.startsWith('mailto:')) {
    return { event: 'click_email', page_path: pagePath };
  }

  return null;
}
