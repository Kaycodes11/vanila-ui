const cards = document.querySelectorAll(".card");

// # IntersectionObserver run its logic when the given element starts "intersecting"
const observer = new IntersectionObserver(
  (entries, o) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      // observer.unobserve(entry.target); // access to the element which is being observed

      // entry.target's intersection "status changes only when scroll in/out of the viewport"
      // by default, when 1 pixel of observed element is seen on viewport, that's when entry.intersecting begin

      // const intersecting = entry.isIntersecting;

      // this "show" class will be added onto entry.target if entry.isIntersecting is true
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  // 0 = when element just about to be visible; element will be considered "intersecting"
  // 1 = when the element is full visible; element will be considered "intersecting"
  // rootMargin = it increase/shrink the container, & when increased elements that're not in view would be already be rendered before scrolling in while if shrunk then some elements won't show due to use of rootMargin
  // positive rootMargin could be used to load a few extra elements before scrolling in to those

  // root = basically using the observer on its parent rather than observed element
  // usage = while card observer doing one task (togging "show"); use another server on parent to do something else as needed

  { threshold: 0, rootMargin: "100px" }
);

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) {
    return;
  }
  loadNewCards(lastCard);
}, {});

lastCardObserver.observe(document.querySelector(".card:last-child"));

// now, observe the intersection "status changes" for the element with id "test"
// intersection status changes only "when scroll in/out of the viewport"
cards.forEach((card) => {
  observer.observe(card); // this.card is the entry.target
});

// observer.unobserve(document.getElementById("test"))

function loadNewCards(lastCard) {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    document.querySelector(".card-container").append(card);
  }
  // since new cards has added so unobserve previous
  lastCardObserver.unobserve(lastCard.target);
  // now observe the last element of new cards
  lastCardObserver.observe(document.querySelector(".card:last-child"));
}