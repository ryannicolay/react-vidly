import http from "./httpService";
import { apiEndpoint } from "../config.json";

const apiURL = apiEndpoint + "/users";

export function register(user) {
  return http.post(apiURL, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
