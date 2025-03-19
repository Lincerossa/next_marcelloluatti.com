import Layout from '@/components/Layout';
import { getLayoutData } from '@/utils';

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { items } = await getLayoutData();

  return <Layout items={items}>{children}</Layout>;
}
