/*
new Blob([ data ], {type:"text/plain", endings: "transparent"||"native"})
new File([ data ], filename, {type:"text/plain", lastModified: Date.now()})
(data - Blob, ArrayBuffer, TypedArray, DataView, String (utf-8 string), a mixture)

# File is a sub-class of Blob. Can often be used interchangeably. 
Once you have a Blob/File then you can use it:
- upload via fetch as a file or stream
- save it in the cache
- add a link in a webpage to the file
- display it as an image (if image)
- read the text contents (json, txt, html...) and:
  - display on page
  - parse the html, xml, json, etc
  - save in localStorage or cookie

ArrayBuffer - raw data as a fixed-length string of bytes. It is NOT an Array.

DataView - an interpretation of some raw bytes expressed as 8-bit, 16-bit, 32-bit,
  or 64-bit integers. Used to add or edit data in an ArrayBuffer. Like a wrapper 
  for ArrayBuffers if you need to edit them. It is a View of the Data from the ArrayBuffer

TypedArray - It is an Array-like view of raw bytes stored as 
  8-bit, 16-bit, 32-bit or 64-bit  integers, clamped integers, 
  signed and unsigned integers, or floats. 
*/

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnGo").addEventListener("click", createBlob);
});

function createBlob(ev) {
  ev.preventDefault();
  // first, create an ArrayBuffer with the required size; 2 bytes = 16 bits
  // ArrayBuffer keep its given bytes separate like here first look at 1 byte then next 1 byte
  let ab = new ArrayBuffer(2);
  // now, since DataView used 2 bytes ArrayBuffer, then it can have two numbers between 0-255
  // whereas, DataView can look at all the given bytes like here look at 2 Bytes at once
  let dataview = new DataView(ab); // 1 byte = 0 - 255 (without +, -, /, *)

  // to change/write the content of ArrayBuffer; use dataview as below
  dataview.setInt8(0, 104); // position, value = (0, 'h')
  dataview.setInt8(1, 105); //position, value = (0, 'i')

  // now after the value at the required position, take a look if it has set properly
  // This is an unassigned array that only holds 1 Bytes (8 bits) numbers i.e. 0 - 255
  console.log("dataview has been set", new Uint8Array(ab).toString());

  // new Blob([ Blob, ArrayBuffer, TypedArray, DataView, String(utf-8) ])
  let b = new Blob([ab]);
  console.log("blob made an ArrayBuffer", b);

  // new File([ Blob, ArrayBuffer, TypedArray, DataView, String(utf-8) ])
  let f = new File([ab], "myinfo.txt", { type: "text/plain" });
  console.log("file made with ArrayBuffer", f);

  
  // use blob to sent it to server, create link, display on the web, parse it, store in the cache, or save within the localStorage
  // here, creating a link from blob i.e. f by using createObjectURL(f)
  let url = URL.createObjectURL(f);
  console.log(url);
  let a = document.createElement("a");
  a.href = url;
  a.download = f.name;
  a.textContent = `Download ${f.name}`;
  document.querySelector("main").append(a);
}
