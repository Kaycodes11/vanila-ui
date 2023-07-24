onmessage = function (message) {
  // this will take some time therefore it will keep the main thread of execution blocked
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  postMessage(sum);
};
