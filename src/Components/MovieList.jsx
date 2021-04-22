import { Link, withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
import style from '../pages/MovieGrid.module.css';

const MoviesList = ({ films, location }) => {
  return (
    <div className={style.grid}>
    <ul className={style.imageGallery}>
      {films.length > 0 &&
        films.map(({ id, original_title, poster_path }) => {
          return (
            <li className={style.imageGalleryItem} key={id}>
              <Link
                to={{
                  pathname: `/MoviesPage/${id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={style.imageGalleryItem_image}
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="movie text"
                />
                  <h2 className={style.movieTitle}>{original_title}</h2> 
              </Link>
            </li>
          );
        })}
    </ul>
  </div>
  );
};
export default withRouter(MoviesList);