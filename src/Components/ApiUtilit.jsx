/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const ApiKey = "2d2272085b6a086155bacb1413ae9080";
const fetchSearchFilm = async (query) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}`
    )
    .then((response) => response.data.results);
const fetchMovieDetails = async (movie_id) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`
    )
    .then((response) => response.data);

    const fetchCast = async (movie_id) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${ApiKey}&language=en-US`
    )
    .then((response) => response.data.cast);
    const fetchReviews = async (movie_id) =>
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${ApiKey}&language=en-US&page=1`
      )
      .then((response) => response.data.results);
export default { fetchSearchFilm, fetchMovieDetails,fetchCast, fetchReviews };
