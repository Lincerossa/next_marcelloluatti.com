import MagicMouse from '@/components/MagicMouse';
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
        <MagicMouse />
        {children}
      </body>
    </html>
  );
}
