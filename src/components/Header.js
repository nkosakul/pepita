import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      pages: allContentfulPage(sort: { fields: createdAt }) {
        nodes {
          slug
          pageTitle
          createdAt
          showInNavigation
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="header__inner">
        <div
          className="logo"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <Link to="/" itemProp="url">
            <img
              src="/images/logo.svg"
              alt="Pepita Bauhardt Logo"
              itemProp="logo"
            />
          </Link>
        </div>

        <nav
          className="navigation"
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
          aria-label="main"
        >
          <ul className="navigation__list">
            {data.pages.nodes.map((page) => (
              <li
                role="presentation"
                className="navigation__list-item"
                key={page.slug}
              >
                <Link
                  to={`/${page.slug}/`}
                  itemProp="url"
                  role="menuitem"
                  className="navigation__link"
                  activeClassName="navigation__link--is-active"
                >
                  <span itemProp="name">{page.pageTitle}</span>
                </Link>
              </li>
            ))}
            <li
              role="presentation"
              className="navigation__list-item navigation__list-item--contact"
            >
              <Link
                to="/contact/"
                className="button button--small"
                itemProp="url"
                role="menuitem"
              >
                <span itemProp="name">Booking & Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
