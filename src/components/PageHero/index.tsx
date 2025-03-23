import { FC } from 'react';
import { PageHeroProps } from './types';
const PageHero: FC<PageHeroProps> = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--secondary-color)',
      }}
      className=" min-h-screen flex items-center justify-center">
      <h1 data-content={title} className="text-6xl md:text-[10rem] glitch">
        {title}
      </h1>
    </div>
  );
};

export default PageHero;
