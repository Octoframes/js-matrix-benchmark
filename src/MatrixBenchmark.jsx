function MatrixBenchmark() {
  var start = new Date().valueOf();

  //   console.log("MatrixBenchmark");

  // Function to generate a single random matrix
  function generateRandomMatrix(rows, cols, maxVal) {
    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
      const row = new Int8Array(cols);
      for (let j = 0; j < cols; j++) {
        row[j] = Math.floor(Math.random() * maxVal);
      }
      matrix[i] = row;
    }
    return matrix;
  }

  // Generate 20 random matrices
  const matrices = new Array(20);
  for (let i = 0; i < matrices.length; i++) {
    matrices[i] = generateRandomMatrix(360, 360, 128);
  }

  let duration = new Date().valueOf() - start;

  return <p>T1 = {duration} ms </p>;
}

export default MatrixBenchmark;
