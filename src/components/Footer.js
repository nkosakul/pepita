import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = ({ showFooterHeading = false }) => {
  const { title, email, facebook, instagram, youtube } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {
      pages: allContentfulPage(sort: { fields: [createdAt], order: ASC }) {
        nodes {
          slug
          pageTitle
          showInFooter
        }
      }
    }
  `);

  return (
    <footer
      className={`footer ${showFooterHeading && 'footer--large-space'}`}
      itemType="http://schema.org/WPFooter"
      itemScope
    >
      {showFooterHeading && <h2 className="section-heading">Get in Touch</h2>}
      <a className="footer__email" href={`mailto:${email}`}>
        {email}
      </a>

      <ul className="footer__socialmedia">
        <li className="footer__list-item">
          <a
            href={instagram}
            className="button--round"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-instagram" aria-hidden="true"></i>
            <span className="sr-only">Zur Instagram Seite</span>
          </a>
        </li>
        <li className="footer__list-item">
          <a
            href={facebook}
            className="button--round"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-facebook" aria-hidden="true"></i>
            <span className="sr-only">Zur Facebook Seite</span>
          </a>
        </li>
        <li className="footer__list-item">
          <a
            href={youtube}
            className="button--round"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-youtube" aria-hidden="true"></i>
            <span className="sr-only">Zur Youtube Seite</span>
          </a>
        </li>
      </ul>

      <div className="footer__impress">
        <p className="footer__copyright" itemProp="copyrightHolder">
          &copy; {title} - All rights reserved
        </p>
        <nav aria-label="Footer" className="footer__nav">
          <ul className="footer__nav-list">
            {data.pages.nodes.map((page) => {
              return (
                page.showInFooter && (
                  <li className="footer__nav-list-item" key={page.slug}>
                    <Link
                      to={`/${page.slug}/`}
                      className="footer__nav-link link-hover"
                    >
                      {page.pageTitle}
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </nav>
        <p className="footer__info">
          Design - Marlene Trommer
          <br />
          Umsetzung - Nattaphong Kosakul
        </p>
      </div>
    </footer>
  );
};

export default Footer;
