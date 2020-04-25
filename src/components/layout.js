import React from 'react';
import '../styles/index.scss';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
