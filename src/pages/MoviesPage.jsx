// import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from 'react-router-dom';
import  {debounce}  from "debounce";
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
  debounceWord = debounce((searchFilm)=>
  {return(fetchSearchFilm.fetchSearchFilm(searchFilm).then( results=>this.setState(prevState =>({
    films: [...prevState.films, ...results],
       }))))},1000
  );

  handleChange = (e) => {
    this.setState({ searchFilm: e.target.value });
     // this.debounceWord(e.target.value);
  };

  render() {
    const { films } = this.state;
    return (
      <div>
        <form role="search">
          <input
            value={this.state.searchFilm}
            onChange={this.handleChange}
            type="text"
          />
        </form>
        <ul>
          {films.map(({ movie_id , overview, poster_path, original_title }) => {
            return (
              <div>
                <h2>{original_title}</h2>
                <li key={movie_id }>
                    <Link to={`${this.props.match.url}/${movie_id }`}>
                {original_title}
              </Link> </li>
                <p>{overview}</p>
                <img src={`${poster_path}`} alt="" />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
