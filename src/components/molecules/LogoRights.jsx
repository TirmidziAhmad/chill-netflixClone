import React from "react";
import Logo from "../atomic/Logo";
function LogoRights(className) {
  return (
    <div className={` ${className}`}>
      <Logo className={"pb-5"} />
      <p>@2023 Chill All Rights Reserved.</p>
    </div>
  );
}

export default LogoRights;
