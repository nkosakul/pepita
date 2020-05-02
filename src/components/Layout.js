import React from 'react';
import '../styles/index.scss';
import Header from './Header';
import Footer from './Footer';
require('focus-visible');

const Layout = ({ children, showFooterHeading }) => {
  return (
    <>
      <Header />
      {children}
      <Footer showFooterHeading={showFooterHeading} />
    </>
  );
};

export default Layout;
