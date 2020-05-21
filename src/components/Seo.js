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
      <meta
        property="og:image"
        content={`${baseUrl}images/social-media.png`}
      ></meta>
      <meta property="og:locale" content="de_DE"></meta>
      <meta property="og:url" content={url}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta
        name="twitter:image"
        content={`${baseUrl}images/social-media.png`}
      ></meta>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-57.png" sizes="57x57" />
      <link rel="icon" type="image/png" href="/favicon-76.png" sizes="76x76" />
      <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96" />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-128.png"
        sizes="128x128"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-228.png"
        sizes="228x228"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/favicon-196.png"
        sizes="196x196"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/favicon-120.png"
        sizes="120x120"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/favicon-152.png"
        sizes="152x152"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/favicon-180.png"
        sizes="180x180"
      />
      <link rel="canonical" content={url}></link>
    </Helmet>
  );
};

export default SEO;
