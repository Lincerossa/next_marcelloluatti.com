export type HeaderProps = {
  items: {
    label: string;
    slug: string;
  }[];
}


export type LayoutProps = HeaderProps


export type MenuProps = Pick<HeaderProps, 'items'> & {
  pathname: string
  initial: boolean
}

export type MenuItemsProps = MenuProps & {
  mode: 'desktop' | 'mobile'
}