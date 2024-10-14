import React from "react";

function CardMovieLandscape({ movie, className, children }) {
  return (
    <figure className={`relative w-full h-auto overflow-hidden rounded-lg ${className}`}>
      {/* Ensure the image fits the landscape and hides overflow */}
      <img
        src={movie.image}
        alt={movie.title}
        className="object-cover w-full h-32 md:h-48" // Adjust height for landscape format
        style={{ aspectRatio: "16/9" }} // Ensures the image remains in landscape aspect ratio
      />
      {children} {/* Allow additional content, like title and rating */}
    </figure>
  );
}

export default CardMovieLandscape;
