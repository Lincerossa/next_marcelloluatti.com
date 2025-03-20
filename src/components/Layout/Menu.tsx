'use client';

import { FC, useEffect, useState } from 'react';
import type { MenuProps, MenuItemsProps } from './types';
import Link from 'next/link';
import Hamburger from './Hamburger';
import Close from './Close';
import { useIsMobile } from '@/hooks';

const MenuItems: FC<MenuItemsProps> = ({ items, pathname, initial, mode }) => (
  <ul
    className={`flex ${mode === 'mobile' ? 'flex-col' : 'flex-row'} gap-6 items-center relative`}>
    {items.map((e) => (
      <li
        key={e.slug}
        className={`
          uppercase 
          tracking-wider
           ${mode === 'mobile' ? 'text-3xl' : 'text-xl'}
          hover:text-rose-600
          ${pathname.includes(e.slug) ? 'text-rose-500' : initial ? 'text-white' : 'text-black'}
        `}>
        <Link href={`/${e.slug}`}>{e.label}</Link>
      </li>
    ))}
  </ul>
);

const Mobile: FC<MenuProps> = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.getElementsByTagName('html')[0].style.overflowY =
        isMenuOpen ? 'hidden' : 'visible';
    }
  }, [isMenuOpen]);
  return (
    <>
      <Hamburger
        onClick={() => setMenuOpen(!isMenuOpen)}
        width={40}
        height={40}
        fill={props.initial ? 'white' : '#ff2056'}
      />
      {isMenuOpen && (
        <div className="bg-[rgb(43,46,74)] fixed inset-0 flex justify-center items-center">
          <div className="absolute top-4 right-4">
            <Close
              onClick={() => setMenuOpen(!isMenuOpen)}
              width={40}
              height={40}
              fill={props.initial ? 'white' : '#ff2056'}
            />
          </div>
          <MenuItems {...props} mode="mobile" />
        </div>
      )}
    </>
  );
};

const Desktop: FC<MenuProps> = (props) => {
  return (
    <nav
      aria-label="main menu"
      className="hidden md:block fixed top-0 bottom-0 left-0 right-0 bg-secondary relative">
      <MenuItems {...props} mode="desktop" />
    </nav>
  );
};

const Menu: FC<MenuProps> = (props) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <Mobile {...props} />;
  }
  return <Desktop {...props} />;
};

export default Menu;
