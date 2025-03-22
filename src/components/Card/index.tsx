import { FC } from 'react';
import type { CardProps } from './types';
import Image from 'next/image';

const Card: FC<CardProps> = ({ title, tags, description, image }) => {
  return (
    <div className="bg-white block h-full relative rounded-md overflow-hidden transition duration-100 shadow-sm hover:shadow-md">
      <div className='pt-100 overflow-hidden relative before:absolute before:content-[""] before:bg-gradient-to-t before:from-black before:to-transparent before:bottom-0 before:right-0 before:left-0 before:top-0 before:z-10'>
        <Image
          className="block w-full h-full max-w-full max-h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
          src={image?.src ?? ''}
          alt={image?.alt ?? ''}
          unoptimized
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-4 absolute bottom-0 text-white z-10">
        <div className="tracking-wide text-3xl font-light leading-tight mb-1 text-white">
          {title}
        </div>
        <ul className="flex mb-3">
          {tags.map((tag) => (
            <li
              key={tag}
              className="mr-4 text-[0.625rem] font-bold uppercase red-dot relative">
              {tag}
            </li>
          ))}
        </ul>
        <p className="font-thin text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Card;
