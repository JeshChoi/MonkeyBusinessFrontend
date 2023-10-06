import axios from "axios";

const apiClient = axios.create({
  // Later read this URL from an environment variable
  baseURL: "https://localhost:6969"
});

export default apiClient;