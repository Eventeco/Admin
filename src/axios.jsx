import axios from "axios";
import { BACKEND_BASE_URL } from "./constants/others";

const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: true,
});

export default instance;
