import axios from "axios";

export const mirageApi = axios.create({
  baseURL: "http://localhost:3000/api",
});
