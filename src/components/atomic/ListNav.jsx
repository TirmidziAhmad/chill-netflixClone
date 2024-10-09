import React from "react";
import { Link } from "react-router-dom";
function NavList() {
  const navItems = [
    { label: "Series", path: "/" },
    { label: "Film", path: "/login" },
    { label: "Daftar Saya", path: "/register" },
  ];

  return (
    <div className="container ml-3 flex justify-between items-center">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <Link to={item.path}>
            <li key={item.label} className="flex">
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
