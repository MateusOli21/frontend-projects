import React from 'react';

import { Header } from '../modules/Header';

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
