import { getCategories } from '@/api/getCategories';
import HomePage from '@/containers/Home';

export default async function Page() {
  const categories = await getCategories();
  return <HomePage items={categories} />;
}
