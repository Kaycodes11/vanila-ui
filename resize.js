const container = document.querySelector(".container");

const observer = new ResizeObserver((items) => {
  // console.info(items);
  const containerWidth = Math.ceil(items[0].contentRect.width); // realtime width when shrink/grow
  // console.log(containerWidth);
  if (containerWidth < 400) {
    items[0].target.style.backgroundColor = "red";
  } else {
    items[0].target.style.backgroundColor = "#212121";
  }
});

observer.observe(container);
