'use client';
import { FC } from 'react';
import type { CardProps } from './types';
import Image from 'next/image';
import Tags from '../Tags';
import { motion } from 'motion/react';
import { useInViewOnce } from '@/hooks/index';

const Card: FC<CardProps> = ({ title, tags, description, image }) => {
  const [ref, inView] = useInViewOnce({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      style={{ willChange: 'transform, opacity' }}
      className="bg-white block h-full relative rounded-md overflow-hidden transition duration-100 shadow-sm hover:shadow-md"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}>
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
        <div className="mb-3">
          <Tags tags={tags} />
        </div>
        <p className="font-thin text-xs">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
