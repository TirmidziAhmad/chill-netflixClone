import { useCallback } from "react";
import CardMovieLandscapeTitled from "../molecules/CardMovieLandscapeTitled";
import movies from "../../api/moviesData";
import useEmblaCarousel from "embla-carousel-react";
import ButtonSlider from "../atomic/ButtonSlider";
function SectionContinue() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const handlePrevClick = useCallback(() => {
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNextClick = useCallback(() => {
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold mb-4">Melanjutkan Tonton Film</h1>

      <div className="relative">
        <ButtonSlider direction="prev" onClick={handlePrevClick} />
        <div className="embla overflow-hidden">
          <div className="embla__viewport " ref={emblaRef}>
            <div className="embla__container flex space-x-4">
              {movies.map((movie) => (
                <div className="embla__slide min-w-[240px] md:min-w-[320px] lg:min-w-[400px]" key={movie.id}>
                  <CardMovieLandscapeTitled movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <ButtonSlider direction="next" onClick={handleNextClick} />
      </div>
    </section>
  );
}

export default SectionContinue;
