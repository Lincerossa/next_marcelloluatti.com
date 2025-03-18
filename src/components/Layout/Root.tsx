import { PropsWithChildren, FC } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Root layout. magic mouse coming</h1>
      {children}
    </div>
  );
};

export default Layout;
