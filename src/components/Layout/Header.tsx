'use client';

import { FC, useEffect, useState } from 'react';
import { HeaderProps } from './types';
import Link from 'next/link';
import MenuItems from './MenuItems';

const Header: FC<HeaderProps> = ({ items }) => {
  const [{ initial, direction }, setScrollStatus] = useState({
    position: 0,
    initial: true,
    direction: 'up',
  });
  function handleGetDirection() {
    setScrollStatus((prevState) => ({
      position: window.scrollY,
      initial: window.scrollY < 250,
      direction:
        window.scrollY > prevState.position && window.scrollY > 600
          ? 'down'
          : 'up',
    }));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleGetDirection, false);
    return () => {
      window.removeEventListener('scroll', handleGetDirection, false);
    };
  }, []);

  const activeSlug = 'projects';

  return (
    <header
      className={`
        fixed top-0 right-0 left-0 z-3
        flex justify-between
        w-full
        h-20
        items-center
        transition duration-200 ease-in
        bg-transparent md:bg-white-900
        shadow-none md:shadow-md
        ${initial ? '' : 'bg-opacity-90'}
        ${direction === 'down' ? '-translate-y-full' : ''}
      `}>
      <Link href="/" as="/">
        <h2>add logo</h2>
      </Link>
      <MenuItems items={items} activeSlug={activeSlug} />
    </header>
  );
};

export default Header;
