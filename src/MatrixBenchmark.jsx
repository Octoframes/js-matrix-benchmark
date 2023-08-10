// import { useState, useEffect } from "react";
// import MatrixImage from "./MatrixImage";
// import pako from 'pako';

// function MatrixBenchmark() {
//   const [mytracker, setMyTracker] = useState(0);

//   // Create matrices from data
//   const [mydata, setMyData] = useState(null);

//   useEffect(() => {
//     fetch('./assets/ct_slice_1542_teeth_continuousTEST.json.gz')
//       .then((response) => response.arrayBuffer())
//       .then((buffer) => {
//         // Decompress the data using pako
//         const decompressedData = pako.inflate(buffer, { to: 'string' });
//         return JSON.parse(decompressedData);
//       })
//       .then((jsonData) => {
//         setMyData(jsonData);
//       })
//       .catch((error) => {
//         console.error('An error occurred:', error);
//       });
//   }, []); // Empty dependency array to run only on mount

//   // The following logic should be moved inside the return statement
//   // or wrapped with a condition to ensure that mydata is not null

//   let duration;
//   let resultMatrix;

//   if (mydata) {
//     console.log(mydata);
//     const matrices_from_data = mydata;

//     var start = new Date().valueOf();

//     // Create an empty matrix to store the result
//     resultMatrix = new Array(360)
//       .fill(0)
//       .map(() => new Float32Array(360).fill(0));

//     // Add each matrix to the result
//     for (let matrix of matrices_from_data) {
//       for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//           resultMatrix[i][j] -= Math.floor(matrix[i][j] * 20);
//         }
//       }
//     }
//     duration = new Date().valueOf() - start;
//     console.log(resultMatrix);
//   }

//   function handleClick() {
//     setMyTracker(mytracker + 1);
//   }

//   return (
//     <>
//       {mydata ? (
//         <>
//           <p>T1 = {duration} ms </p>
//           <p>Tracker = {mytracker}</p>
//           <button onClick={handleClick}>Restart</button>
//           <MatrixImage matrix={resultMatrix} />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default MatrixBenchmark;
