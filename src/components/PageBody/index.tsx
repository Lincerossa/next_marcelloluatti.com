import { FC } from 'react';
import type { PageBodyProps } from './types';
import MarkDown from '../MarkDown';

const PageBody: FC<PageBodyProps> = ({ description, content, children }) => {
  return (
    <>
      {description && (
        <div className="py-8 text-xl tracking-wide">{description}</div>
      )}
      {content && (
        <div className="py-8 text-xl tracking-wide">
          <MarkDown content={content} />
        </div>
      )}
      {children && children}
    </>
  );
};

export default PageBody;
