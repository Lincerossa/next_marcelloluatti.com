
import type { Category } from "@/types";

type GetCategoriesProps = () => {
  label: string;
  slug: Category
}[]

export const getCategories: GetCategoriesProps = () => ([
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
])