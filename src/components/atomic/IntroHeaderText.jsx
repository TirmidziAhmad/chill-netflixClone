import React from "react";

function IntroHeaderText({ firstText, secondText }) {
  return (
    <div className="text-center text-white">
      <p className=" text-2xl">{firstText}</p>
      <p>{secondText}</p>
    </div>
  );
}

export default IntroHeaderText;
