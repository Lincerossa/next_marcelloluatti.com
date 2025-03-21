import { getCategories } from '@/api/getCategories';
import Layout from '@/components/Layout';

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return <Layout items={categories}>{children}</Layout>;
}
