# LOKEIL estimate delivery

The contact page currently prepares a customer controlled email draft. Web submission is deliberately disabled until its own sender and recipient are verified. Do not reuse the MetroGlass Pro sender, form endpoint, or destination inbox.

## Prepared implementation

The contact page has native labeled fields, an email preview, copy fallback, direct phone and email links, and a server submission path. The server sends a plain text brief only to `info@lokeilremodeling.com`, using the customer's validated email as Reply To. It cannot accept arbitrary sender or recipient addresses from the browser. A signed form token and brief fingerprint identify one request and supply a stable Resend idempotency key on retries.

Optional source information is supplied by the customer. It is not proof of Google or AI attribution. Form submission does not depend on optional analytics consent. This release adds no automatic customer acknowledgement email and no newsletter subscription.

## Activation prerequisites

1. Verify a LOKEIL sending domain or subdomain in Resend with the generated DNS records. Check existing mail records before any DNS mutation.
2. The owner must create or approve a sending key limited to that domain, then save it as the encrypted server environment variable `RESEND_API_KEY` in the matching Vercel project. Do not paste it into source or the conversation.
3. Save `LOKEIL_ESTIMATE_FROM` as `LOKEIL Renovation <estimates@send.lokeilremodeling.com>` or another verified LOKEIL sender. Save a random secret of at least 32 characters as `LOKEIL_FORM_SECRET`. Neither is a browser environment variable.
4. Review the hosting firewall rate controls for `/api/estimate`. The built in five new requests per IP per ten minutes guard is per function instance, not a persistent or distributed limit. The honeypot, signed token, origin check, field limits, and bounded request stream provide additional filtering.
5. With explicit permission to send a labeled test to the LOKEIL estimate inbox, enable `LOKEIL_ESTIMATE_ENABLED=true` on an isolated preview. Verify the exact recipient, sender, reply address, reference, provider delivery event, and received inbox message. A 202 or provider ID proves acceptance only. Check retries, error fallback, and mobile behavior with the configured transport.
6. Only after that delivery check, enable production and verify the same exact deployment and custom domain behavior. Reconcile real received inquiries with the lead ledger, then estimates and credited jobs separately.

The endpoint returns 503 and the public page retains its draft flow when the enable flag, key, signing secret, or valid LOKEIL sender is absent. No entered brief is saved in browser storage. Runtime logs contain request/provider references and upstream status only. A timeout or unconfirmed provider response preserves the brief in the page and offers an email fallback; it does not display a success state. Unchanged retries in the current valid form session use the same reference. Tokens expire after one hour; Resend retains idempotency keys for 24 hours. Starting or refreshing a form session creates a new token and can create a separate request. Reconcile uncertain sends before treating a later new session as a missing lead.

The transport has no independent durable queue or lead database. Provider acceptance must be reconciled with delivery and the inbox. A durable lead store and verified signed delivery webhook are a separate integration if needed; this release does not claim to provide them.

## Primary references

* [Resend send API](https://resend.com/docs/api-reference/emails/send-email)
* [Resend idempotency](https://resend.com/docs/dashboard/emails/idempotency-keys)
* [Verified domains](https://resend.com/docs/dashboard/domains/introduction)

Research and implementation review: October 2, 2026.
