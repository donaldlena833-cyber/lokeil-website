import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollObserver from './components/ScrollObserver';
import MobileCtaBar from './components/MobileCtaBar';
import { localBusinessSchema } from './schema';
import { siteData } from './siteData';

export const metadata: Metadata = {
  title: `${siteData.name} | ${siteData.descriptor} in Ridgewood, Queens`,
  description:
    'Interior remodeling in Ridgewood, Queens with a focus on bathrooms, kitchens, tile work, flooring, plaster, painting, cabinets, and other finish-driven upgrades.',
  keywords:
    'interior remodeling Queens NY, bathroom remodeling Ridgewood, kitchen remodeling Queens, tile installation Queens, flooring contractor NYC, cabinet installation Queens',
  authors: [{ name: siteData.name }],
  openGraph: {
    title: `${siteData.name} | ${siteData.descriptor} in Ridgewood, Queens`,
    description:
      'Bathrooms, kitchens, tile, flooring, cabinets, plaster, painting, and interior renovation work across Queens and the NYC area.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4A5440" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-olive-500 text-olive-50">
        <ScrollObserver />
        <Header />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <MobileCtaBar />
        <Footer />
      </body>
    </html>
  );
}
