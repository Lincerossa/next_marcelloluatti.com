import PageHero from '@/components/PageHero';
import Wrapper from '@/components/Wrapper';
import Card from '@/components/Card';
import Link from 'next/link';
import { getProjects } from '@/api/getProjects';

export default async function Projects() {
  const projects = await getProjects();

  const cards = projects.map((project) => ({
    ...project,
    slug: `/projects/${project.slug}`,
  }));

  return (
    <div className="mb-2">
      <PageHero title="Projects" />
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {cards.map((card) => (
            <Link key={card.slug} href={card.slug}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
