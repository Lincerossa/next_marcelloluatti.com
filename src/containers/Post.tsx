import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';
import { FC } from 'react';

type PostProps = {
  title: string;
  description: string;
};

const Post: FC<PostProps> = ({ title, description }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <div className="py-8 text-xl tracking-wide">{description}</div>
      </Wrapper>
    </>
  );
};

export default Post;
