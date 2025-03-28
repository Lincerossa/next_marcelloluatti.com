import Card from '@/components/Card';
import PageBody from '@/components/PageBody';
import PageHero from '@/components/PageHero';
import StoryLine from '@/components/StoryLine';
import type { StoryLineProps } from '@/components/StoryLine/types';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import { FC } from 'react';

type HomeProps = {
  title: string;
  items: StoryLineProps['items'];
  content: string;
};

const Home: FC<HomeProps> = ({ title, items, content }) => (
  <>
    <PageHero title={title} />
    <Wrapper>
      <PageBody content={content} />
    </Wrapper>

    <Wrapper>
      <h2
        style={{
          color: 'var(--secondary-color)',
        }}
        className="text-2xl font-bold mb-4">
        My recent story
      </h2>
      <StoryLine items={items.slice(0, 2)} />
    </Wrapper>
    <div
      style={{ backgroundColor: 'var(--secondary-color)' }}
      className="py-12 flex items-center">
      <Wrapper>
        <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2">
          <Link href={'/projects'}>
            <Card
              title="Projects"
              description="Here a list of my recent works"
              tags={['e-commerce', 'saas', 'cms', 'nextjs', 'bpmn']}
              image={{
                src: 'https://res.cloudinary.com/dmgymopan/image/upload/v1743194810/marcelloluatti.com/photo-1531297484001-80022131f5a1_p6xlcr.avif',
                description: 'description',
                alt: 'alt',
              }}
            />
          </Link>
          <Link href={'/posts'}>
            <Card
              title="Posts"
              description="Here a list of my recent articles"
              tags={['design patterns', 'css', 'javascript']}
              image={{
                src: 'https://res.cloudinary.com/dmgymopan/image/upload/v1743194870/marcelloluatti.com/DALL_E_2025-03-28_21.47.40_-_A_ultra-modern_and_minimalistic_cover_image_for_a_technical_blog._A_dark_cyberpunk-style_workspace_with_a_sleek_futuristic_computer_setup._The_scree_j4ekek.webp',
                description: 'Here a list of my recent articles"',
                alt: 'alt',
              }}
            />
          </Link>
        </div>
      </Wrapper>
    </div>
  </>
);

export default Home;
