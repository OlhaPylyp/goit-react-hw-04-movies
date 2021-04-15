import { lazy } from 'react';
const HomePages = lazy(()=> import("../../pages/HomePage" /* webpackChunkName: "HomePages" */),) 
const MoviesPage = lazy(()=> import("../../pages/MoviesPage" /* webpackChunkName: "MoviesPage" */),) 
const MovieDetailsPage  = lazy(()=> import("../../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */),) 
// const Cast= lazy(()=> import("../../pages/Cast"),) 


  export const routes = [
    {
        path: '/',
        label: 'Home Page',
        component: HomePages,
        exact: true,
      },
      {
        path: '/MovieDetailsPage/:id',
        label: 'Movie Details',
        component: MovieDetailsPage,
      },
      {
        path: '/MoviesPage',
        label: 'MoviesPage',
        component: MoviesPage,
        exact: true,
      },
    //   {
    //     path: '/Cast',
    //     label: 'Cast',
    //     component: Cast,
    //     exact: true,
    //   },
  ]