
import type { Category } from "@/types";

type GetCategoriesProps = () => Promise<{
  label: string;
  slug: Category
}[]>

export const getCategories: GetCategoriesProps = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: 'About',
          slug: 'about',
        },
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