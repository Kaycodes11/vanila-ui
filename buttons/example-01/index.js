const dropdown = document.getElementById("drop-text");
const list = document.getElementById("list");
const icon = document.getElementById("icon");
const span = document.getElementById("span");
const input = document.getElementById("search-input");
const listItems = document.querySelectorAll(".dropdown-list-item");

// show dropdown list with icon (rotated) onclick on dropdown btn
dropdown.onclick = function () {
  if (list.classList.contains("show")) {
    icon.style.rotate = "0deg";
  } else {
    icon.style.rotate = "-180deg";
  }

  list.classList.toggle("show");
};

// hide dropdown list when clicked outside dropdown button
window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "span" &&
    e.target.id !== "icon"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    // change dropdown btn text on click on selected list item
    span.innerText = e.target.innerText;

    // change input placeholder based on currently selected list item
    if (e.target.innerText === "Everything") {
      input.placeholder = "Search Anything....";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "....";
    }
  };
}
