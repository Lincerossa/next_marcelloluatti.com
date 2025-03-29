'use client';
import { FC, useEffect, useState } from 'react';
import { ReaderProps } from './types';

const VerticalBar = () => <span className="text-rose-500">|</span>;

const Reader: FC<ReaderProps> = ({ text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= text.length) {
        return;
      }
      setCount((count) => count + 1);
    }, 75);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      {text.slice(0, count)}
      {count < text.length ? <VerticalBar /> : ''}
    </>
  );
};

export default Reader;
