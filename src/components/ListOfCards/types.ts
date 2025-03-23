import type { CardProps } from "../Card/types";

export type ListOfCardsProps = {
  items: Array<CardProps & { slug: string }>
}