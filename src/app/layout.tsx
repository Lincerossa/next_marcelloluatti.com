import MagicMouse from '@/components/MagicMouse';
import type { Metadata, Viewport } from 'next';
import './global.css';

// these are the main website metadata, potentially overriden by the single nested page
export const metadata: Metadata = {
  title: 'Marcello Luatti | Frontend Engineer',
  description:
    "Welcome to my website! I'm Marcello Luatti, a 10-year-old boy passionate about technology and programming.",
  keywords: ['Marcello Luatti', 'boy', 'technology', 'programming', 'website'],
  robots: 'index, follow',
  openGraph: {
    title: "Marcello Luatti's Website",
    description:
      "Welcome to my website! I'm Marcello Luatti, a 10-year-old boy passionate about technology and programming.",
    images: 'https://avatars.githubusercontent.com/u/16242899?v=4?s=400',
    url: 'https://marcelloluatti.com',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: 'light',
  width: 'width=device-width,minimum-scale=1,initial-scale=1',
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
      </head>
      <body>
        {children}
        <MagicMouse />
      </body>
    </html>
  );
}
