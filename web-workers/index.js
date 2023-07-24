const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

sumButton.addEventListener("click", function () {
  worker.postMessage("hello, worker");
});

worker.onmessage = function(message) {
    console.log(message.data);
}

bgButton.addEventListener("click", function () {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
