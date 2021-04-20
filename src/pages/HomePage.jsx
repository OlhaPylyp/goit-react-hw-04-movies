// import fetchPopularFilm from "../Components/ApiUtilit"
import MovieList from "../Components/MovieList";

import { Component } from "react";
import axios from "axios";

class HomePages extends Component {
  state = {
    films: [],
  };
  async componentDidMount() {
    const ApiKey = "2d2272085b6a086155bacb1413ae9080";
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`
    );
    this.setState({ films: response.data.results });
  }

  render() {
    console.log("Home this.props.match.url", this.props.match.url);
    const { films } = this.state;
    return (
      <>
        <h1>Trending films</h1>
        <MovieList films={films} />
      </>
    );
  }
}

export default HomePages;
