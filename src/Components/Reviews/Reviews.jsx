import { Component } from "react";

import fetchReviews from "../ApiUtilit";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidUpdate() {
      const { movieId } = this.props.match.params;
    fetchReviews.fetchReviews(movieId).then(
    
      (results) =>  console.log("Rewiews ", results)
      // this.setState({
      //   reviews: results,
      // })
    );
  }

  render() {
    console.log("this.state.reviews",this.state.reviews)
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length>0 ? reviews.map(({ content, id }) => {
            return (<p key={id}>{content}</p>);
          }):<li>Ops, there are no data</li>}
        </ul>
      </>
    );
  }
}

export default Reviews;
