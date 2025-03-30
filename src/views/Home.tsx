import { CardProps } from '@/components/Card/types';
import ListOfCards from '@/components/ListOfCards';
import MarkDown from '@/components/MarkDown';
import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';
import { FC } from 'react';

type HomeProps = {
  title: string;
  content: string;
  items: Array<CardProps & { slug: string }>;
};

const Home: FC<HomeProps> = ({ title, content, items }) => (
  <>
    <PageHero title={title} />
    <Wrapper>
      <div className="py-6 md:py-16 text-xl md:text-3xl tracking-loose leading-relaxed">
        <MarkDown content={content} />
      </div>
    </Wrapper>

    <div className="py-4 md:py-12 flex items-center bg-gray-100">
      <Wrapper>
        <ListOfCards items={items} maxCol={2} />
      </Wrapper>
    </div>
  </>
);

export default Home;
