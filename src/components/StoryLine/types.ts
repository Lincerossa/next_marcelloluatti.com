export type StoryLineProps = {
  items: Array<{
    role: string;
    date: string;
    company: string
    description: string;
    image: {
      src: string;
      alt: string;
    }; 
  }>
};