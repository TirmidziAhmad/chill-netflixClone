import React from "react";
import CardMovieLandscape from "../atomic/CardMovieLandscape";

function CardMovieLandscapeTitled({ movie }) {
  return (
    <CardMovieLandscape movie={movie} className={"embla__container"}>
      {/* Add additional content */}
      <div className="absolute bottom-0 bg-gradient-to-t from-black left-0 right-0  bg-opacity-20 p-2 text-white flex justify-between items-center">
        <span>{movie.title}</span>
        <span>⭐{movie.rating}/10</span> {/* The rating label */}
      </div>
    </CardMovieLandscape>
  );
}

export default CardMovieLandscapeTitled;
