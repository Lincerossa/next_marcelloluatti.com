import { FC } from 'react';
import { MenuItemsProps } from './types';
import Link from 'next/link';

const MenuItems: FC<MenuItemsProps> = ({ items, pathname, initial }) => {
  return (
    <nav
      aria-label="main menu"
      className="fixed top-0 bottom-0 left-0 right-0 bg-secondary relative">
      <ul className="pl-4 flex gap-6 items-center relative">
        {items.map((e) => {
          const isActive = pathname.includes(e.slug);
          return (
            <li
              key={e.slug}
              className={`
              uppercase text-xl
              tracking-wider
              hover:text-rose-300
              ${isActive ? 'text-rose-500' : initial ? 'text-white' : 'text-black'}
            `}>
              <Link href={`/${e.slug}`}>{e.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuItems;
