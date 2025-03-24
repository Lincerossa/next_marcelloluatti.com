import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
type MarkDownProps = {
  content: string;
};
const MarkDown: FC<MarkDownProps> = ({ content }) => {
  return (
    <div className="react-markdown-section">
      <ReactMarkdown urlTransform={(uri) => uri.replace('public', '')}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
