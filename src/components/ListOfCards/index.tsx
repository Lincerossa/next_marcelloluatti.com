import { FC } from 'react';
import { ListOfCardsProps } from './types';
import Link from 'next/link';
import Card from '../Card';

const ListOfCards: FC<ListOfCardsProps> = ({ items, cols = [1, 2, 3] }) => {
  return (
    <div
      className={`grid grid-cols-${cols[0]} sm:grid-cols-${cols[1]} md:grid-cols-${cols[2]} gap-8 py-8`}>
      {items.map((item) => (
        <Link key={item.slug} href={item.slug}>
          <Card {...item} />
        </Link>
      ))}
    </div>
  );
};

export default ListOfCards;
