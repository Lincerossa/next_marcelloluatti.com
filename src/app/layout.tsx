import MagicMouse from '@/components/MagicMouse';
import type { Metadata, Viewport } from 'next';
import './global.css';

// these are the main website metadata, potentially overriden by the single nested page
export const metadata: Metadata = {
  title: 'Marcello Luatti | Frontend Engineer',
  description: 'Innovative and passionate frontend developer',
  keywords: [
    'Marcello Luatti',
    'frontend engineer',
    'web development',
    'technology',
    'programming',
  ],
  robots: 'index, follow',
  openGraph: {
    title: "Marcello Luatti's Website",
    description: 'Passionate front-end engineer',
    images: 'https://avatars.githubusercontent.com/u/16242899?v=4?s=400',
    url: 'https://marcelloluatti.com',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: 'light',
  width: '100vw',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className="font-display">
        {children}
        <MagicMouse />
      </body>
    </html>
  );
}
