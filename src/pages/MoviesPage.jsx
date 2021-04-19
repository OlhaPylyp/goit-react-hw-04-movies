// import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from "react-router-dom";
// import { debounce } from "debounce";
import { Component } from "react";
// import axios from 'axios';
import fetchSearchFilm from "../Components/ApiUtilit";
import SearchBar from "../Components/SearchBar";
import style from "../pages/Main.module.css";
import MovieList from "../Components/MovieList";
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
      .catch((error) => console.log(error));
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
    const { films } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.addFilm} />
        <MovieList films={films} />
      </div>
    );
  }
}

export default MoviesPage;
