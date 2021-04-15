import axios from "axios";
const ApiKey = "2d2272085b6a086155bacb1413ae9080";
const fetchSearchFilm = async (query) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}`
    )
    .then((response) => response.data.results);
  //   const fetchSearchFilm = async (query) =>
  // await axios
  //   .get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}`
  //   )
  //   .then((response) => response.data.results);
export default { fetchSearchFilm };
