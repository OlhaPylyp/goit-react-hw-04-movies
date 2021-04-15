// // import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

class MovieDetailsPage extends Component {
  state = {
    movie_id: "",
    original_title: "",
    genres: "",
    popularity: null,
  };
  async componentDidMount() {
    const { movie_id } = this.props.match.params;
    const ApiKey = "2d2272085b6a086155bacb1413ae9080";
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`
    );
    this.setState({ ...response.data });
  }

  render() {
    const { original_title, genres, popularity } = this.state;
    return (
      <>
        {/* <h1> {this.props.match.params.movie_id}</h1> */}
        {/* <img src={imgUrl} alt="" /> */}
        <h2>{original_title}</h2>
        <p>Genres: {genres.name}</p>
        <p>{popularity}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
