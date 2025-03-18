import Layout from '@/components/Layout/Nested';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marcello Luatti | Frontend Engineer',
  description: 'Welcome to Next.js',
};

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
