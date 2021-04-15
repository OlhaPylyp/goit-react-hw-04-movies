// import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from 'react-router-dom';

// import fetchPopularFilm from "../Components/ApiUtilit"

import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from "react-router-dom";
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
    const { films } = this.state;
    return (
      <ul>
        {" "}
        {films.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`${this.props.match.url}/${id}`}>
                {original_title}
                <img src={poster_path} alt="" />
              </Link>
              {original_title}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default HomePages;