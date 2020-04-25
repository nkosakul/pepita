import React from 'react';
import '../styles/index.scss';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
