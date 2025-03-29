'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { MenuProps, MenuItemsProps } from './types';
import Link from 'next/link';
import Hamburger from './Hamburger';
import Close from './Close';
import { useIsMobile } from '@/hooks';

const MenuItems: FC<MenuItemsProps> = ({ items, pathname, initial, mode }) => (
  <ul
    className={`flex ${mode === 'mobile' ? 'flex-col' : 'flex-row'} gap-6 items-center relative`}>
    {items.map((e) => (
      <li key={e.slug}>
        <Link
          className={`
            uppercase
            tracking-wider
            ${mode === 'mobile' ? 'text-3xl' : 'text-xl'}
            hover:text-rose-600
            ${
              pathname.includes(e.slug)
                ? 'text-rose-500'
                : initial
                  ? 'text-white'
                  : 'text-black'
            }
        `}
          href={`/${e.slug}`}>
          {e.label}
        </Link>
      </li>
    ))}
  </ul>
);

const Mobile: FC<MenuProps> = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.getElementsByTagName('html')[0].style.overflowY =
        isMenuOpen ? 'hidden' : 'visible';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <Link href="#" onClick={() => setMenuOpen(!isMenuOpen)}>
        <Hamburger
          width={40}
          height={40}
          fill={props.initial ? 'white' : 'var(--primary-color)'}
        />
      </Link>
      {isMenuOpen && (
        <div
          style={{ backgroundColor: 'var(--secondary-color)' }}
          className="fixed inset-0 flex justify-center items-center">
          <div className="absolute top-4 right-4">
            <Link
              href="#"
              onClick={() => setMenuOpen(!isMenuOpen)}
              autoFocus={isMenuOpen}>
              <Close
                width={40}
                height={40}
                fill={props.initial ? 'white' : 'var(--primary-color)'}
              />
            </Link>
          </div>
          <MenuItems {...props} mode="mobile" />
        </div>
      )}
    </>
  );
};

const Menu: FC<MenuProps> = (props) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <nav aria-label="main menu" className="block md:hidden">
        <Mobile {...props} />
      </nav>
    );
  }
  return (
    <nav aria-label="main menu" className="hidden md:block">
      <MenuItems {...props} mode="desktop" />
    </nav>
  );
};

export default Menu;
