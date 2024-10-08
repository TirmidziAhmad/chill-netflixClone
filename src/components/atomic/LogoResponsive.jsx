import React from "react";

function LogoResponsive() {
  return <img src={window.innerWidth < 768 ? "small logo.png" : "large logo.png"} alt="Your Company Name" className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />;
}

export default LogoResponsive;
