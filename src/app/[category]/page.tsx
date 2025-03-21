import { getCategories } from '@/api/getCategories';
import { getPosts } from '@/api/getPosts';
import { getProjects } from '@/api/getProjects';
import PostsPage from '@/containers/Posts';
import ProjectsPage from '@/containers/Projects';
import AboutPage from '@/containers/About';
import type { Category } from '@/types';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

type CategoryPageProps = {
  params: Promise<{ category: Category }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const categories = await getCategories();
  const posts = await getPosts();
  const projects = await getProjects();
  const title = categories.find(({ slug }) => slug === category)?.label ?? '';

  switch (category) {
    case 'projects':
      return (
        <ProjectsPage
          title={title}
          items={projects.map((project) => ({
            ...project,
            slug: `/${category}/${project.slug}`,
          }))}
        />
      );
    case 'posts':
      return (
        <PostsPage
          title={title}
          items={posts.map((post) => ({
            ...post,
            slug: `/${category}/${post.slug}`,
          }))}
        />
      );
    case 'about':
      return <AboutPage title={title} />;
    default:
      return null;
  }
}
