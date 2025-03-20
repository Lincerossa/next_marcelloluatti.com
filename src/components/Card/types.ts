export type CardProps = {
  title: string;
  tags: string[];
  description: string;
  type?: 'project' | 'post';
  image: {
    src: string
    description?: string
    alt?: string
  }
};
