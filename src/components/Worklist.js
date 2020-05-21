import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const Worklist = ({ props }) => {
  const sectionEl = useRef(null);
  const contextEl = useRef(null);

  const data = useStaticQuery(graphql`
    query {
      allContentfulWork(
        sort: { fields: [date], order: DESC }
        filter: { slug: { ne: "example-work" } }
      ) {
        nodes {
          id
          slug
          createPage
          externalUrl
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

  function scrollAnimation() {
    if (contextEl.current) {
      let opacity = 0.2;
      const scrollPosTop = contextEl.current.scrollTop / 500;
      const actualOpacity = opacity + scrollPosTop;

      if (scrollPosTop > 0 && actualOpacity <= 0.5) {
        sectionEl.current.style.backgroundColor = `rgba(0, 0, 0, ${
          0.2 + scrollPosTop
        })`;
      } else if (scrollPosTop > 0 && actualOpacity > 0.5) {
        sectionEl.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      } else if (scrollPosTop <= 0) {
        sectionEl.current.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      }
    }
  }

  useEffect(() => {
    scrollAnimation();

    const contextDiv = contextEl.current;
    contextDiv && contextDiv.addEventListener('scroll', scrollAnimation);

    // cleanUp if compoenent gets destroys
    return () => {
      contextDiv && contextDiv.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  return (
    <BackgroundImage
      Tag="section"
      className="worklist"
      data-header
      fluid={props.image.fluid}
    >
      <h1 className="sr-only">{props.title}</h1>
      <div
        className="worklist__wrapper"
        ref={sectionEl}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <div className="worklist__inner" ref={contextEl}>
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
                          <div className="worklist__teaser">
                            <h3 className="worklist__teaser-title">
                              {item.pageTitle}
                            </h3>
                            <p className="worklist__teaser-text">
                              {item.teasertext.teasertext}
                            </p>
                            <p className="worklist__teaser-tag">{item.role}</p>

                            {item.createPage && (
                              <Link to={item.slug} className="worklist__link">
                                More Details
                                <i
                                  className="icon-chevron-right"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            )}

                            {!item.createPage && item.externalUrl && (
                              <a
                                href={item.externalUrl}
                                className="worklist__link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                More Details
                                <i
                                  className="icon-chevron-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            )}
                          </div>
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
