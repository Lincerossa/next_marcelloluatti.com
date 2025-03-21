import Wrapper from '@/components/Wrapper';
import Card from '@/components/Card';
import Link from 'next/link';
import { CardProps } from '@/components/Card/types';
import { FC } from 'react';
import PageHero from '@/components/PageHero';

type PostsProps = {
  title: string;
  items: Array<CardProps & { slug: string }>;
};

const Posts: FC<PostsProps> = ({ items, title }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {items.map((item) => (
            <Link key={item.slug} href={item.slug}>
              <Card {...item} />
            </Link>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Posts;
