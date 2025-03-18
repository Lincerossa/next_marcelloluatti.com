import { PropsWithChildren, FC } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      TODO: nested layout (menu and footer)
      {children}
    </div>
  );
};

export default Layout;
