import React from "react";

function ButtonSlider({ onClick }) {
  return (
    <button onClick={onClick} className="absolute left-0 z-10 bg-gray-700 p-2 rounded-full top-1/2 transform -translate-y-1/2 transition duration-300 ease-in-out hover:bg-gray-600">
      ButtonSlider
    </button>
  );
}

export default ButtonSlider;
