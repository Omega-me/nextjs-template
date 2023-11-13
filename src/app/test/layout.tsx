import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>this is test page header</div>
      {children}
      <div>this is test page footer</div>
    </div>
  );
};

export default layout;
