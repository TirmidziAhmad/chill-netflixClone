import React from "react";
import NavMenu from "../molecules/NavMenu";
import NavProfile from "../molecules/NavProfile";

function NavBar() {
  return (
    <nav className="px-4 lg:px-14 py-3 flex justify-between items-center bg-[#181A1C]">
      <NavMenu />
      <NavProfile />
    </nav>
  );
}

export default NavBar;
