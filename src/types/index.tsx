export type SvgComponentProps = {
  width: number;
  height: number;
  fill?: string;
};

export type Category = 'posts' | 'projects' | 'about';

export type Project = {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  shortDescription: string;
  content: string;
  image: {
    src: string;
    description?: string;
    alt?: string;
  };
};

export type Post = {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  shortDescription: string;
  content: string;
  image: {
    src: string;
    description?: string;
    alt?: string;
  };
};
