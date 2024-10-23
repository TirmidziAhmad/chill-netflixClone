import LogoRights from "../molecules/LogoRights";
import FooterGenre from "../molecules/FooterGenre";
import FooterHelp from "../molecules/FooterHelp";
import ListFooterAccordion from "../atomic/ListFooterAccordion";
import { useState, useEffect } from "react";
function SectionFooter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1120) {
        // adjust the mobile size threshold as needed
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call it once to set the initial state
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="py-14 ">
      {isMobile ? (
        <>
          <LogoRights className="flex" />
          <ListFooterAccordion />
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <LogoRights className="flex-col " />
            <FooterGenre />
            <FooterHelp />
          </div>
        </>
      )}
    </div>
  );
}

export default SectionFooter;
