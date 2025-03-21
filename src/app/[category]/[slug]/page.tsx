import { getCategories } from '@/api/getCategories';
import { getPosts } from '@/api/getPosts';
import { getProjects } from '@/api/getProjects';
import PostPage from '@/containers/Post';
import ProjectPage from '@/containers/Project';
import { Category } from '@/types';

export async function generateStaticParams() {
  const categories = await getCategories();
  const posts = await getPosts();
  const projects = await getProjects();

  return categories
    .map((category) => {
      if (category.slug === 'posts') {
        return posts.map((post) => ({
          category: category.slug,
          slug: post.slug,
        }));
      }
      if (category.slug === 'projects') {
        return projects.map((project) => ({
          category: category.slug,
          slug: project.slug,
        }));
      }
    })
    .filter((e) => e !== undefined)
    .flat();
}

type ItemPage = {
  params: Promise<{ category: Category; slug: string }>;
};

export default async function ItemPage({ params }: ItemPage) {
  const { category, slug } = await params;
  const posts = await getPosts();
  const projects = await getProjects();

  switch (category) {
    case 'projects':
      const project = projects.find((project) => project.slug === slug);
      return (
        <ProjectPage title={slug} description={project?.description ?? ''} />
      );
    case 'posts':
      const post = posts.find((project) => project.slug === slug);
      return <PostPage title={slug} description={post?.description ?? ''} />;
    default:
      return null;
  }
}
