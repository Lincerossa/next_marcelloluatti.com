import { FC } from 'react';
import { ListOfCardsProps } from './types';
import Link from 'next/link';
import Card from '../Card';

const ListOfCards: FC<ListOfCardsProps> = ({ items, maxCol = 3 }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${maxCol === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 py-8`}>
      {items.map((item) => (
        <Link key={item.slug} href={item.slug}>
          <Card {...item} />
        </Link>
      ))}
    </div>
  );
};

export default ListOfCards;
