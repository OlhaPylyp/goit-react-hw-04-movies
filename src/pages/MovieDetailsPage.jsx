// // import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import fetchMovieDetails from "../Components/ApiUtilit";
import routes from "../Components/routes/routes";
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
    poster_path: "",
    error: false,
    location: null,
  };
  componentDidMount() {
    this.setState({ location: this.props.location });
    const { movieId } = this.props.match.params;
    fetchMovieDetails
      .fetchMovieDetails(movieId)
      .then((film) => this.setState({ ...film }))
      .catch((error) => this.state({ error }));
  }
  handleGoBack = () => {
    const { history } = this.props;
    const { location } = this.state;
    history.push(location?.state?.from || routes.HomePage);
  };
  render() {
    const {
      id,
      original_title,
      genres,
      vote_average,
      poster_path,
    } = this.state;

    return (
      <>
        <div className={style.container}>
          <button
            type="button"
            className={style.button}
            onClick={this.handleGoBack}
          >
            Back
          </button>
          <img
            className={style.img}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="movie text"
          />
          <h2 className={style.genresTitle} key={id}>
            Title: <span> {original_title}</span>
          </h2>
          <ul className={style.genresList}>
            Genres:{" "}
            {genres.map(({ name, id }) => {
              return (
                <li className={style.genresItem} key={id}>
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
            to={`${this.props.match.url}/cast`}
          >
            <p className={style.text}>Cast</p>
          </NavLink>{" "}
          <NavLink
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
            to={`${this.props.match.url}/reviews`}
          >
            <p>Reviews</p>
          </NavLink>{" "}
          <Suspense fallback={<p>Is loading....</p>}>
            <Switch>
              <Route path={`${this.props.match.path}/cast`} component={Cast} />
              <Route
                path={`${this.props.match.path}/reviews`}
                component={Reviews}
              />
            </Switch>
          </Suspense>{" "}
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
