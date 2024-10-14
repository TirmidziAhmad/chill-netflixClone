import React from "react";
import CardMovieLabeled from "../molecules/CardMovieLabeled";
import movies from "../../api/moviesData";
import useEmblaCarousel from "embla-carousel-react";

function SectionTopRating() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const handlePrevClick = useCallback(() => {
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNextClick = useCallback(() => {
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold mb-4">Top Rated Movies</h1>

      {/* Embla Carousel Setup */}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex space-x-4">
            {movies.map((movie, index) => (
              <div className="embla__slide" key={index}>
                <CardMovieLabeled movie={movie} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevClick} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-200">
          Previous
        </button>
        <button onClick={handleNextClick} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-200">
          Next
        </button>
      </div>
    </section>
  );
}

export default SectionTopRating;
