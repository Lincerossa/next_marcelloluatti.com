
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
            src: 'https://via.placeholder.com/150',
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
            src: 'https://via.placeholder.com/150',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
        {
          title: 'Project 3',
          slug: 'first-project',
          description: 'Description 3',
          tags: ['Item 1', 'Item 2', 'Item 3'],
          image: {
            src: 'https://via.placeholder.com/150',
            description: 'Description 1',
            alt: 'Alt 1',
          },
        },
      ]);
    }, 500);
  });
};