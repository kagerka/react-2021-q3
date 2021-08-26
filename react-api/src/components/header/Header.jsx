import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to='/' exact className={styles.link} activeClassName={styles.active_link}>
          Home
        </NavLink>
        <NavLink to='/about' className={styles.link} activeClassName={styles.active_link}>
          About
        </NavLink>
      </nav>
      <div className={styles.title}>React Testing</div>
    </header>
  );
};

export default Header;
