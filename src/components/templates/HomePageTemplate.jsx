import NavBar from "../organism/NavBar";
import SectionHero from "../organism/SectionHero";
import SectionContinue from "../organism/SectionContinue";
import SectionTopRating from "../organism/SectionTopRating";
import SectionTrending from "../organism/SectionTrending";
import SectionNewRelease from "../organism/SectionNewRelease";
import SectionFooter from "../organism/SectionFooter";
import movies from "../../api/moviesData";

function HomeTemplate({ image, title, desc }) {
  return (
    <>
      <NavBar />
      <SectionHero image={movies[1].image} title={movies[1].title} desc={movies[1].description} />
      <div className="px-4 lg:px-14">
        {" "}
        <SectionContinue />
        <SectionTopRating />
        <SectionTrending />
        <SectionNewRelease />
      </div>
      <div className="border-t border-gray-700">
        <div className="px-4 lg:px-14">
          <SectionFooter className="" />
        </div>
      </div>
    </>
  );
}
export default HomeTemplate;
