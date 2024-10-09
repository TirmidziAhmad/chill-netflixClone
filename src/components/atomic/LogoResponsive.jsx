import React from "react";

function LogoResponsive() {
  return (
    <figure className="flex">
      <img src={window.innerWidth < 768 ? "small logo.png" : "large logo.png"} alt="Logo" className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
    </figure>
  );
}

export default LogoResponsive;
