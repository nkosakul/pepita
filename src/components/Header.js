// import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
// import { graphql, useStaticQuery } from 'gatsby';

// const Header = () => {
//   const [menuState, setMenuState] = useState(false);

//   function toggleMenu() {
//     setMenuState(!menuState);

//     if (menuState) {
//       document.querySelector('body').classList.remove('prevent-scroll');
//     } else {
//       document.querySelector('body').classList.add('prevent-scroll');
//     }
//   }

//   const data = useStaticQuery(graphql`
//     query {
//       pages: allContentfulPage(sort: { fields: [createdAt], order: ASC }) {
//         nodes {
//           slug
//           pageTitle
//           createdAt
//           showInNavigation
//         }
//       }
//     }
//   `);

//   useEffect(() => {
//     document.querySelector('body').classList.remove('prevent-scroll');
//   }, []);

//   return (
//     <header className={`header ${menuState && 'is-active'}`}>
//       <div className="header__inner">
//         <div
//           className="logo"
//           itemScope
//           itemType="http://schema.org/Organization"
//         >
//           <Link to="/" itemProp="url">
//             <img
//               src="/images/logo.svg"
//               alt="Pepita Bauhardt Logo"
//               itemProp="logo"
//             />
//           </Link>
//         </div>

//         <button
//           className={`menu-button ${menuState && 'is-active'}`}
//           aria-label="Menü ein-/ und ausklappen"
//           onClick={toggleMenu}
//         >
//           <span className="sr-only">Menü ein-/ und ausklappen</span>
//           <span className="menu-button__icon" aria-hidden="true">
//             <span className="menu-button__icon-bar"></span>
//             <span className="menu-button__icon-bar"></span>
//             <span className="menu-button__icon-bar"></span>
//           </span>
//         </button>

//         <nav
//           className={`navigation ${menuState && 'is-active'}`}
//           itemScope
//           itemType="http://schema.org/SiteNavigationElement"
//           aria-label="main"
//         >
//           <ul className="navigation__list">
//             {data.pages.nodes.map((page) => {
//               return (
//                 page.showInNavigation && (
//                   <li
//                     role="presentation"
//                     className="navigation__list-item"
//                     key={page.slug}
//                   >
//                     <Link
//                       to={`/${page.slug}/`}
//                       itemProp="url"
//                       role="menuitem"
//                       className="navigation__link"
//                       activeClassName="navigation__link--is-active"
//                     >
//                       <span itemProp="name">{page.pageTitle}</span>
//                     </Link>
//                   </li>
//                 )
//               );
//             })}
//             <li
//               role="presentation"
//               className="navigation__list-item navigation__list-item--contact"
//             >
//               <Link
//                 to="/contact/"
//                 className="button button--small"
//                 itemProp="url"
//                 role="menuitem"
//               >
//                 <span itemProp="name">Booking & Contact</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
