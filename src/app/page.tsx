import { getStoryline } from '@/api/getStoryline';
import HomePage from '@/views/Home';

export default async function Page() {
  const about = await getStoryline();

  return (
    <HomePage
      title="Hi! My name is Marcello"
      content={about.content}
      items={[
        {
          title: 'Projects',
          slug: '/projects',
          description: 'Here a list of my recent works',
          tags: ['e-commerce', 'saas', 'cms', 'nextjs', 'bpmn'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/v1743194810/marcelloluatti.com/photo-1531297484001-80022131f5a1_p6xlcr.avif',
            description: 'description',
            alt: 'alt',
          },
        },
        {
          title: 'Posts',
          slug: '/posts',
          description: 'Here a list of my recent articles',
          tags: ['design patterns', 'css', 'javascript'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/v1743194810/marcelloluatti.com/photo-1531297484001-80022131f5a1_p6xlcr.avif',
            description: 'description',
            alt: 'alt',
          },
        },
      ]}
    />
  );
}
