
import type { Category } from "@/types";

type GetCategories = () => {
  label: string;
  slug: Category
}[]

export const getCategories: GetCategories = () => ([
  {
    label: 'Projects',
    slug: 'projects',
  },
  {
    label: 'Posts',
    slug: 'posts',
  },
])