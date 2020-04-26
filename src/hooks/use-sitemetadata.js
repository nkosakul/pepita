import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          email
          facebook
          instagram
          youtube
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
