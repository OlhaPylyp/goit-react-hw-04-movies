// import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from "react-router-dom";
// import { debounce } from "debounce";
import { Component } from "react";
// import axios from 'axios';
import fetchSearchFilm from "../Components/ApiUtilit";
import SearchBar from "../Components/SearchBar";
import style from "../pages/Main.module.css"
class MoviesPage extends Component {
  state = {
    films: [],
    searchFilm: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchFilm !== this.state.searchFilm) {
      this.fetchFilm();
    }
  }
  // debounceWord = debounce((searchFilm) => {
  //   return fetchSearchFilm.fetchSearchFilm(searchFilm).then((results) =>
  //     this.setState((prevState) => ({
  //       films: [...prevState.films, ...results],
  //     }))
  //   );
  // }, 1000);
  fetchFilm = () => {
    const { searchFilm } = this.state;

    // this.setState({ isLoading: true });

    // if ( searchFilm.length <= 2) {
    //   this.setState({ isLoading: false });
    //   return;
    // }
    fetchSearchFilm
      .fetchSearchFilm(searchFilm)
      .then((results) =>
        this.setState((prevState) => ({
          films: [...prevState.films, ...results],
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  addFilm = (film) => {
    // console.log('addImage()');
    this.setState({
      searchFilm: film,
      films: [],
      // currentPage: 1,
      // scrollScr: false,
    });
  };
  render() {
    console.log("Movie this.props.match.url", this.props.match.url);
    const { films } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.addFilm} />
        <ul>
          {/* {films.map(({ id, overview, poster_path, original_title }) => { */}
          {films.map(({ id, original_title }) => {
            return (
              <div>
                <li className ={style.filmItem}  key={id}>
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
