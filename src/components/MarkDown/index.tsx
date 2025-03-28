import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
type MarkDownProps = {
  content: string;
};

const MarkDown: FC<MarkDownProps> = ({ content }) => {
  return (
    <div className="react-markdown-section">
      <ReactMarkdown
        components={{
          code: ({ node }) => (
            <SyntaxHighlighter language="javascript" style={dracula}>
              {(node?.children?.[0] as { value: string })?.value ?? ''}
            </SyntaxHighlighter>
          ),
          img: ({ node }) => (
            <Image
              layout="responsive"
              className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800"
              unoptimized
              width={500}
              height={500}
              {...(node?.properties as { src: string; alt: string })}
            />
          ),
          a: ({ node }) => (
            <Link
              href={node?.properties?.href as string}
              className="text-rose-500 hover:text-rose-600">
              {(node?.children?.[0] as { value: string })?.value ?? ''}
            </Link>
          ),
        }}
        urlTransform={(uri) => uri.replace('public', '')}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
