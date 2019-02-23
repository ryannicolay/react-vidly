import http from "./httpService";
import { apiEndpoint } from "../config.json";

const apiURL = apiEndpoint + "/movies";

function movieUrl(id) {
  return `${apiURL}/${id}`;
}

export function getMovies() {
  return http.get(apiURL);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiURL, movie);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
