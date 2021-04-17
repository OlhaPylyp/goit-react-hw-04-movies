// // import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import fetchMovieDetails from "../Components/ApiUtilit";
import { Link, Route, Switch, withRouter } from "react-router-dom";
const Cast =lazy(() =>
  import("../Components/Cast/Cast" /* webpackChunkName: "Cast component" */)
);
const Reviews =lazy(() =>
  import("../Components/Reviews/Reviews" /* webpackChunkName: "Cast component" */)
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
    const {id,
      original_title,
      genres,
      vote_average,
      poster_path,
    } = this.state;
    console.log("MovieDetPage this.props.match: ", this.props.match);
    return (
      <>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <h2 key={id}>
          Title: <span> {original_title}</span>
        </h2>
        {genres.map(({name})=>{return ( <p>Genres:{name}</p>)})}
        <p>User Score: {vote_average * 10}%</p>
        <p>Aditional information</p>
        <Link to={`${this.props.match.url}/cast/${this.props.match.params.movieId}`}>
          <p>Cast</p>
        </Link>{" "}
        <Link to={`${this.props.match.url}/reviews/${this.props.match.params.movieId}`}>
          <p>Reviews</p>
        </Link>{" "}
              <Suspense fallback={<p>Is loading....</p>}>
          <Switch>
            <Route path={`${this.props.match.url}/cast/:movieId`} component={Cast} />
            <Route path={`${this.props.match.url}/reviews:movieId`} component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
