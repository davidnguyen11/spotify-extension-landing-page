import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { META_DESCRIPTION } from '@/utils/constants';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spotit.page'),
  title: 'Spotit - A music extension compatible with Spotify',
  description: META_DESCRIPTION,
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    images: [{ url: '/spotit-logo.png' }],
  },
  twitter: {
    images: [{ url: '/spotit-logo.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
