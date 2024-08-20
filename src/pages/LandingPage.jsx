import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HeroSection from "../components/Hero";
import TopRating from "../components/TopRating";
import Continue from "../components/Continue";
import NewRelease from "../components/NewRelease";
import Trending from "../components/Trending";
function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Continue />
      <TopRating />
      <Trending />
      <NewRelease />
      <Footer />
    </>
  );
}

export default LandingPage;
