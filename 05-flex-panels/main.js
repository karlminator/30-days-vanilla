const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

const arrowToggleOpen = (e) => {
  const isOpen = e.currentTarget.classList.contains("open-active");
  panels.forEach((panel) => panel.classList.remove("open", "open-active"));

  if (!isOpen) {
    e.currentTarget.classList.add("open-active");
    // make the transitions happen after each other, staggered animation.
    e.currentTarget.addEventListener("transitionend", function handler(e) {
      e.currentTarget.classList.add("open");
      e.currentTarget.removeEventListener("transitionend", handler);
    });
  }
};

panels.forEach((panel) => panel.addEventListener("click", arrowToggleOpen));
