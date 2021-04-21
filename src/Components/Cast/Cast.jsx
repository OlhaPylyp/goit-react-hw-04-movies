import { Component } from "react";

import fetchCast from "../ApiUtilit";
import style from "../Cast/Cast.module.css";
class Cast extends Component {
  state = {
    castA: [],
    error: false,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await fetchCast.fetchCast(movieId).then((cast) =>
      this.setState({
        castA: cast,
      })
    );
  }

  render() {
    const { castA } = this.state;
    return (
      <>
        <div className={style.grid}>
          <ul className={style.imageGallery}>
            {castA.map(({ name, id, profile_path }) => {
              return (
                <li className={style.item} key={id}>
                  <img
                    width="100"
                    className={style.img}
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt=""
                  />
                  <p className={style.text}>
                    Name: <span className={style.name}>{name}</span>
                  </p>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Cast;
