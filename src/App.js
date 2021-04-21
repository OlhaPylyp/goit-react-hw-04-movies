// import { Component, Suspense } from "react";
import { lazy, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import routes from "./Components/routes/routes";
// import MainNavigation from "./Components/routes/MainNavigation";
// const HomePage = lazy(() =>
//   import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
// );
// const MoviesPage = lazy(() =>
//   import("./pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
// );
// const MovieDetailsPage = lazy(() =>
//   import("./pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
// );
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
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
          {/* <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} /> */}
        </Switch>
        {/* </Suspense>
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/MoviesPage" component={MoviesPage} />
          <Route path="/MoviesPage/:movieId" component={MovieDetailsPage} />
          
          <Redirect to="/" />
        </Switch>*/}
      </Suspense>
    </div>
  );
};

export default App;
