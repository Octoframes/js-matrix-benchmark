// function hello() {
//     let name = "foo"
//     for (let i = 0; i < 10e8; i++) {}
//     let date = new Date();
//     let currentTime = `${date.getSeconds()}.${date.getMilliseconds()} sec`;
//     return `Val: ${name}!  Time: ${currentTime}`;
//   }

self.onmessage = function (e) {
  console.log("Message received from main script");
  for (let i = 0; i < 50e8; i++) {}
  var workerResult = "Result: " + e.data;
  console.log("Posting message back to main script");
  let date = new Date();
  let currentTime = `${date.getSeconds()}.${date.getMilliseconds()} sec`;

  postMessage(currentTime);
};



// export function hello(name) {
//   for (let i = 0; i < 10e8; i++) {}
//   let date = new Date();
//   let currentTime = `${date.getSeconds()}.${date.getMilliseconds()} sec`;
//   return `Val: ${name}!  Time: ${currentTime}`;
// }
