import { FC } from 'react';
import { MenuItemsProps } from './types';
import Link from 'next/link';

const MenuItems: FC<MenuItemsProps> = ({ items }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-secondary relative">
      <div className="pl-4 flex items-center relative">
        {items.map((e) => (
          <Link key={e.slug} href={`/${e.slug}`}>
            {e.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
