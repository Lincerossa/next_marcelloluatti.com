import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
type MarkDownProps = {
  content: string;
};
const MarkDown: FC<MarkDownProps> = ({ content }) => {
  return (
    <ReactMarkdown urlTransform={(uri) => uri.replace('public', '')}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkDown;
