import React from "react";

function CardMovie({ title, image, description }) {
  return (
    <div className="relative  w-24 h-36 bg-slate-500 md:w-60 md:h-80 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300">
      {/* Movie Poster */}
      <img src={image} alt={title} className="w-full h-full object-cover absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Movie Details on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export default CardMovie;
