import Wrapper from '@/components/Wrapper';
import Card from '@/components/Card';
import Link from 'next/link';
import { CardProps } from '@/components/Card/types';
import { FC } from 'react';
import PageHero from '@/components/PageHero';
import ListOfCards from '@/components/ListOfCards';

type PostsProps = {
  title: string;
  items: Array<CardProps & { slug: string }>;
};

const Posts: FC<PostsProps> = ({ items, title }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <ListOfCards items={items} />
      </Wrapper>
    </>
  );
};

export default Posts;
