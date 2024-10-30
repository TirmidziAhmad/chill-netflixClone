import axiosInstance from "../axios.config";

const movieEndpoint = "/moviesData";

export const movieService = {
  getMovie: async () => {
    try {
      const response = await axiosInstance.get(movieEndpoint);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  createMovie: async (movieData) => {
    try {
      const response = await axiosInstance.post(movieEndpoint, movieData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  updateMovie: async (movieId, movieData) => {
    try {
      const response = await axiosInstance.put(`${movieEndpoint}/${movieId}`, movieData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  deleteMovie: async (movieId) => {
    try {
      const response = await axiosInstance.delete(`${movieEndpoint}/${movieId}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
