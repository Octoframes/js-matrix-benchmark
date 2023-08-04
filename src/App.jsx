import React, { useEffect, useRef, useState } from 'react';

// Assuming that worker.js is in public directory
const myWorker = new Worker('./worker.js');

const WorkerComponent = () => {
    const [inputValue, setInputValue] = useState('heyyy');
    const [isWorkerBusy, setIsWorkerBusy] = useState(false);
    const [latestValue, setLatestValue] = useState(null);
    const [lastPostedValue, setLastPostedValue] = useState(null);
    const [workerOutput, setWorkerOutput] = useState('');

    // This function runs every time the inputValue state changes
    useEffect(() => {
        setLatestValue(inputValue);
        console.log('Main start worker');
        console.log(isWorkerBusy)
        if (!isWorkerBusy) {
          console.log('Main post message');
          myWorker.postMessage(inputValue);
          setLastPostedValue(inputValue);
        //   setIsWorkerBusy(true);
        }
    }, [inputValue]);


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
