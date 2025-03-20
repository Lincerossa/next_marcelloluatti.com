import { FC } from 'react';
import type { CardProps } from './types';

const Card: FC<CardProps> = ({ title, tags, description, type, image }) => {
  console.log(image.src);
  return (
    <div className="bg-white block h-full relative rounded-md overflow-hidden transition duration-100 shadow-sm hover:shadow-md">
      title:{title}
      tags:{tags.map((e) => e)}
      description:{description}
      type:{type}
    </div>
  );
};

export default Card;
