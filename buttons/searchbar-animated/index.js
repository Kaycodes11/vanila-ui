const input = document.querySelector("#search-input");
const clearIcon = document.querySelector(".clear-icon");
const searchIcon = document.querySelector(".search-icon");
const form = document.getElementById("form");

input.addEventListener("keydown", function (event) {
  // if there're any text in input field only then clear icon should appear
  clearIcon.classList.add("active");

  // Hide clear icon when remove text by using "Backspace"
  if (
    (event.code === "Backspace" && input.value.length === 1) ||
    (event.code === "Backspace" && input.value.length === 0)
  ) {
    clearIcon.classList.remove("active");
  }
  if (event.code === "Enter" && input.value === "") {
    event.preventDefault();
    clearIcon.classList.remove("active");
  }

  if (event.code === "Enter" && input.value !== "") search();
});

const search = () => {
  // adding "active class" to input field to give it width of 500px
  input.classList.add("active");

  if (input.value !== "") {
    form.action = "https://www.google.com/search";
    searchIcon.type = "submit";
  }
};

// set value to default when clicked this icon
clearIcon.onclick = function () {
  input.value = "";
  form.action = "";
  searchIcon.type = "button";
  clearIcon.classList.remove("active");
  input.classList.remove("active");
};
