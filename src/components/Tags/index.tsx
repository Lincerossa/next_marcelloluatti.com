import { FC } from 'react';

type TagsProps = {
  tags: string[];
};
const Tags: FC<TagsProps> = ({ tags }) => (
  <ul className="flex">
    {tags.map((tag) => (
      <li
        key={tag}
        className="mr-4 text-[0.625rem] font-bold uppercase red-dot relative">
        {tag}
      </li>
    ))}
  </ul>
);

export default Tags;
