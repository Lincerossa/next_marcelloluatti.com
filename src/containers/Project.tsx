import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';

type ProjectProps = {
  title: string;
  description: string;
  content: string;
};

const Project: FC<ProjectProps> = ({ title, description, content }) => {
  return (
    <>
      <PageHero title={title} />
      <Wrapper>
        <div className="py-8 text-xl tracking-wide">{description}</div>
        <div className="blog-section py-8 text-xl tracking-wide">
          <ReactMarkdown urlTransform={(uri) => uri.replace('public', '')}>
            {content}
          </ReactMarkdown>
        </div>
      </Wrapper>
    </>
  );
};

export default Project;
