import React, { useEffect, useRef, useState } from "react";
import MyWorker from "./worker?worker";

const WorkerComponent = () => {
  const myWorker = new MyWorker();
  const [inputValue, setInputValue] = useState("heyyy");
  const [isWorkerBusy, setIsWorkerBusy] = useState(false);
  const [latestValue, setLatestValue] = useState(null);
  const [lastPostedValue, setLastPostedValue] = useState(null);
  const [workerOutput, setWorkerOutput] = useState("");

  useEffect(() => {
    setLatestValue(inputValue);
    // console.log("Main start worker");
    // console.log(isWorkerBusy);
    if (!isWorkerBusy) {
    //   console.log("Main post message");
      myWorker.postMessage(inputValue);
      setLastPostedValue(inputValue);
    //   setIsWorkerBusy(true);
    }
  }, [inputValue]);


  useEffect(() => {
    myWorker.onmessage = (e) => {
    //   console.log("Message received from worker", e.data);
      setWorkerOutput(e.data);
    //   setIsWorkerBusy(false);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <h1>{workerOutput}</h1>
    </div>
  );
};

export default WorkerComponent;
