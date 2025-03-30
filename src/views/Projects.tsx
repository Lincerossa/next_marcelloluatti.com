import Wrapper from '@/components/Wrapper';
import { CardProps } from '@/components/Card/types';
import { FC } from 'react';
import PageHero from '@/components/PageHero';
import ListOfCards from '@/components/ListOfCards';

type ProjectsProps = {
  title: string;
  items: Array<CardProps & { slug: string }>;
};

const Projects: FC<ProjectsProps> = ({ items, title }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <ListOfCards maxCol={2} items={items} />
      </Wrapper>
    </>
  );
};

export default Projects;
