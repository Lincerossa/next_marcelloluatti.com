import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
type MarkDownProps = {
  content: string;
};
const MarkDown: FC<MarkDownProps> = ({ content }) => {
  return (
    <div className="react-markdown-section">
      <ReactMarkdown
        components={{
          code: ({ node }) => {
            return (
              <SyntaxHighlighter language="javascript" style={dracula}>
                {(node?.children?.[0] as { value: string })?.value ?? ''}
              </SyntaxHighlighter>
            );
          },
        }}
        urlTransform={(uri) => uri.replace('public', '')}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
