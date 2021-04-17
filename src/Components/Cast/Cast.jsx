import { Component } from "react";

import fetchCast from "../ApiUtilit";

class Cast extends Component {
  state = {
    castA: [],
  };
  componentDidMount() {
    console.log("Cast componentDidMount() match: ", this.props.match);
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
        <ul>
          {castA.map(({ name, id }) => {
            return (
              <li key={id}>
                <p>Name:{name}</p>{" "}
              </li>
            );
          })}
        </ul>
          </>
    );
  }
}

export default Cast;
