import { Project } from "@/types";

type GetProjectsProps = () => Promise<Project[]>
export const getProjects: GetProjectsProps = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'Project 1',
          slug: 'first-project',
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
          title: 'Project 2',
          slug: 'second-project',
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
          title: 'Project 3',
          slug: 'third-project-3',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          shortDescription: 'Description',
          content: 'lorem ipsum',
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 4',
          slug: 'fourth-project',
          description: 'Description 4',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          shortDescription: 'Description',
          content: 'lorem ipsum',
          image: {
            src: 'https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1620935738/marcelloluatti.com/Screenshot_2021-05-13_at_21.55.16_acgcmk.png',
            description: 'Description 1',
            alt: 'Alt 1', 
          }
        },
        {
          title: 'Project 5',
          slug: 'fifth-project',
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