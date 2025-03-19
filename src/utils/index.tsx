export const getLayoutData = async () => {
  // TODO: read from fs at build time
  return {
    items: [
      {
        label: 'Projects',
        slug: 'projects',
      },
      {
        label: 'Posts',
        slug: 'posts',
      },
    ],
  };
};
