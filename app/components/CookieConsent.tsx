"use client";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

type Choice = { analytics: boolean; marketing: boolean; expires: number };
type TagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: `ga-disable-${string}`]: boolean };
const KEY = "site-cookie-choice-v1";
const denied = { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" };

function readChoice(): Choice | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || "null");
    return c && typeof c.analytics === "boolean" && typeof c.marketing === "boolean" && c.expires > Date.now() ? c : null;
  } catch { return null; }
}
function clearMeasurementCookies() {
  const host = location.hostname.split(".");
  const domains = ["", ...host.map((_, i) => host.slice(i).join("."))];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^(_ga|_gid|_gat|_gcl|_gac|_fbp|_fbc)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
    }
  }
}

export function CookieConsent({ analyticsId, adsId, tagManagerId, privacyPath = "/privacy", nonce }: {
  analyticsId?: string; adsId?: string; tagManagerId?: string; privacyPath?: string; nonce?: string;
}) {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const loaded = useRef(false);
  const marketingAvailable = Boolean(adsId || tagManagerId);

  useEffect(() => {
    const sync = () => {
      const saved = readChoice();
      const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === "1";
      setChoice(saved ? { ...saved, marketing: privacySignal ? false : saved.marketing } : null);
      setOpen(!saved); setReady(true);
    };
    sync();
    const onStorage = (event: StorageEvent) => { if (event.key === KEY) { if (loaded.current) location.reload(); else sync(); } };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const w = window as unknown as TagWindow;
    if (analyticsId) w[`ga-disable-${analyticsId}`] = !choice?.analytics;
    if (!choice?.analytics && !choice?.marketing) {
      if (loaded.current) location.reload();
      return;
    }
    // No vendor connection or event queue exists before an explicit opt-in.
    w.dataLayer = w.dataLayer || [];
    // Google documents its command queue as Arguments objects, not event arrays.
    w.gtag = w.gtag || function () { w.dataLayer!.push(arguments); };
    w.gtag("consent", "default", denied);
    w.gtag("consent", "update", {
      analytics_storage: choice.analytics ? "granted" : "denied",
      ad_storage: choice.marketing ? "granted" : "denied",
      ad_user_data: choice.marketing ? "granted" : "denied",
      ad_personalization: choice.marketing ? "granted" : "denied",
    });
    if (loaded.current) return;
    loaded.current = true;
    const inject = (src: string) => {
      const script = document.createElement("script"); script.src = src; script.async = true;
      if (nonce) script.nonce = nonce;
      document.head.appendChild(script);
    };
    // GTM can contain arbitrary tags; load the existing container only when both optional purposes are accepted.
    if (tagManagerId && choice.analytics && choice.marketing) {
      w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      inject(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagManagerId)}`);
    } else {
      const id = choice.analytics && analyticsId ? analyticsId : choice.marketing ? adsId : undefined;
      if (id) {
        w.gtag("js", new Date());
        if (choice.analytics && analyticsId) w.gtag("config", analyticsId, { page_location: location.origin + location.pathname, page_referrer: "", allow_google_signals: false, allow_ad_personalization_signals: false });
        if (choice.marketing && adsId) w.gtag("config", adsId);
        inject(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
      }
    }
  }, [choice, ready, analyticsId, adsId, tagManagerId, nonce]);

  function save(analytics: boolean, marketing: boolean) {
    const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === "1";
    const next = { analytics, marketing: privacySignal ? false : marketing, expires: Date.now() + 180 * 86400000 };
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* Choice still applies to this page if storage is unavailable. */ }
    if (!next.analytics || !next.marketing) clearMeasurementCookies();
    const reload = loaded.current;
    setChoice(next); setOpen(false);
    if (reload) location.reload();
  }
  return <>
    <div className="readiness-utility"><Link href={privacyPath}>Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link><button type="button" onClick={() => setOpen(true)}>Cookie settings</button></div>
    {ready && open && <section className="readiness-consent" aria-label="Cookie preferences">
      <h2>Your privacy choices</h2>
      <p>Essential features work without optional cookies. {marketingAvailable ? "With your permission, Google tools help us understand visits and measure advertising." : "With your permission, Google Analytics helps us understand visits."} Choose below or change your choice in Cookie settings. <Link href={privacyPath}>Read our privacy notice</Link>.</p>
      <div className="readiness-consent-actions">
        <button type="button" onClick={() => save(false, false)}>Reject optional</button>
        {!tagManagerId && analyticsId && marketingAvailable && <button type="button" onClick={() => save(true, false)}>Analytics only</button>}
        <button type="button" onClick={() => save(true, marketingAvailable)}>{marketingAvailable ? "Accept optional" : "Allow analytics"}</button>
        {choice && <button type="button" onClick={() => setOpen(false)}>Close</button>}
      </div>
    </section>}
  </>;
}
