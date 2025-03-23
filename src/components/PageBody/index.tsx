import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import type { PageBodyProps } from './types';

const PageBody: FC<PageBodyProps> = ({ description, content, children }) => {
  return (
    <>
      {description && (
        <div className="py-8 text-xl tracking-wide">{description}</div>
      )}
      {content && (
        <div className="react-markdown-section py-8 text-xl tracking-wide">
          <ReactMarkdown urlTransform={(uri) => uri.replace('public', '')}>
            {content}
          </ReactMarkdown>
        </div>
      )}
      {children && children}
    </>
  );
};

export default PageBody;
