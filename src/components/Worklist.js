import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const Worklist = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWork(
        sort: { fields: [createdAt], order: ASC }
        filter: { slug: { ne: "example-work" } }
      ) {
        nodes {
          id
          slug
          date
          pageTitle
          role
          teasertext {
            teasertext
          }
        }
      }
    }
  `);

  let allYears = [];
  data.allContentfulWork.nodes.map((item) =>
    // Step 1: get the year of each work and push them into an array
    allYears.push(new Date(item.date).getFullYear())
  );

  // Step 2: remove the duplicates
  const workSections = [...new Set(allYears)];

  return (
    <BackgroundImage
      Tag="section"
      className="worklist"
      data-header
      fluid={props.image.fluid}
    >
      <h1 className="sr-only">{props.title}</h1>
      <div className="worklist__wrapper">
        <div className="worklist__inner">
          <ol className="worklist__list">
            {workSections.map((workSection, index) => (
              <li
                className="worklist__list-item"
                key={`${workSection}-${index}`}
              >
                <h2 className="worklist__subtitle">{workSection}</h2>
                <ol>
                  {data.allContentfulWork.nodes.map((item) => {
                    const itemYear = new Date(item.date).getFullYear();
                    return (
                      workSection === itemYear && (
                        <li key={item.date}>
                          <Link to={item.slug} className="worklist__teaser">
                            <h3 className="worklist__teaser-title">
                              {item.pageTitle}
                            </h3>
                            <p className="worklist__teaser-text">
                              {item.teasertext.teasertext}
                            </p>
                            <p className="worklist__teaser-tag">{item.role}</p>
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Worklist;
