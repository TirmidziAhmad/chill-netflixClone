import React from "react";
import LabelTopTen from "../atomic/LabelTopTen";
import LabelNewEpisode from "../atomic/LabelNewEpisode";
import CardMovie from "../atomic/CardMovie";

function CardMovieLabeled({ index, movie, className }) {
  return (
    <CardMovie movie={movie} className={className}>
      {/* Show 'Top 10' label if index is between 1 and 10 */}
      {index >= 1 && index <= 10 && <LabelTopTen />}
      {/* Show 'New Episode' label if index is exactly 1 */}
      {index === 1 && <LabelNewEpisode />}
    </CardMovie>
  );
}

export default CardMovieLabeled;
