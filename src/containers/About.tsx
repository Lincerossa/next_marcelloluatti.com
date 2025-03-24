import PageBody from '@/components/PageBody';
import PageHero from '@/components/PageHero';
import StoryLine from '@/components/StoryLine';
import type { StoryLineProps } from '@/components/StoryLine/types';
import Wrapper from '@/components/Wrapper';
import { FC } from 'react';

type AboutProps = {
  title: string;
  items: StoryLineProps['items'];
  content: string;
};

const About: FC<AboutProps> = ({ title, items, content }) => (
  <>
    <PageHero title={title} />
    <Wrapper>
      <PageBody content={content}>
        <StoryLine items={items} />
      </PageBody>
    </Wrapper>
  </>
);

export default About;
