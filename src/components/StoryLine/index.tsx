import { FC } from 'react';
import type { StoryLineProps } from './types';
import Image from 'next/image';

const StoryLine: FC<StoryLineProps> = ({ items }) => {
  return (
    <ol className="tracking-wide mx-2 relative border-s border-gray-200 dark:border-gray-700">
      {items.map(({ role, company, date, description, image }) => (
        <li className="mb-10 ms-6" key={date}>
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Image
              className="rounded"
              unoptimized
              src={image?.src ?? ''}
              alt={image?.alt ?? ''}
              width={1000}
              height={1000}
            />
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {role}
          </h3>
          <h3 className="mb-1 text-sm text-gray-900 dark:text-white">
            {company}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {date}
          </time>
          <p className="mb-4 text-base font-normal  dark:text-gray-400">
            {description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default StoryLine;
