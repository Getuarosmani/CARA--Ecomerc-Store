import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { HamburgerMenu } from '../Hamburger-Menu/HamburgerMenu'

export const Navbar = () => {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    }
  }, [menuOpen]);


  const links = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Blog', path: '/Blog' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' },
    { name: <i className="fa-solid fa-cart-shopping"></i>, path: '/Cart' }
  ];

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles['logo-holder']}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        {menuOpen && <div className={styles.overlay} />}
        <ul className={menuOpen ? styles.open : ''}>
          {links.map(link => (
            <li
              key={link.path}
              className={activeLink === link.path ? styles.navActive : ''}
            >
              <Link
                to={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setMenuOpen(false); // close menu on mobile
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.hamburger}>
          <HamburgerMenu togleMenu={toggleMenu} isOpen={menuOpen} />
        </div>
      </div>
    </nav>
  )
}
