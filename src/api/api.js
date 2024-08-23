import axios from "axios";

const API_KEY = "0152e415f9234ef6b5239b09fef422b5"; // Replace with your actual TMDB API key
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

export const trendingMovies = async () => {
  try {
    const response = await tmdbApi.get("/trending/movie/week");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
};

// Example function to get movie details by ID
export const NewRelease = async () => {
  try {
    const response = await tmdbApi.get("/movie/upcoming");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching new release", error);
    throw error;
  }
};

export const getSingleTrendingData = async () => {
  try {
    const response = await tmdbApi.get("/trending/movie/day");
    const movies = response.data.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
};
