import axios from "axios";

const API_KEY = "your_tmdb_api_key"; // Replace with your actual TMDB API key
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Example function to get top-rated movies
export const getTopRatedMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/top_rated");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
};

// Example function to search for movies by keyword
export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

// Example function to get movie details by ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
