import axios from "axios";

const API_URL = "https://67171eda3fcb11b265d4861b.mockapi.io/netflixCloneData/v1";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.params = {
//       ...config.params,
//       _timestamp: new Date().getTime(),
//     };

//     console.log("🚀 Request sent:", config.url);
//     return config;
//   },
//   (error) => {
//     console.error("❌ Request Error:", error);
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // You can transform response data here
//     console.log("✅ Response received:", response.config.url);
//     return response;
//   },
//   (error) => {
//     console.error("❌ Response Error:", error.response?.status, error.message);
//     return Promise.reject(error);
//   }
// );

export default api;
