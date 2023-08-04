import React, { useEffect, useRef, useState } from "react";
import scanner from "./scanner.png";

import MyWorker from "./worker?worker";

const myWorker = new MyWorker();

const WorkerComponent = () => {
  const [inputValue, setInputValue] = useState("heyyy");
  const [isWorkerBusy, setIsWorkerBusy] = useState(false);
  const [latestValue, setLatestValue] = useState(null);
  const [lastPostedValue, setLastPostedValue] = useState(null);
  const [workerOutput, setWorkerOutput] = useState("");

  // This function runs every time the inputValue state changes
  useEffect(() => {
    setLatestValue(inputValue);
    console.log("Main start worker");
    console.log(isWorkerBusy);
    if (!isWorkerBusy) {
      console.log("Main post message");
      myWorker.postMessage(inputValue);
      setLastPostedValue(inputValue);
      setIsWorkerBusy(true);
    }
  }, [inputValue]);

  useEffect(() => {
    myWorker.onmessage = (e) => {
      console.log("Message received from worker", e.data);
      setWorkerOutput(e.data);

      // The worker has finished processing, it's not busy anymore
      setIsWorkerBusy(false);

      // If the latest value has changed since we last posted to the worker,
      //         // post the latest value to the worker.
      if (lastPostedValue !== latestValue) {
        setIsWorkerBusy(true);
        setLastPostedValue(latestValue);
        myWorker.postMessage(latestValue);
      }
    };

    //     // Cleanup function to terminate worker when the component unmounts
    //     return () => {
    //         myWorker.terminate();
    //     };
  }, [latestValue, lastPostedValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [rotateDegree, setRotateDegree] = useState(0);
  const imageRef = useRef(null);

  const calculateRotation = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - y, e.clientX - x);
    const deg = rad * (180 / Math.PI) + 180;

    setRotateDegree(deg);
  };

  const handleMouseDown = (e) => {
    calculateRotation(e);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      calculateRotation(e);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <h1>{workerOutput}</h1>
      <div className="background-left">
        <img
          id="centered-image"
          ref={imageRef}
          src={scanner}
          alt="scanner"
          style={{ transform: `rotate(${rotateDegree}deg)` }}
          onMouseDown={handleMouseDown}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default WorkerComponent;
