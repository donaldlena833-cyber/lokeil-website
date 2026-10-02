'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { emptyEstimate, estimateBrief, estimateServices, estimateSources, type EstimateDetails } from '../../lib/estimate';
import { siteData } from '../siteData';

type Props = { deliveryEnabled: boolean; initialToken: string };
type Notice = { kind: 'error' | 'accepted' | 'info'; text: string; reference?: string };

export default function EstimateRequestForm({ deliveryEnabled, initialToken }: Props) {
  const [value, setValue] = useState<EstimateDetails>({ ...emptyEstimate });
  const [token, setToken] = useState(initialToken);
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof EstimateDetails, string>>>({});
  const [expired, setExpired] = useState(false);
  const [copyNotice, setCopyNotice] = useState('');
  const body = estimateBrief(value);
  const emailHref = `mailto:${siteData.email}?subject=${encodeURIComponent('Remodeling estimate request')}&body=${encodeURIComponent(body)}`;
  const fieldClass = 'mt-2 w-full rounded-none border-b border-ink/30 bg-paper-raised/60 px-3 py-3 text-base text-ink placeholder:text-ink/45 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-65';
  const accepted = notice?.kind === 'accepted';
  const change = (field: keyof EstimateDetails, text: string) => {
    setValue((previous) => ({ ...previous, [field]: text }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };
  const errorProps = (field: keyof EstimateDetails) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `estimate-${field}-error` : undefined,
  });
  const errorText = (field: keyof EstimateDetails) => errors[field] ? <span id={`estimate-${field}-error`} className="mt-2 block text-sm text-[#8b352a]">{errors[field]}</span> : null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!deliveryEnabled || pending || accepted) return;
    const fields = new URLSearchParams();
    for (const [key, entry] of new FormData(event.currentTarget)) if (typeof entry === 'string') fields.append(key, entry);
    setPending(true);
    setNotice(null);
    try {
      const response = await fetch('/api/estimate', {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body: fields, signal: AbortSignal.timeout(25_000),
      });
      const result = await response.json();
      if (response.status === 202 && typeof result.reference === 'string') {
        setNotice({ kind: 'accepted', text: result.message, reference: result.reference });
        setErrors({});
      } else {
        setNotice({ kind: 'error', text: typeof result.message === 'string' ? result.message : 'We could not confirm your request. Please retry or use the estimate email.' });
        setErrors(result.fields || {});
        setExpired(result.code === 'expired');
      }
    } catch {
      setNotice({ kind: 'error', text: 'We could not confirm your request. Your details are still here. Retry or open the estimate email.' });
    } finally { setPending(false); }
  }

  async function refreshSession() {
    setPending(true);
    try {
      const response = await fetch('/api/estimate', { headers: { Accept: 'application/json' }, cache: 'no-store' });
      const result = await response.json();
      if (!response.ok || !result.token) throw new Error('Unavailable');
      setToken(result.token);
      setExpired(false);
      setNotice({ kind: 'info', text: 'The form is ready again. Your project details are unchanged.' });
    } catch { setNotice({ kind: 'error', text: 'Please use the estimate email below or call LOKEIL.' }); }
    finally { setPending(false); }
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(body);
      setCopyNotice(`Brief copied. Paste it into an email to ${siteData.email} and add your room photos.`);
    } catch { setCopyNotice('Open the preview below to select and copy your brief.'); }
  }

  return (
    <section id="estimate-brief" className="scroll-mt-24">
      <p className="eyebrow">Start with your room</p>
      <h2 className="section-title mt-4">{deliveryEnabled ? 'Tell us about your project.' : 'Prepare your estimate email.'}</h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-ink/80">
        {deliveryEnabled ? 'Describe the room and the work you are considering. We will use your details to discuss an estimate.' : 'Fill in what you know, then open the brief in your email app. Add current room photos before sending.'}
      </p>
      <form className="mt-8" method="post" action="/api/estimate" onSubmit={submit}>
        <input type="hidden" name="token" value={token} />
        <div className="hidden" aria-hidden="true">
          <label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <fieldset disabled={pending || accepted} className="grid min-w-0 gap-x-6 gap-y-6 sm:grid-cols-2">
          <legend className="sr-only">Project and contact details</legend>
          {deliveryEnabled ? <><label className="text-sm font-semibold">Your name
            <input name="name" autoComplete="name" required={deliveryEnabled} maxLength={100} className={fieldClass} value={value.name} onChange={(event) => change('name', event.target.value)} {...errorProps('name')} />{errorText('name')}
          </label>
          <label className="text-sm font-semibold">Email address
            <input name="email" type="email" autoComplete="email" required={deliveryEnabled} maxLength={254} className={fieldClass} value={value.email} onChange={(event) => change('email', event.target.value)} {...errorProps('email')} />{errorText('email')}
          </label></> : <><input type="hidden" name="name" value="" /><input type="hidden" name="email" value="" /></>}
          <label className="text-sm font-semibold">Neighborhood or ZIP code
            <input name="neighborhood" autoComplete="address-level2" required={deliveryEnabled} maxLength={120} placeholder="For example, Ridgewood or 11385" className={fieldClass} value={value.neighborhood} onChange={(event) => change('neighborhood', event.target.value)} {...errorProps('neighborhood')} />{errorText('neighborhood')}
          </label>
          <label className="text-sm font-semibold">What kind of work?
            <select name="service" required={deliveryEnabled} className={fieldClass} value={value.service} onChange={(event) => change('service', event.target.value)} {...errorProps('service')}>
              <option value="">Choose a service</option>{estimateServices.map((service) => <option key={service}>{service}</option>)}
            </select>{errorText('service')}
          </label>
          <label className="text-sm font-semibold sm:col-span-2">What would you like to change?
            <textarea name="details" required={deliveryEnabled} minLength={deliveryEnabled ? 10 : undefined} maxLength={2500} rows={4} placeholder="The room, what needs attention, and any finishes you want to keep." className={fieldClass} value={value.details} onChange={(event) => change('details', event.target.value)} {...errorProps('details')} />{errorText('details')}
          </label>
          <details className="sm:col-span-2">
            <summary className="cursor-pointer text-sm font-semibold text-accent">Add contact, timing, or how you found us (optional)</summary>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold">Phone number (optional)
            <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={fieldClass} value={value.phone} onChange={(event) => change('phone', event.target.value)} {...errorProps('phone')} />{errorText('phone')}
          </label>
          <label className="text-sm font-semibold">Timing (optional)
            <input name="timing" maxLength={120} placeholder="Still planning, or your preferred month" className={fieldClass} value={value.timing} onChange={(event) => change('timing', event.target.value)} {...errorProps('timing')} />{errorText('timing')}
          </label>
          <label className="text-sm font-semibold sm:col-span-2">How did you find LOKEIL? (optional)
            <select name="heardFrom" className={fieldClass} value={value.heardFrom} onChange={(event) => change('heardFrom', event.target.value)} {...errorProps('heardFrom')}>
              {estimateSources.map((source) => <option key={source}>{source}</option>)}
            </select>{errorText('heardFrom')}
          </label>
            </div>
          </details>
        </fieldset>
        {notice ? <div className={`mt-6 border-l-2 px-4 py-3 text-sm leading-7 ${notice.kind === 'error' ? 'border-[#8b352a] bg-[#8b352a]/5' : 'border-accent bg-sage-soft/60'}`} role={notice.kind === 'error' ? 'alert' : 'status'}>
          <p>{notice.text}</p>{notice.reference ? <p className="mt-2 break-all">Reference: {notice.reference}</p> : null}
        </div> : null}
        <div id="estimate-actions" className="mt-7 flex scroll-mt-24 flex-col gap-3 sm:flex-row sm:flex-wrap">
          {deliveryEnabled && !accepted ? (expired ? <button type="button" className="button-primary" disabled={pending} onClick={refreshSession}>Refresh form session</button> : <button type="submit" className="button-primary disabled:opacity-60" disabled={pending}>{pending ? 'Submitting your request…' : 'Request an estimate'}</button>) : null}
          {!accepted ? <a href={emailHref} className={deliveryEnabled ? 'button-secondary' : 'button-primary'}>Open estimate email</a> : null}
          <button type="button" className="button-secondary" onClick={copyBrief}>Copy project brief</button>
        </div>
        {copyNotice ? <p role="status" className="mt-3 text-sm leading-6 text-accent">{copyNotice}</p> : null}
        <p className="mt-4 text-xs leading-6 text-ink/75">
          {deliveryEnabled ? <>Submitting shares this brief with LOKEIL to respond to your request. </> : <>This prepares a draft. LOKEIL receives it only when you send the email. </>}
          <Link href="/privacy" className="underline underline-offset-4">How we handle your information</Link>.
        </p>
        <details className="mt-6 border-y border-ink/15 py-4">
          <summary className="cursor-pointer text-sm font-semibold text-accent">Preview your project brief</summary>
          <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-ink/80">{body}</p>
        </details>
        <noscript><p className="mt-4 text-sm leading-7">For an email draft without JavaScript, email <a className="underline" href={`mailto:${siteData.email}`}>{siteData.email}</a> with the room, neighborhood, and work you need.</p></noscript>
      </form>
    </section>
  );
}
