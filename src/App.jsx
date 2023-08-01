import logo from "./scanner.png";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [dX, setDX] = useState(0);
  const [dY, setDY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [faceLeft, setFaceLeft] = useState(0);
  const [faceTop, setFaceTop] = useState(0);

  const faceRef = useRef(null);

  useEffect(() => {
    if (faceRef.current) {
      setFaceLeft(faceRef.current.offsetLeft + faceRef.current.offsetWidth / 2);
      setFaceTop(faceRef.current.offsetTop + faceRef.current.offsetHeight / 2);
    }
  }, [faceRef]);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);

    let newDX = event.clientX - faceLeft;
    let newDY = event.clientY - faceTop;

    setDX(newDX);
    setDY(newDY);

    let degree = (Math.atan(-newDX / newDY) * 180) / Math.PI + 90;

    if (newDY > 0) {
      degree += 180;
    }

    setRotation(degree);

    if (faceRef.current) {
      faceRef.current.style.transform = "rotate(" + degree + "deg)";
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, grey,black)",
        minHeight: "70vh",
        paddingTop: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <div>
          <img
            ref={faceRef}
            id="bigFace"
            src={logo}
            width="20%"
            style={{ margin: "10%" }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
