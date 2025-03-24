import { FC } from 'react';
import type { PageBodyProps } from './types';
import MarkDown from '../MarkDown';

const PageBody: FC<PageBodyProps> = ({ description, content, children }) => {
  return (
    <>
      {description && (
        <h2 className="secondary-color font-bold pt-8 text-xl tracking-wide">
          {description}
        </h2>
      )}
      {content && (
        <div className="py-8 text-lg tracking-wide">
          <MarkDown content={content} />
        </div>
      )}
      {children && children}
    </>
  );
};

export default PageBody;
