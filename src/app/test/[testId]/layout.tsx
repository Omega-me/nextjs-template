import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Test details page',
  description: 'This is my test app',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>This test details page header</div>
      {children}
      <div>This test details page footert</div>
    </div>
  );
};

export default layout;
