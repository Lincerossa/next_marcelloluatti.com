import { FC } from 'react';

import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';
import PageBody from '@/components/PageBody';

type ProjectProps = {
  title: string;
  description: string;
  content: string;
};

const Project: FC<ProjectProps> = ({ title, description, content }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <PageBody description={description} content={content} />
      </Wrapper>
    </>
  );
};

export default Project;
