import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Manrope } from 'next/font/google';
import { CookieConsent } from './components/CookieConsent';

import './readiness.css';
import './globals.css';
import ContactIntentAnalytics from './components/ContactIntentAnalytics';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileCtaBar from './components/MobileCtaBar';
import ScrollObserver from './components/ScrollObserver';
import { structuredData } from './schema';
import { siteData } from './siteData';

const gtmId = 'GTM-P7SQ92V3';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: `Interior Remodeling Queens | ${siteData.shortName}`,
    template: `%s | ${siteData.shortName}`,
  },
  description: siteData.description,
  applicationName: siteData.brandName,
  authors: [{ name: siteData.legalName }],
  creator: siteData.owner,
  publisher: siteData.brandName,
  category: 'home improvement',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'interior remodeling Queens NY',
    'bathroom remodeling Ridgewood',
    'kitchen remodeling Queens',
    'tile installation Queens',
    'flooring contractor NYC',
    'cabinet installation Queens',
    'painting and plaster Queens',
    'renovation contractor Ridgewood NY',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteData.brandName,
    title: `${siteData.brandName} | Interior Remodeling in Ridgewood, Queens`,
    description: siteData.description,
    images: [
      {
        url: siteData.socialImage,
        alt: siteData.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.brandName} | Interior Remodeling in Ridgewood, Queens`,
    description: siteData.description,
    images: [siteData.socialImage],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=20260919', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg?v=20260919', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: '/favicon.ico?v=20260919',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#4A5440',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="bg-olive-500 text-olive-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ContactIntentAnalytics />
        <ScrollObserver />
        <Header />
        <div className="min-h-screen overflow-x-hidden pb-24 md:pb-0">{children}</div>
        <MobileCtaBar />
        <Footer />
<CookieConsent tagManagerId={gtmId} />
      </body>
    </html>
  );
}
