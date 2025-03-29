import PageHero from '@/components/PageHero';
import StoryLine from '@/components/StoryLine';
import type { StoryLineProps } from '@/components/StoryLine/types';
import Wrapper from '@/components/Wrapper';
import { FC } from 'react';

type AboutProps = {
  title: string;
  items: StoryLineProps['items'];
};

const About: FC<AboutProps> = ({ title, items }) => (
  <>
    <PageHero title={title} />
    <Wrapper>
      <div className="py-8">
        <StoryLine items={items} />
      </div>
    </Wrapper>
  </>
);

export default About;
