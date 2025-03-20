
import { Project } from "./type";

export const getProjects: () => Promise<Project[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'Project 1',
          slug: 'first-project',
          description: 'Description 1',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 2',
          slug: 'second-project',
          description: 'Description 2',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 3',
          slug: 'first-project-3',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 1',
          slug: 'first-project-4',
          description: 'Description 1',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 2',
          slug: 'second-project-5',
          description: 'Description 2',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 3',
          slug: 'first-project-6',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 1',
          slug: 'first-project-7',
          description: 'Description 1',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 2',
          slug: 'second-project-8',
          description: 'Description 2',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 3',
          slug: 'first-project-9',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 1',
          slug: 'first-project-10',
          description: 'Description 1',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 2',
          slug: 'second-project-11',
          description: 'Description 2',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 3',
          slug: 'first-project-12',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
      ]);
    }, 500);
  });
};