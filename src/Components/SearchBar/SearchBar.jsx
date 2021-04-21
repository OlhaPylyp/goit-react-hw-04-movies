import { Component } from "react";
import styles from "../SearchBar/Searchbar.module.css";

class SearchBar extends Component {
  state = {
    film: "",
  };

  handleChange = (e) => {
    this.setState({ film: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.film);
    this.setState({ film: "" });
  };
  render() {
    return (
      <div>
        <header className={styles.search_bar}>
          <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.searchForm_button}>
              <span className={styles.searchForm_button_label}>Search</span>
            </button>

            <input
              onChange={this.handleChange}
              className={styles.searchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
              value={this.state.film}
            />
          </form>
        </header>
      </div>
    );
  }
}
export default SearchBar;
