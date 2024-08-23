import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingMovies } from "../api/api";

function TopRatingSlider() {
  // Sample data for films
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Trending</h2>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="p-2">
              <div className="relative">
                <div className="w-full h-96 overflow-hidden rounded-md flex items-center justify-center">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-full object-cover" />
                </div>
                <div className="absolute top-0 left-0  bg-opacity-75 p-2 ">
                  <p className="bg-blue-800 px-2 py-1 rounded-2xl">Episode Baru</p>
                </div>
                <div className="absolute top-0 right-1 bg-red-700 p-2 flex justify-between items-center rounded text-center">
                  <h3 className="text-sm font-semibold">
                    Top <br /> 10
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TopRatingSlider;
