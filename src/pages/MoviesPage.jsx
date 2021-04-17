// import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import { debounce } from "debounce";
import { Component } from "react";
// import axios from 'axios';
import fetchSearchFilm from "../Components/ApiUtilit";

class MoviesPage extends Component {
  state = {
    films: [],
    searchFilm: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchFilm !== this.state.searchFilm) {
      this.debounceWord(this.state.searchFilm);
    }
  }
  debounceWord = debounce((searchFilm) => {
    return fetchSearchFilm.fetchSearchFilm(searchFilm).then((results) =>
      this.setState((prevState) => ({
        films: [...prevState.films, ...results],
      }))
    );
  }, 1000);

  handleChange = (e) => {
    this.setState({ searchFilm: e.target.value });
    // this.debounceWord(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchFilm !== "") {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `this.state.searchFilm=${this.state.searchFilm}`,
      });
    }
    // this.props.onSubmit(this.state.searchFilm);
    // console.log(this.state.image);
  };
  render() {
    console.log("Movie this.props.match.url", this.props.match.url);
    const { films } = this.state;
    return (
      <div>
        <form role="search" onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            value={this.state.searchFilm}
            onChange={this.handleChange}
            type="text"
          />
        </form>
        <ul>
          {/* {films.map(({ id, overview, poster_path, original_title }) => { */}
          {films.map(({ id, original_title }) => {
            return (
              <div>
                <li key={id}>
                  {/* <h2>{original_title}</h2> */}
                  <Link to={`${this.props.match.url}/${id}`}>
                    {original_title}
                  </Link>{" "}
                </li>
                {/* <p>{movie.overview}</p>
                <img src={`${movie.poster_path}`} alt="" /> */}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
