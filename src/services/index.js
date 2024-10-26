import axios from "axios";

const api = axios.create({
  baseURL: "https://67171eda3fcb11b265d4861b.mockapi.io/netflixCloneData/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
