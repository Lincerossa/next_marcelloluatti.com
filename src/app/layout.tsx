import Layout from '@/components/Layout/Root';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/styles/global';

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
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
