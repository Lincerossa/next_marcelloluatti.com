import { PropsWithChildren, FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from './types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, items }) => {
  return (
    <>
      <Header items={items} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
