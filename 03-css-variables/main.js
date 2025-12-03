const inputs = document.querySelectorAll(".controls input");

// Arrow functions don't have their own "this" - they inherit it from the parent scope.
// In a regular function, "this" would refer to the element that triggered the event.
// Here we use "e.currentTarget" instead to access the input element.
const hdlUpd = (e) => {
  const obj = e.currentTarget;
  const suffix = obj.dataset.sizing || "";

  document.documentElement.style.setProperty(`--${obj.name}`, obj.value + suffix);
};

inputs.forEach((input) => input.addEventListener("change", hdlUpd));
inputs.forEach((input) => input.addEventListener("mousemove", hdlUpd));
