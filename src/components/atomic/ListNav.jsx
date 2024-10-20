import React from "react";
import { Link } from "react-router-dom";
function NavList({ navItems }) {
  return (
    <div className="container ml-12 flex justify-between items-center">
      <ul className="flex gap-14">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <li className="flex">{item.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
