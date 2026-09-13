'use client';

import { useEffect } from 'react';

import { contactIntentPayload } from '../contactIntent';

type ContactIntentEvent = NonNullable<ReturnType<typeof contactIntentPayload>>;

type AnalyticsWindow = Window & {
  dataLayer?: ContactIntentEvent[];
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
      try {
        const consent = JSON.parse(localStorage.getItem('site-cookie-choice-v1') || 'null');
        if (!consent || !consent.analytics || !consent.marketing || consent.expires <= Date.now()) return;
      } catch { return; }

      const analyticsWindow = window as AnalyticsWindow;
      analyticsWindow.dataLayer ??= [];
      analyticsWindow.dataLayer.push(payload);
    };

    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);

  return null;
}
