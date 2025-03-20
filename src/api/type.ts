import type { CardProps } from "@/components/Card/types";

export type Project = CardProps & {
  slug: string;
};

export type Category = {
  label: string;
  slug: string;
};