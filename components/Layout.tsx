import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ padding: 20 }}>
      {children}
    </div>
  );
};

export default Layout;
