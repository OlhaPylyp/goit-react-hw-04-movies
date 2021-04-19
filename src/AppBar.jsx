import { lazy, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styles from "./App.module.css";

const AppBar = () => {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
            >
              HomePage
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/MoviesPage"
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
            >
              MoviesPage
            </NavLink>
          </li>
        </ul>
              </div>
    );
  };
  
  export default AppBar;