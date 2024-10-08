import React from "react";
import LabelTopTen from "../atomic/LabelTopTen";
import LabelNewEpisode from "../atomic/LabelNewEpisode";
import CardMovie from "../atomic/CardMovie";

function CardMovieLabeled({ movie }) {
  return (
    <CardMovie title={movie.title} image={movie.image} description={movie.description}>
      <LabelTopTen />
      <LabelNewEpisode />
    </CardMovie>
  );
}

export default CardMovieLabeled;
