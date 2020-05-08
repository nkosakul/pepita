import React from 'react';
import { Helmet } from 'react-helmet';
import useStaticMetadata from '../hooks/use-sitemetadata';

const SEO = ({ pageTitle, pageDescription, pageUrl }) => {
  const { title, description } = useStaticMetadata();
  const siteTitle = pageTitle ? `${pageTitle} - ${title}` : title;
  const siteDescription = pageDescription || description;

  return (
    <Helmet>
      <html lang="de" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={siteDescription} />
      <meta name="og:type" content="website" />
      <meta name="generator" content="Gatsby.js"></meta>
      <meta name="robots" content="index, follow"></meta>
      {/* TODO: add correct favicon */}
      {/* TODO: add image for page */}
      <meta property="og:image" content="1200x630"></meta>
      <meta property="og:locale" content="de"></meta>
      <meta property="og:url" content={pageUrl}></meta>
      <link rel="canonical" content={pageUrl}></link>
    </Helmet>
  );
};

export default SEO;
