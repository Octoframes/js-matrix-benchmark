export function hello(name) {
    for (let i = 0; i < 10e8; i++) {}
    let date = new Date();
    let currentTime = `${date.getSeconds()}.${date.getMilliseconds()} sec`;
    return `Val: ${name}!  Time: ${currentTime}`;
  }
  