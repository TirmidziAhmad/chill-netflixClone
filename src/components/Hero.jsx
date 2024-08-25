import { useState, useEffect } from "react";
import { getSingleTrendingData } from "../api/api";
function HeroSection() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getSingleTrendingData();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);
  if (!movie) return <div className="text-3xl ">Loading...</div>;
  return (
    <section className="relative bg-black text-white h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} // Replace with your image URL
          alt={movie.title}
          className="relative w-full h-full object-cover max-h-fit"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="flex flex-col container mx-auto z-10">
        <div className="flex">
          <div className="flex flex-col text-start w-full  ">
            <h1 className="flex text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
            <p className="flex mb-8 md:w-2/3">{movie.overview}</p>
          </div>
        </div>
        <div className="container mx-auto flex gap-4 w-full">
          <button className="bg-blue-900 hover:bg-red-700 px-8 py-3 rounded-3xl text-xl font-bold">Mulai</button>
          <button className="bg-gray-800 hover:bg-red-700 px-8 py-3 rounded-3xl text-xl font-bold flex justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            Selengkapnya
          </button>
          <p className="flex px-3 py-1 rounded-3xl text-xl font-bold justify-center items-center border">18+</p>
          <div className="flex align-middle ml-auto">
            <figure className=" self-right ">
              <img src="volume.png" alt="" className="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
