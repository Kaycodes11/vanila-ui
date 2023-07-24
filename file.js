document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputFile").addEventListener("change", filesPicked);

  document.getElementById("btnToggle").addEventListener("click", toggleInput);
  document.getElementById("btnPick").addEventListener("click", askForFiles);
  document.getElementById("btnInfo").addEventListener("click", showFileInfo);
});

function filesPicked(event) {
  //any time one or more files are picked in the file picker dialog
  let input = event.target;
  let files = input.files;
  console.log({ files });
  if (files.length > 0) {
    showFileInfo(event);
    // upload a file or files to a web server/api
    let url = "https://jsonplaceholder.typicode.com/users";
    // let h = new Headers();
    // h.append("content-type", files[0].type);
    // h.append("content-length", files[0].size);
    // "Content-disposition", "Multipart/Form-Data"

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`files-${i}`, files[i], files[i].name);
    }

    let request = new Request(url, {
      body: files[0],
      //   headers: h,
      mode: "no-cors",
      method: "POST",
    });
    fetch(request)
      .then((response) => {
        console.log(response.status);
      })
      .catch(console.warn);
  }
}

function toggleInput(ev) {
  //hide or show the <input type="file">
  ev.preventDefault();
  let control = document.getElementById("inputFile").parentElement;
  //we want to apply this class to the parent
  control.classList.toggle("hidden");
}

function askForFiles(ev) {
  //open the file picker dialog
  ev.preventDefault();
  let control = document.getElementById("inputFile");
  control.click();
}

function showFileInfo(ev) {
  if (ev.type == "click") ev.preventDefault();
  //loop through all the files in the fileList
  //and display the name, size, type, and lastModified date
  let files = document.getElementById("inputFile").files;
  let len = files.length;
  for (let i = 0; i < len; i++) {
    console.group();
    console.log(files[i].name);
    console.log(files[i].size);
    console.log(files[i].type);
    console.log(files[i].lastModified);
    console.groupEnd();
  }
}
