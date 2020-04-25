import React from 'react';
import { Link } from 'gatsby';
const Footer = () => (
  <footer className="footer">
    <a className="footer__email" href="mailto:booking@pepitabauhardt.com">
      booking@pepitabauhardt.com
    </a>

    <ul className="footer__socialmedia">
      <li className="footer__list-item">
        <a href="/" className="footer__socialmedia-link">
          <i className="icon-instagram" aria-hidden="true"></i>
          <span className="sr-only">Zur Instagram Seite</span>
        </a>
      </li>
      <li className="footer__list-item">
        <a href="/" className="footer__socialmedia-link">
          <i className="icon-facebook" aria-hidden="true"></i>
          <span className="sr-only">Zur Facebook Seite</span>
        </a>
      </li>
      <li className="footer__list-item">
        <a href="/" className="footer__socialmedia-link">
          <i className="icon-youtube" aria-hidden="true"></i>
          <span className="sr-only">Zur Youtube Seite</span>
        </a>
      </li>
    </ul>

    <div className="footer__impress">
      <p className="footer__copyright">
        &copy; Pepita Maria Bauhardt - All rights reserved
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

export default Footer;
