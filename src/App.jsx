import React from "react";
import IntroHeader from "./components/molecules/IntroHeader";
import IntroForm from "./components/molecules/IntroForm";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <div className="w-full h-full bg-black">
        <IntroHeader></IntroHeader>
      </div>
    </div>
  );
}

export default App;
