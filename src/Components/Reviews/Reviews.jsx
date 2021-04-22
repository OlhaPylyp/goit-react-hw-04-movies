import { Component } from "react";
import fetchReviews from "../ApiUtilit";
import style from "../Cast/Cast.module.css"

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await fetchReviews.fetchReviews(movieId).then((results) =>
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
          {reviews.length > 0 ? (
            reviews.map(({ content, id, author }) => {
              return (
                <div>
                  <li key={id} className={style.item}>  Author: {author}</li>
                  <p>{content}</p>
                </div>
              );
            })
          ) : (
            <li >Ops, there are no data</li>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
