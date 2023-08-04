import React, { useEffect, useState } from "react";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

const createWorker = createWorkerFactory(() => import("./worker"));

function Home() {

  const worker = useWorker(createWorker);
  const [message, setMessage] = React.useState(null);
  const [myValue, setMyValue] = useState("");
  // const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    (async () => {
      // Note: in your actual app code, make sure to check if Home
      // is still mounted before setting state asynchronously!
      const webWorkerMessage = await worker.hello(myValue);
      setMessage(webWorkerMessage);
    })();
  }, [worker]);

  useEffect(() => {
    console.log("myValue", myValue);
  }, [myValue]);

  return (
    <>
      <input value={myValue} onChange={(e) => setMyValue(e.target.value)} />
      <h1> {message} </h1>
    </>
  );
}

export default Home;


// import {useState } from "react";
// function slowFunction() {
//   for (let i = 0; i < 5e8; i++) {}
// }
// function SlowComponent({ value }) {
//   slowFunction();
//   return <h1>Slow Component {value} </h1>;
// }
// export default function App() {
//   const [myValue, setMyValue] = useState("");
//   return (
//     <>
//       <label>
//         My fast input:
//         <input value={myValue} onChange={(e) => setMyValue(e.target.value)} />
//       </label>
//       <SlowComponent value={myValue} />
//     </>
//   );
// }
