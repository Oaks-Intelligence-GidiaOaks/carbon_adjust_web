import store from "@/app/store";
import { baseURL } from "./../constants/api";
import axios from "axios";

const token = store.getState().user.token; // Assuming your token is stored in the user slice; // Replace with your Bearer token

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json", // Example header, customize as needed
    Authorization: `Bearer ${token}`, // Set Bearer token
    // Add any other common headers here
  },
  timeout: 10000, // Request timeout in milliseconds
  // Add other custom configurations as needed
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
