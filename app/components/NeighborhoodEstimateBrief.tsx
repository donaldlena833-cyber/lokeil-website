'use client';

import { useState } from 'react';
import { siteData } from '../siteData';

type Props = { neighborhood: string; title: string; scope: string; slug: string };

export default function NeighborhoodEstimateBrief({ neighborhood, title, scope, slug }: Props) {
  const [role, setRole] = useState('Homeowner');
  const [building, setBuilding] = useState('Apartment / condo / co-op');
  const [work, setWork] = useState(scope);
  const [timing, setTiming] = useState('Exploring the scope');
  const [callback, setCallback] = useState('');
  const [notes, setNotes] = useState('');

  const body = [
    'Hello LOKEIL,', '', `Project neighborhood: ${neighborhood}`, `I am a: ${role}`,
    `Building type: ${building}`, `Work I am considering: ${work}`,
    `Timing: ${timing}`, `Best number to reach me: ${callback}`,
    `Room conditions / building access / questions: ${notes}`, '',
    'I can attach current room photos, approximate measurements, and building requirements before sending.',
    `Article I read: ${siteData.siteUrl}/blog/${slug}`,
  ].join('\n');
  const emailHref = `mailto:${siteData.email}?subject=${encodeURIComponent(`${neighborhood} — remodeling estimate request`)}&body=${encodeURIComponent(body)}`;
  const field = 'mt-2 w-full rounded-none border border-ink/25 bg-paper-raised px-4 py-3 text-base text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';

  return (
    <section id="estimate-brief" className="scroll-mt-32 border-t border-ink/15 pt-10">
      <p className="eyebrow">Your room, your next step</p>
      <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-ink/80">Prepare a short brief, then open it in your email app. Add room photos and any building requirements before sending to LOKEIL.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">I am a
          <select className={field} value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Homeowner</option><option>Property manager</option><option>Resident coordinating with owner</option><option>Contractor coordinating finish work</option>
          </select>
        </label>
        <label className="text-sm font-medium">Building type
          <select className={field} value={building} onChange={(event) => setBuilding(event.target.value)}>
            <option>Apartment / condo / co-op</option><option>House / townhouse</option><option>Multiple apartments</option><option>Other / still confirming</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">What would you like to change?
          <input className={field} value={work} maxLength={250} onChange={(event) => setWork(event.target.value)} />
        </label>
        <label className="text-sm font-medium">Project timing
          <select className={field} value={timing} onChange={(event) => setTiming(event.target.value)}>
            <option>Exploring the scope</option><option>Within the next 1–3 months</option><option>Later this year</option><option>Dates depend on building approval</option>
          </select>
        </label>
        <label className="text-sm font-medium">Callback number (optional)
          <input className={field} type="tel" autoComplete="tel" value={callback} maxLength={40} onChange={(event) => setCallback(event.target.value)} />
        </label>
        <label className="text-sm font-medium sm:col-span-2">Anything we should know? (optional)
          <textarea className={field} rows={3} value={notes} maxLength={700} placeholder="Only bathroom, building work hours, finishes you want to keep…" onChange={(event) => setNotes(event.target.value)} />
        </label>
      </div>
      <details className="mt-6 border-y border-ink/15 py-4">
        <summary className="cursor-pointer text-sm font-medium text-accent">Preview your email brief</summary>
        <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-ink/80">{body}</p>
      </details>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a className="button-primary" href={emailHref}>Open estimate email</a>
        <a className="button-secondary" href={`tel:${siteData.phoneHref}`}>Call {siteData.phoneDisplay}</a>
      </div>
      <p className="mt-4 text-xs leading-6 text-ink/70">This prepares an email draft. LOKEIL receives your brief only when you send it. Prefer webmail? Copy the preview and email <a className="underline underline-offset-4" href={`mailto:${siteData.email}`}>{siteData.email}</a>.</p>
    </section>
  );
}
