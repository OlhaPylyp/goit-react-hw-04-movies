import { Link, withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
import style from "../pages/Main.module.css"

const MoviesList = ({ films, location }) => {
  return (
    <ul className ={style.filmList}>
    {" "}
    {films.length > 0 && films.map(({ id, original_title, poster_path }) => {
      return (
        <li className ={style.filmItem}  key={id}>
              <Link
                to={{
                  pathname: `/MoviesPage/${id}`,
                  state: { from: location },
                }}
              >
                {original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
export default withRouter(MoviesList);