// import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from 'react-router-dom';

// import fetchPopularFilm from "../Components/ApiUtilit"
import { renderIntoDocument } from "react-dom/test-utils";
import { Link,NavLink } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import style from "../pages/Main.module.css"

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
    console.log("Home this.props.match.url",this.props.match.url);
    const { films } = this.state;
    return (
      <ul className ={style.filmList}>
        {" "}
        {films.length > 0 && films.map(({ id, original_title, poster_path }) => {
          return (
            <li className ={style.filmItem}  key={id}>
            
         <NavLink to={`${this.props.match.url}/${id}`}>
                  {original_title}
                {/* <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" /> */}
              </NavLink> 
             </li>
          );
        })}
      </ul>
    );
  }
}

export default HomePages;
