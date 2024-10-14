import React from "react";

function CardMovie({ movie, className, children }) {
  return (
    <figure className={`relative w-24 h-36 bg-slate-500 md:w-60 md:h-80 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ${className}`}>
      {/* Movie Poster */}
      <img src={movie.image} alt={movie.title} className="w-full h-full object-cover absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </figure>
  );
}

export default CardMovie;
