import axios from "axios";
import { API_URL } from "../constants";

export const apiClient = axios.create({
  baseURL: API_URL,
});

// Attach the JWT token (if present) to every outgoing request.
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("couple_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// If the token is invalid/expired, kick the admin back to /login.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      typeof window !== "undefined" &&
      error?.response?.status === 401 &&
      window.location.pathname.startsWith("/dashboard")
    ) {
      localStorage.removeItem("couple_token");
      localStorage.removeItem("couple_admin");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
