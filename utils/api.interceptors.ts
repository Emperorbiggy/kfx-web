// src/utils/apiFetcher.js
import axios from "axios";
// Create an Axios instance
const apiInterceptors = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "", // Base URL from environment or default
  // timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
apiInterceptors.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request errorMainErrroRREject:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiInterceptors.interceptors.response.use(
  (response) => {
    return response.data; // Return only the data from the response
  },
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Response error Unindefified for now:", error.response);
      // Custom error handling (e.g., token expiration, 404, etc.)
      if (error.response.status === 401 || error.response.status === 403) {
        // Handle unauthorized access
        console.warn("Unauthorized access. Redirecting to login...");
        localStorage.removeItem("authToken");
        window.location.href = "/login";
      }
    } else if (error.request) {
      // No response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiInterceptors;
