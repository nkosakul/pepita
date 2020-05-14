import React from 'react';
import loadable from '@loadable/component';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    allDataJson {
      nodes {
        heading
        id
        showHeading
        __typename
        youtubeUrl
        name
      }
    }
  }
`;

export default ({ data: { allDataJson: page } }) => {
  return (
    <>
      {page.nodes.map((element) => {
        const Component = loadable(() =>
          import(`../components/${element.name}`)
        );

        return <Component props={element} key={element.id} />;
      })}
    </>
  );
};
