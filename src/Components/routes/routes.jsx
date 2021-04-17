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

export const routes = [
  {
    path: "/",
    label: "Home Page",
    component: HomePages,
    exact: true,
  },
  {
    path: "/:movieId",
    label: "Home Page",
    component: MovieDetailsPage,
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
  // {
  //   path: "/MoviesPage/Cast/:movieId",
  //   label: "Cast",
  //   component: Cast,
  // },
  //   {
  //     path: '/Cast',
  //     label: 'Cast',
  //     component: Cast,
  //     exact: true,
  //   },
];
