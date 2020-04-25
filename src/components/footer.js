import React from 'react';
import { Link } from 'gatsby';
import useStaticMetadata from '../hooks/use-sitemetadata';

const Footer = () => {
  const { title, email, facebook, instagram, youtube } = useStaticMetadata();

  return (
    <footer className="footer" itemType="http://schema.org/WPFooter" itemScope>
      <h2 className="section-heading">Get in Touch</h2>
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
            <li className="footer__nav-list-item">
              <Link to="/impressum/" className="footer__nav-link link-hover">
                Impressum
              </Link>
            </li>
            <li className="footer__nav-list-item">
              <Link to="/datenschutz/" className="footer__nav-link link-hover">
                Datenschutz
              </Link>
            </li>
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
