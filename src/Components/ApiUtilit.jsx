/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const ApiKey = "2333256e3c1fa5964d6335c1882125af";
const fetchSearchFilm = async (query) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1`
    )
    .then((response) => response.data.results);
const fetchMovieDetails = async (movie_id) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`
    )
    .then(({ data }) => data);

const fetchCast = async (movie_id) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${ApiKey}&language=en-US`
    )
    .then(({ data }) => data.cast);
const fetchReviews = async (movie_id) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${ApiKey}&language=en-US&page=1`
    )
    .then(({ data }) => data.results);
export default { fetchSearchFilm, fetchMovieDetails, fetchCast, fetchReviews };
