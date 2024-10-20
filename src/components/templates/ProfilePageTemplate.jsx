import NavBar from "../organism/NavBar";
import ProfileCard from "../organism/ProfileCard";
import SectionFooter from "../organism/SectionFooter";
import PremiumIdentifierCard from "../organism/PremiumIdentifierCard";
function ProfilePageTemplate() {
  return (
    <>
      <NavBar />
      <div className="mx-14">
        <h1 className="text-2xl">Profile Saya</h1>
        <div className="flex ">
          <ProfileCard />
          <PremiumIdentifierCard />
        </div>
        <SectionFooter />
      </div>
    </>
  );
}

export default ProfilePageTemplate;
