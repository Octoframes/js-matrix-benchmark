import { useState } from "react";
import MatrixImage from "./MatrixImage";
// import myarray1 from "./assets/ct_slice_730_upper_legs_continuous.json";
import mydata from "./assets/ct_slice_1542_teeth_continuousTEST.json.gz";
function MatrixBenchmark() {
  const [mytracker, setMyTracker] = useState(0);
  
  // Create matrices from data
  const matrices_from_data = mydata.data;

  var start = new Date().valueOf();

  // Create an empty matrix to store the result
  const resultMatrix = new Array(360)
    .fill(0)
    .map(() => new Float32Array(360).fill(0));

  // Add each matrix to the result
  for (let matrix of matrices_from_data) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        resultMatrix[i][j] -= Math.floor(matrix[i][j] * 20);
      }
    }
  }
  let duration = new Date().valueOf() - start;
  console.log(resultMatrix);

  function handleClick() {
    setMyTracker(mytracker + 1);
  }

  return (
    <>
      <p>T1 = {duration} ms </p>
      <p>Tracker = {mytracker}</p>
      <button onClick={handleClick}>Restart</button>
      <MatrixImage matrix={resultMatrix} />
    </>
  );
}

export default MatrixBenchmark;