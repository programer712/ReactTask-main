import React from "react";
import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

const setActive = ({ isActive }) => (isActive ? "active-link" : "")

const Header = () => {
  return (
    <header className={styles.main__header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_container}>
          <li className={styles.nav_item}>
            <NavLink to="/" className={setActive}>
              Members
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink to="teams" className={setActive}>
              Teams
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink to="todo" className={setActive}>
              To-do
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
