import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";

function DropDownList() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const DropDownItems = [
    { path: "/profile", label: "Profile Saya", icon: "" },
    { path: "/premium", label: "Ubah Premium", icon: "" },
    { label: "Keluar", icon: "" }, // Remove the path for logout
  ];

  function toggleDropDown() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setIsOpen(false);
    if (item.path) {
      navigate(item.path);
    } else {
      // This is the logout option
      logout();
      navigate("/login");
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center justify-center h-full">
        <button onClick={toggleDropDown} className="flex items-center justify-center" aria-haspopup="true" aria-expanded={isOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-slate-500 rounded-lg shadow-lg z-10">
          {DropDownItems.map((item) => (
            <button key={item.label} className="flex flex-col px-4 py-2 text-white hover:bg-slate-600 w-full text-left" onClick={() => handleItemClick(item)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownList;
