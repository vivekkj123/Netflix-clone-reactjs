import axios from "axios";
import { apiBaseUrl } from "./Constants";

export default axios.create({
    baseURL: apiBaseUrl,
  });
