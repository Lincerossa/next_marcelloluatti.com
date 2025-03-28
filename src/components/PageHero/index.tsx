import { FC } from 'react';
import { PageHeroProps } from './types';
import Wrapper from '../Wrapper';
const PageHero: FC<PageHeroProps> = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--secondary-color)',
      }}>
      <Wrapper>
        <div className="bg-color-secondary h-[45vh] relative flex items-start justify-start">
          <h1 data-content={title} className="text-4xl sm:text-6xl glitch">
            {title}
          </h1>
        </div>
      </Wrapper>
    </div>
  );
};

export default PageHero;
