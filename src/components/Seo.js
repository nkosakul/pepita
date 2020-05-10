import React from 'react';
import { Helmet } from 'react-helmet';
import useStaticMetadata from '../hooks/use-sitemetadata';

const SEO = ({ pageTitle, pageUrl }) => {
  const { title, description, baseUrl } = useStaticMetadata();
  const siteTitle = pageTitle ? `${pageTitle} - ${title}` : title;
  const url = pageUrl ? `${baseUrl}${pageUrl}` : baseUrl;

  return (
    <Helmet>
      <html lang="de" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="generator" content="Gatsby.js"></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta
        name="keywords"
        content="Pepita Bauhardt, Dancer, Choach, Choreographer, Pepita, Pepita Maria Bauhardt, Bauhardt, Berlin, Dance, Videos, Tanz, tanzen"
      ></meta>
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta property="og:site_name" content="Pepita Maria Bauhardt"></meta>
      {/* TODO: add correct favicon */}
      {/* TODO: add image for page */}
      <meta property="og:image" content="1200x630"></meta>
      <meta property="og:locale" content="de_DE"></meta>
      <meta property="og:url" content={url}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      {/* TODO: add image for page */}
      <meta name="twitter:image" content="1200x630"></meta>
      <link rel="canonical" content={url}></link>
    </Helmet>
  );
};

export default SEO;
