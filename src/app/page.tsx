import { getAbout } from '@/api/getAbout';
import AboutPage from '@/containers/About';

export default async function Page() {
  const about = await getAbout();

  return (
    <AboutPage
      title="I am Marcello Luatti"
      items={about.items}
      content={about.content}
    />
  );
}
