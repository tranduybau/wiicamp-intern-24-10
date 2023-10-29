import axios from "axios";

const axiosUser = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_ADMIN,
  headers: { "Content-Type": "application/json" },
});

export { axiosUser };
