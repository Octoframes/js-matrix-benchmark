import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MatrixBenchmark from "./MatrixBenchmark.jsx";

const App = () => {
  const [rotation, setRotation] = useState(0);
  const imgRef = useRef(null);
  let mouseDown = false;

  const handleMouseDown = () => {
    mouseDown = true;
  };

  const handleMouseUp = () => {
    mouseDown = false;
  };

  const handleMouseMove = (event) => {
    if (!mouseDown) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rad = Math.atan2(y, x);
    const deg = rad * (180 / Math.PI) + 270;

    setRotation(deg);
  };

  const handleClick = (event) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rad = Math.atan2(y, x);
    const deg = rad * (180 / Math.PI + 180);

    setRotation(deg);
  };

  return (
    <div className="App">
      <img
        src="src/scanner.png"
        draggable="false"
        alt="scanner"
        style={{ transform: `rotate(${rotation}deg)` }}
        ref={imgRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />
      <h1>Hello, world!</h1>
      <MatrixBenchmark />
    </div>
  );
};

export default App;
