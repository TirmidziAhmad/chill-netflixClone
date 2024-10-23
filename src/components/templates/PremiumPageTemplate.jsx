import SectionBenefit from "../organism/SectionBenefit";
import NavBar from "../organism/NavBar";
import SectionPremiumPacket from "../organism/SectionPremiumPacket";
import Footer from "../organism/SectionFooter";
function PremiumPageTemplate() {
  return (
    <>
      <NavBar />
      <div className="mx-14">
        {" "}
        <p className="text-center items-center text-xl font-bold my-7">Kenapa Harus Berlangganan?</p>
        <SectionBenefit />
        <SectionPremiumPacket />
        <Footer />
      </div>
    </>
  );
}

export default PremiumPageTemplate;
