import { useCallback } from "react";
import CardMovieLabeled from "../molecules/CardMovieLabeled";
import useEmblaCarousel from "embla-carousel-react";
import ButtonSlider from "../atomic/ButtonSlider";
import { useFetch } from "../../hooks/useFetch";
function SectionNewRelease() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const { data: movies, loading, error } = useFetch("/moviesData");

  const handlePrevClick = useCallback(() => {
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNextClick = useCallback(() => {
    emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;
  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold mb-4">Rilis Baru</h1>

      {/* Embla Carousel Setup */}
      <div className="relative">
        <ButtonSlider direction="prev" onClick={handlePrevClick} />
        <div className=" embla overflow-hidden">
          {/* Left Button - Slightly Outside */}

          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex space-x-4">
              {movies?.map((movie, index) => (
                <div className="embla__slide" key={index}>
                  <CardMovieLabeled movie={movie} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Button - Slightly Outside */}
        <ButtonSlider direction="next" onClick={handleNextClick} />
      </div>
    </section>
  );
}

export default SectionNewRelease;
