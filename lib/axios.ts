import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // your local backend
  withCredentials: true,
});

export default axiosInstance;
