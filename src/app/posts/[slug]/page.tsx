import { DynamicParams } from '@/types';

export async function generateStaticParams() {
  // TODO: read from fs at build time
  return [{ slug: 'first-post' }, { slug: 'second-post' }];
}

export default async function Page({ params }: DynamicParams) {
  const { slug } = await params;
  return <h1>TODO: post {slug}</h1>;
}
