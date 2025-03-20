import PageHero from '@/components/PageHero';
import { DynamicParams } from '@/types';

export async function generateStaticParams() {
  // TODO: read from fs at build time
  return [{ slug: 'first-post' }, { slug: 'second-post' }];
}

export default async function Page({ params }: DynamicParams) {
  const { slug } = await params;
  return <PageHero title={`Post: ${slug}`} />;
}
