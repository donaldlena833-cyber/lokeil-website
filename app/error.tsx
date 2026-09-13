"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <section className="readiness-page"><article><h1>This page couldn’t load.</h1><p>Please try again, or contact us directly if you need help.</p><button type="button" onClick={reset}>Try again</button><p><Link href="/">Return home</Link> · <Link href="/contact">Contact LOKEIL Renovation</Link></p></article></section>; }
