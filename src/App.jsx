import { useState, useEffect } from "react";
import pako from 'pako';
import MatrixBenchmark from "./MatrixBenchmark";
import "./App.css";

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetch("ct_slice_69_feet.json.gzip")
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        // Decompress the data using pako
        const decompressedData = pako.inflate(new Uint8Array(buffer), { to: 'string' });
        return JSON.parse(decompressedData);
      })
      .then((data) => setTestData(data))
      .catch((error) => console.error("There was an error!", error));
  }, []);


//   name = "ct_slice_69_feet.png"

// # name = "ct_slice_730_upper_legs.png"
// # name = "ct_slice_1342_breast.png"
// # name = "ct_slice_1542_teeth.png"

  console.log(testData);

  return (
    <div>
      {/* {testData && <pre>{JSON.stringify(testData, null, 2)}</pre>} */}
      hi!
      <MatrixBenchmark uncompressedData={testData} />
    </div>
  );
}

export default App;
