import type { Metadata, Viewport } from 'next';
import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oliver Pryce | Portfolio',
  description: 'Personal portfolio website showcasing software projects and experience',
  keywords: ['Oliver Pryce', 'portfolio', 'software developer', 'web developer'],
  authors: [{ name: 'Oliver Pryce' }],
  openGraph: {
    title: 'Oliver Pryce | Portfolio',
    description: 'Personal portfolio website showcasing software projects and experience',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliver Pryce | Portfolio',
    description: 'Personal portfolio website showcasing software projects and experience',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Oliver Pryce
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
