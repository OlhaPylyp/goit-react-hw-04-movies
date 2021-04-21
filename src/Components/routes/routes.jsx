import { lazy } from "react";
const HomePages = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "HomePages" */)
);
const MoviesPage = lazy(() =>
  import("../../pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
//const Cast = lazy(() => import("../../Components/Cast/Cast"));

 const routes = [
  {
    path: "/",
    label: "Home Page",
    component: HomePages,
    exact: true,
  },
  {
    path: "/MoviesPage/",
    label: "MoviesPage",
    component: MoviesPage,
    exact: true,
  },
  {
    path: "/MoviesPage/:movieId",
    label: "Movie Details Page",
    component: MovieDetailsPage,
  },
  
];
export default routes;