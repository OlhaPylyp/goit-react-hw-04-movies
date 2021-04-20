// import { Component, Suspense } from "react";
import { lazy, Suspense } from "react";
import { Route, NavLink, Switch,Redirect } from "react-router-dom";
import styles from "./App.module.css";
// import MainNavigation from "./Components/routes/MainNavigation";
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);
const App = () => {
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
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/MoviesPage" component={MoviesPage} />
          <Route path="/MoviesPage/:movieId" component={MovieDetailsPage} />
          {/* <Route path="/:movieId" component={MovieDetailsPage} /> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
      {/* <MainNavigation /> */}
    </div>
  );
};

export default App;
