import React from "react";
import CardMovieLabeled from "../molecules/CardMovieLabeled";
import { movies } from "../../api/moviesData"; // Array of movies

function SectionTopRating() {
  return (
    <section className="flex justify-between items-center">
      <div className="flex overflow-x-scroll snap-x">
        {movies.map((movie, index) => (
          <CardMovieLabeled
            key={movie.id}
            title={movie.title}
            image={movie.image}
            index={index + 1} // Pass index for labeling
          />
        ))}
      </div>
    </section>
  );
}

export default SectionTopRating;
