export type DynamicParams = {
  params: Promise<{ slug: string }>;
};

export type SvgComponentProps = {
  width: number;
  height: number;
  fill?: string;
  onClick?: VoidFunction;
};
