import React, { useEffect, useRef, useState } from 'react';
import MyWorker from './worker?worker'

const WorkerComponent = () => {
    const myWorker = new MyWorker()
    const [inputValue, setInputValue] = useState('heyyyyyy');

    // Event handler for input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log('inputValue', inputValue);
        myWorker.postMessage(inputValue)
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue} 
                onChange={handleInputChange}
            />
        </div>
    );
};

export default WorkerComponent;
