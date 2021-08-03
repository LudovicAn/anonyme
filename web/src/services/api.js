import axios from "axios";
// import AuthService, { Token } from "src/services/AuthService";

export const DEV_MAIN_URL = "http://localhost:3001/";
export const PROD_MAIN_URL = "https://api.source.com/api/";
export const MAIN_URL =
  process.env.NODE_ENV === "development" ? DEV_MAIN_URL : PROD_MAIN_URL;

const API = axios.create({
  baseURL: MAIN_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* API.interceptors.request.use(
  (config) => {
    const token = AuthService.getAccessToken(Token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
); */

export { API };
