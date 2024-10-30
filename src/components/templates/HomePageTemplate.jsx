import NavBar from "../organism/NavBar";
import SectionHero from "../organism/SectionHero";
import SectionContinue from "../organism/SectionContinue";
import SectionTopRating from "../organism/SectionTopRating";
import SectionTrending from "../organism/SectionTrending";
import SectionNewRelease from "../organism/SectionNewRelease";
import SectionFooter from "../organism/SectionFooter";
import { movieService } from "../../api/services/movieService";
import { useState, useEffect } from "react";
function HomeTemplate() {
  const [featuredMovie, setFeaturedMovie] = useState({});
  const fetchMovies = async () => {
    try {
      const response = await movieService.getMovie();
      setFeaturedMovie(response[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <NavBar />
      <SectionHero image={featuredMovie.image} title={featuredMovie.title} desc={featuredMovie.description} />
      <div className="px-4 lg:px-14">
        <SectionContinue />
        <SectionTopRating />
        <SectionTrending />
        <SectionNewRelease />
      </div>
      <div className="border-t border-gray-700">
        <div className="px-4 lg:px-14">
          <SectionFooter />
        </div>
      </div>
    </>
  );
}

export default HomeTemplate;
