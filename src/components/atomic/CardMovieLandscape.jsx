import React from "react";

function CardMovieLandscape(image, desc, title, star) {
  return (
    <figure className="min-w-[400px] px-2 relative">
      <img src={image} alt={desc} />
      <div className=" absolute bottom-0 bg-black left-2 right-2 rounded-lg bg-opacity-15 p-2 text-white flex justify-between items-center">
        <span>{title}</span>
        <span>star{star}/5</span>
      </div>
    </figure>
  );
}

export default CardMovieLandscape;
