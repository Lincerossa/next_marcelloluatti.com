
import { Category } from "./type";

export const getCategories: () => Promise<Category[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: 'Projects',
          slug: 'projects',
        },
        {
          label: 'Posts',
          slug: 'posts',
        },
      ]);
    }, 500);
  });
};