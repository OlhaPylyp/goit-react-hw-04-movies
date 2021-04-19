import { Component } from "react";

import fetchCast from "../ApiUtilit";
import style from "../Cast/Cast.module.css"
class Cast extends Component {
  state = {
    castA: [],
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchCast.fetchCast(movieId).then((cast) =>
      this.setState({
        castA: cast,
      })
    );
  }

  render() {
    const { castA } = this.state;
        return (
      <>
        <ul className={style.list}>
          {castA.map(({ name, id }) => {
            return (
              <li className={style.item} key={id}>
                <p className={style.text}>Name: <span className={style.name}>{name}</span></p>{" "}
              </li>
            );
          })}
        </ul>
          </>
    );
  }
}

export default Cast;
