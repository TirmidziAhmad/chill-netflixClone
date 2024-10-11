import NavBar from "../organism/NavBar";
import SectionHero from "../organism/SectionHero";
import SectionContinue from "../organism/SectionContinue";
import SectionTopRating from "../organism/SectionTopRating";
import SectionTrending from "../organism/SectionTrending";
import SectionNewRelease from "../organism/SectionNewRelease";
function HomeTemplate({ image, title, desc }) {
  return (
    <>
      <NavBar />
      <SectionHero image={image} title={title} desc={desc} />
      <SectionContinue />
      <SectionTopRating />
      <SectionTrending />
      <SectionNewRelease />
    </>
  );
}
export default HomeTemplate;
