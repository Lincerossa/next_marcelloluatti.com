import Layout from '@/components/Layout/Root';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Marcello Luatti | Frontend Engineer',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Layout>{children}</Layout>
      </body>
    </html>
  );
}
