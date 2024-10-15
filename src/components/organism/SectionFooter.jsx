import LogoRights from "../molecules/LogoRights";
import FooterGenre from "../molecules/FooterGenre";
import FooterHelp from "../molecules/FooterHelp";
function SectionFooter() {
  return (
    <div className="flex justify-between items-center">
      {/* Center the LogoRights vertically */}
      <LogoRights className="flex-col " />
      <div className=" flex gap-56">
        <FooterGenre />
        <FooterHelp />
      </div>
    </div>
  );
}

export default SectionFooter;
