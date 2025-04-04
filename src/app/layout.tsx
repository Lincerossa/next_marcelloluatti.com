import MagicMouse from '@/components/MagicMouse';
import type { Metadata } from 'next';
import './global.css';
import { getCategories } from '@/api/getCategories';
import Layout from '@/components/Layout';

// these are the main website metadata, potentially overriden by the single nested page
export const metadata: Metadata = {
  title: 'Marcello Luatti | Frontend Engineer',
  description: 'Innovative and passionate frontend developer',
  keywords: [
    'Marcello Luatti',
    'frontend engineer',
    'web development',
    'React',
    'Next.js',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Marcello Luatti | Frontend Engineer',
    description: 'Passionate front-end engineer',
    images: 'https://avatars.githubusercontent.com/u/16242899?v=4?s=400',
    url: 'https://marcelloluatti.com',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className="font-display">
        <Layout items={categories}>{children}</Layout>
        <MagicMouse />
      </body>
    </html>
  );
}
