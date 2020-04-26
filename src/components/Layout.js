import React from 'react';
import '../styles/index.scss';
import Footer from './Footer';

const Layout = ({ children, showFooterHeading }) => {
  return (
    <>
      {children}
      <Footer showFooterHeading={showFooterHeading} />
    </>
  );
};

export default Layout;
