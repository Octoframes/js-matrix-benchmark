
self.onmessage = function (e) {

  // console.log("Message received " + e.data);


  const startTime = new Date().getTime(); // Record the start time

  for (let i = 0; i < 20e8; i++) {}

  const endTime = new Date().getTime(); // Record the end time


  const timeTaken = endTime - startTime;
  const currentTime = `${timeTaken} ms`;

  const workerResult = "Result: " + e.data + " " + currentTime;
  console.log(workerResult);
  postMessage(workerResult);

};
