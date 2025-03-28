import { getCategories } from '@/api/getCategories';
import SkyContainer from '@/components/Sky';

export default async function Sky() {
  const items = getCategories();
  return <SkyContainer items={items} />;
}
