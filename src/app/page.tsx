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
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/v1743194750/marcelloluatti.com/DALL_E_2025-03-28_21.45.16_-_A_modern_and_sleek_cover_image_for_a_technical_blog._The_image_features_a_futuristic_high-tech_workspace_with_multiple_screens_displaying_code_data_xf9krj.webp',
            description: 'description',
            alt: 'alt',
          },
        },
      ]}
    />
  );
}
