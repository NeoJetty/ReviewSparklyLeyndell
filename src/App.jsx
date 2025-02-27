import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import img1 from "./assets/AET220_803_a.jpg";
import img2 from "./assets/AET270_023_a.jpg";

const App = () => {
  const [sliderValue, setSliderValue] = useState(0.5); // 0 (left) to 1 (right)

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "600px",
        display: "flex", // Centering
        margin: "20px", // Ensures centering in larger containers
      }}
    >
      <ReactCompareImage
        leftImage={img1}
        rightImage={img2}
        sliderPositionPercentage={sliderValue}
        onSliderPositionChange={setSliderValue}
      />
      {/* Left Text (Fades Out as Slider Moves Right) */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "18px",
          opacity: sliderValue, // Fades out when moving right
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        Leyndell
        <br />
        AET220_803_a
      </div>

      {/* Right Text (Fades In as Slider Moves Right) */}
      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "18px",
          opacity: 1 - sliderValue, // Fades in when moving right
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        Mt. Gelmir
        <br />
        AET270_023_a
      </div>
    </div>
  );
};

export default App;
