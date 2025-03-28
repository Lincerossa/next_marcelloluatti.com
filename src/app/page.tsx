import { getAbout } from '@/api/getAbout';
import HomePage from '@/containers/Home';

export default async function Page() {
  const about = await getAbout();

  return (
    <HomePage
      title="Hi! 👋 My name is Marcello"
      items={about.items}
      content={about.content}
    />
  );
}
