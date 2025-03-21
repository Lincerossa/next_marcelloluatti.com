import { Post } from "@/types";

type GetPostsProps = () => Promise<Post[]>
export const getPosts: GetPostsProps = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'post 1',
          slug: 'first-post',
          description: 'Description 1',
          shortDescription: 'Description',
          content: 'lorem ipsum',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'post 2',
          slug: 'second-post',
          description: 'Description 2',
          shortDescription: 'Description',
          content: 'lorem ipsum',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'post 3',
          slug: 'third-post-3',
          shortDescription: 'Description',
          content: 'lorem ipsum',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'post 4',
          slug: 'fourth-post',
          description: 'Description 4',
          shortDescription: 'Description',
          content: 'lorem ipsum',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1', 
          }
        },
        {
          title: 'post 5',
          slug: 'fifth-post',
          description: 'Description 5',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          shortDescription: 'Description',
          content: 'lorem ipsum',
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1', 
          }
        },
     
      ]);
    }, 500);
  });
};