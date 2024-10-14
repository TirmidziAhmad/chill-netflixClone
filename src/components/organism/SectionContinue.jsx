import React from "react";
import CardMovieLandscapeTitled from "../molecules/CardMovieLandscapeTitled";
import movies from "../../api/moviesData";
import useEmblaCarousel from "embla-carousel-react";

function SectionContinue() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: false });

  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold mb-4">Continue Movies</h1>

      {/* Embla Carousel Setup */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__viewport overflow-hidden">
          <div className="embla__container flex space-x-4">
            {movies.map((movie) => (
              <div className="embla__slide min-w-[240px] md:min-w-[320px] lg:min-w-[400px]" key={movie.id}>
                <CardMovieLandscapeTitled movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContinue;
