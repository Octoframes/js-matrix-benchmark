export function hello(name) {
    for (let i = 0; i < 5e8; i++) {}
    let date = new Date();
    let currentTime = `${date.getSeconds()}.${date.getMilliseconds()} seconds`;
    // return `Hello, ${name}! Time: ${currentTime}`;
  }
  