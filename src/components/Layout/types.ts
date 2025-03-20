export type HeaderProps = {
  items: {
    label: string;
    slug: string;
  }[];
}


export type LayoutProps = HeaderProps


export type MenuItemsProps = Pick<HeaderProps, 'items'> & {
  pathname: string
  initial: boolean
}