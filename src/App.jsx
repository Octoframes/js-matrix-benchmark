import React, { useState, useRef } from "react";
import logo from "./scanner.png";

const App = () => {
  const [rotateDegree, setRotateDegree] = useState(0);
  const imgRef = useRef(null);

  const handleMouseDown = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - y, e.clientX - x);
    const deg = rad * (180 / Math.PI) +180;

    setRotateDegree(deg);
  };

  console.log(rotateDegree);
  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // if mouse button is pressed
      handleMouseDown(e);
    }
  };

  return (
    <img
      ref={imgRef}
      src={logo}
      alt="scanner"
      style={{ transform: `rotate(${rotateDegree}deg)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      draggable={false}
    />
  );
};

export default App;
