import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function LogoResponsive() {
  const [logoSrc, setLogoSrc] = useState("Logo.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogoSrc("LogoMobile.png");
      } else {
        setLogoSrc("Logo.png");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <figure className="flex">
      <Link to={"/"}>
        <img src={logoSrc} alt="Logo" className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
      </Link>
    </figure>
  );
}

export default LogoResponsive;
