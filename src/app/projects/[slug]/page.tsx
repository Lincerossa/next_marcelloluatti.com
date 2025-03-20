import { getProjects } from '@/api/getProjects';
import type { Project } from '@/api/type';
import PageHero from '@/components/PageHero';
import { DynamicParams } from '@/types';

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Project({ params }: DynamicParams) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((project) => project.slug === slug);
  return <PageHero title={project?.title ?? ''} />;
}
