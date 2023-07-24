/*
new Response(body, {
  status: 200,
  statusText: 'All good',
  headers: {
    'x-my-header': 'some value',
  }
});

body - Blob, File, ArrayBuffer, TypedArray, DataView, FormData, String, 
ReadableStream, URLSearchParams
*/

document.addEventListener("DOMContentLoaded", () => {
  //when the page is ready...
  createJSONResponse();

  createImageResponse();
});

async function createJSONResponse() {
  //create an object, convert to JSON and create a file from json & send it in a Response
  const myobj = {
    id: 123,
    name: "Sheldon",
  };
  let json = JSON.stringify(myobj);
  let file = new File([json], "mydata.json", { type: "application/json" });
  console.log(file);
  const response = new Response(file, {
    status: 200,
    statusText: "All good",
    headers: {
      "x-my-header": "some value",
      "content-type": file.type,
      "content-length": file.size,
    },
  });
  console.log(response);

  const copy = response.clone();
  console.log(copy);
  let contents = await copy.json();
  console.log({ contents });
}

function createImageResponse() {
  //load a local image and put it in a Response
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", async (ev) => {
    let input = ev.target;
    let file = input.files[0];
    let response = new Response(file, {
      status: 200,
      statusText: "ok",
      headers: {
        "content-type": file.type,
        "content-length": file.size,
      },
    });
    let copy = response.clone();
    console.log(copy);
    //get image from response by using blob() since u can't extract an image with .json()
    let blob = await copy.blob();
    //add to <a href>
    let url = URL.createObjectURL(blob);
    console.log(url);
  });
  document.body.addEventListener("click", (ev) => {
    input.click();
  });
}
