import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Manrope } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileCtaBar from './components/MobileCtaBar';
import ScrollObserver from './components/ScrollObserver';
import { structuredData } from './schema';
import { siteData } from './siteData';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
    default: `${siteData.brandName} | Interior Remodeling in Ridgewood, Queens`,
    template: `%s | ${siteData.brandName}`,
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
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollObserver />
        <Header />
        <main className="min-h-screen overflow-x-hidden pb-24 md:pb-0">{children}</main>
        <MobileCtaBar />
        <Footer />
      </body>
    </html>
  );
}
