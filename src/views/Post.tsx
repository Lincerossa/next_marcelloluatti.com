import { FC } from 'react';

import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';
import PageBody from '@/components/PageBody';

type PostProps = {
  title: string;
  description: string;
  content: string;
};

const Post: FC<PostProps> = ({ title, description, content }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <PageBody description={description} content={content} />
      </Wrapper>
    </>
  );
};

export default Post;
