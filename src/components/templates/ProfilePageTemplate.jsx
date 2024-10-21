import NavBar from "../organism/NavBar";
import ProfileCard from "../organism/ProfileCard";
import SectionFooter from "../organism/SectionFooter";
import PremiumIdentifierCard from "../organism/PremiumIdentifierCard";
import SectionUserMovieList from "../organism/SectionUserMovieList";
function ProfilePageTemplate() {
  return (
    <>
      <NavBar />
      <div className="mx-14">
        <div className="flex flex-col-reverse md:flex-row">
          <ProfileCard />
          <PremiumIdentifierCard />
        </div>
        <SectionUserMovieList />
        <SectionFooter />
      </div>
    </>
  );
}

export default ProfilePageTemplate;
