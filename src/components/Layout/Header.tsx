'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderProps } from './types';
import Link from 'next/link';
import Menu from './Menu';
import Logo from './Logo';
import Wrapper from '../Wrapper';
const Header: FC<HeaderProps> = ({ items }) => {
  const pathname = usePathname();
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

  return (
    <header
      className={`
        fixed top-0 right-0 left-0 z-3
        flex justify-between
        w-full
        items-center
        transition duration-200 ease-in
        ${initial ? 'bg-transparent' : 'bg-white md:shadow-md opacity-90'}
        ${direction === 'down' ? '-translate-y-full' : ''}
        z-11
      `}>
      <Wrapper>
        <div
          className={`
          flex
          items-center
          justify-between
          ${initial ? 'text-white' : 'text-rose-500'}
        `}>
          <Link href="/">
            <Logo width={80} height={80} fill={initial ? 'white' : 'auto'} />
          </Link>
          <Menu pathname={pathname} items={items} initial={initial} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
