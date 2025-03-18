import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>TODO: posts</h1>
      {/* TODO: read from fs all the available posts */}
      {[{ slug: 'first-post' }, { slug: 'second-post' }].map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          {post.slug}
        </Link>
      ))}
    </>
  );
}
