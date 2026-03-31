import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollObserver from './components/ScrollObserver';
import MobileCtaBar from './components/MobileCtaBar';

export const metadata: Metadata = {
  title: 'LOKEIL inc - Interior Remodeling Queens NY',
  description: 'Professional interior remodeling services in Ridgewood, Queens. Kitchen, bathroom, flooring, painting & more.',
  keywords: 'interior remodeling, kitchen remodeling, bathroom remodeling, flooring, painting, Queens NY, Ridgewood',
  authors: [{ name: 'LOKEIL inc' }],
  openGraph: {
    title: 'LOKEIL inc - Interior Remodeling Queens NY',
    description: 'Creating spaces that are comfortable, memorable and inspiring.',
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
      </head>
      <body className="bg-olive-500 text-olive-50">
        <ScrollObserver />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <MobileCtaBar />
        <Footer />
      </body>
    </html>
  );
}
