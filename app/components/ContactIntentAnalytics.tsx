'use client';

import { useEffect } from 'react';

import { contactIntentPayload } from '../contactIntent';

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  __siteAnalyticsAllowed?: boolean;
};

export default function ContactIntentAnalytics() {
  useEffect(() => {
    const handleContactClick = (clickEvent: MouseEvent) => {
      if (!(clickEvent.target instanceof Element)) return;

      const contactLink = clickEvent.target.closest<HTMLAnchorElement>('a[href]');
      const payload = contactIntentPayload(
        contactLink?.getAttribute('href'),
        window.location.pathname,
      );
      if (!payload) return;
      const analyticsWindow = window as AnalyticsWindow;
      if (!analyticsWindow.__siteAnalyticsAllowed) return;
      analyticsWindow.gtag?.('event', payload.event, { page_path: payload.page_path });
    };

    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);

  return null;
}
