import { useState } from "react";
import MatrixImage from "./MatrixImage";

function MatrixBenchmark() {
  const [mytracker, setMyTracker] = useState(0);

  // Function to generate a single random matrix
  function generateRandomMatrix(rows, cols) {
    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
      const row = new Float32Array(cols);
      for (let j = 0; j < cols; j++) {
        row[j] = Math.random();
      }
      matrix[i] = row;
    }
    return matrix;
  }

  // Generate 20 random matrices
  const matrices = new Array(20);
  for (let i = 0; i < matrices.length; i++) {
    matrices[i] = generateRandomMatrix(360, 360);
  }

  var start = new Date().valueOf();

  // Create an empty matrix to store the result
  const resultMatrix = new Array(360).fill(0).map(() => new Float32Array(360).fill(0));

  // Add each matrix to the result
  for (let matrix of matrices) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        resultMatrix[i][j] += matrix[i][j]*10;
      }
    }
  }
  let duration = new Date().valueOf() - start;




  console.log(resultMatrix)

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
