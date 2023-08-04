import React, { useEffect, useRef, useState } from 'react';
import MyWorker from './worker?worker'

const worker = new MyWorker()

const WorkerComponent = () => {
    
    worker.postMessage("hi");

    return (
        <div>
            <h1>Worker Component</h1>
        </div>
    );
};

export default WorkerComponent;
