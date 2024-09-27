import React from "react";
import IntroHeaderText from "../atomic/IntroHeaderText";
import Logo from "../atomic/Logo";
function IntroHeader() {
  return (
    <>
      <Logo></Logo> <IntroHeaderText firstText="test" secondText="tes" />
    </>
  );
}

export default IntroHeader;
