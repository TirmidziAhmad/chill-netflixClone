import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function DropDownList() {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownItems = [
    { label: "/profile", name: "Profile Saya", icon: "" },
    { label: "/premium", name: "Ubah Premium", icon: "" },
    { label: "/logout", name: "Keluar", icon: "" },
  ];

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative">
      <button onClick={toggleDropDown} className="text-black">
        test
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-slate-500 rounded-lg shadow-lg ">
          {DropDownItems.map((DropDownItem) => (
            <Link to={DropDownItem.label} key={DropDownItem.label} className="inline-block relative">
              {DropDownItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownList;
