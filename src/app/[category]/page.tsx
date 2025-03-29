import { getCategories } from '@/api/getCategories';
import { getPosts } from '@/api/getPosts';
import { getProjects } from '@/api/getProjects';
import { getStoryline } from '@/api/getStoryline';
import PostsPage from '@/pages/Posts';
import ProjectsPage from '@/pages/Projects';
import AboutPage from '@/pages/About';
import type { Category } from '@/types';

export async function generateStaticParams() {
  const categories = await getCategories();
  return [
    ...categories.map((category) => ({
      category: category.slug,
    })),
    {
      category: 'admin',
    },
  ];
}

type CategoryPageProps = {
  params: Promise<{ category: Category }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const categories = await getCategories();
  const posts = await getPosts();
  const projects = await getProjects();
  const storyline = await getStoryline();
  const categoryTitle =
    categories.find(({ slug }) => slug === category)?.label ?? '';

  switch (category) {
    case 'projects':
      return (
        <ProjectsPage
          title={categoryTitle}
          items={projects.map((project) => ({
            ...project,
            slug: `/${category}/${project.slug}`,
          }))}
        />
      );
    case 'posts':
      return (
        <PostsPage
          title={categoryTitle}
          items={posts.map((post) => ({
            ...post,
            slug: `/${category}/${post.slug}`,
          }))}
        />
      );
    case 'about':
      return (
        <AboutPage
          title={categoryTitle}
          items={storyline.items}
          content={storyline.content}
        />
      );

    default:
      return null;
  }
}
