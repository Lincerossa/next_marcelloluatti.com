import { FC } from 'react';
import { PageHeroProps } from './types';
import Wrapper from '../Wrapper';
import Reader from '../Reader';
const PageHero: FC<PageHeroProps> = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--secondary-color)',
      }}>
      <Wrapper>
        <div className="h-[45vh] relative flex items-center">
          <h1 className="text-4xl font-bold sm:text-6xl text-white tracking-wide">
            <Reader text={title} />
          </h1>
        </div>
      </Wrapper>
    </div>
  );
};

export default PageHero;
