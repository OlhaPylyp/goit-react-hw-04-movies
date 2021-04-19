// // import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import fetchMovieDetails from "../Components/ApiUtilit";
import { Link, NavLink, Route, Switch, withRouter } from "react-router-dom";
import style from "../pages/Main.module.css";
const Cast = lazy(() =>
  import("../Components/Cast/Cast" /* webpackChunkName: "Cast component" */)
);
const Reviews = lazy(() =>
  import(
    "../Components/Reviews/Reviews" /* webpackChunkName: "Cast component" */
  )
);

class MovieDetailsPage extends Component {
  state = {
    movie_id: "",
    original_title: "",
    genres: [],
    vote_average: 0,
    popularity: null,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieDetails
      .fetchMovieDetails(movieId)
      .then((film) => this.setState({ ...film }));
  }
  render() {
    const {
      id,
      original_title,
      genres,
      vote_average,
      poster_path,
    } = this.state;
    console.log("MovieDetPage this.props.match: ", this.props.match);
    return (
      <>
        <div className={style.container}>
          <img
            className={style.img}
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt=""
          />
          <h2 className={style.genresTitle} key={id}>
            Title: <span> {original_title}</span>
          </h2>
          <ul className={style.genresList}>
            Genres:{" "}
            {genres.map(({ name }) => {
              return (
                <li className={style.genresItem}>
                  <span>{name},</span>
                </li>
              );
            })}
          </ul>
          <p className={style.genresScore}>
            User Score:{" "}
            <span className={style.genresText}>{vote_average * 10}%</span>
          </p>
          <p className={style.genresInfo}>Aditional information</p>
          <NavLink
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
            to={`${this.props.match.url}/cast/${this.props.match.params.movieId}`}
          >
            <p className={style.text}>Cast</p>
          </NavLink>{" "}
          <NavLink
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
            to={`${this.props.match.url}/reviews/${this.props.match.params.movieId}`}
          >
            <p >Reviews</p>
          </NavLink>{" "}
          <Suspense fallback={<p>Is loading....</p>}>
            <Switch>
              <Route
                path={`${this.props.match.url}/cast/:movieId`}
                component={Cast}
              />
              <Route
                path={`${this.props.match.url}/reviews:movieId`}
                component={Reviews}
              />
            </Switch>
          </Suspense>{" "}
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
