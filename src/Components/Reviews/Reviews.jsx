import { Component } from "react";

import fetchReviews from "../ApiUtilit";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    console.log("Cast componentDidMount() match: ", this.props.match);
    const { movieId } = this.props.match.params;
    fetchReviews.fetchReviews(movieId).then((results) =>
      this.setState({
        reviews: results,
      })
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length>0 && reviews.map(({ content, id }) => {
            return (<p key={id}>{content}</p>);
          })}
        </ul>
      </>
    );
  }
}

export default Reviews;
