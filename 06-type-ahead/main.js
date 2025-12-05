const searchInput = document.querySelector(".search");
const suggestionsUl = document.querySelector(".suggestions");
const cities = [];

async function getData() {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

const data = await getData();
cities.push(...data);

const findMatches = (input) => {
  return cities.filter((location) => {
    const regex = new RegExp(input, "gi");
    return location.city.match(regex) || location.state.match(regex);
  });
};

const hlHelper = (name, currentVal) => {
  const regex = new RegExp(currentVal, "gi");
  return name.replace(regex, `<span class="hl">${currentVal}</span>`);
};

const popFormatter = (pop) => {
  // Inserts commas at positions followed by groups of 3 digits until the end
  return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const displayMatches = (e) => {
  const currentVal = e.currentTarget.value;

  const matchArr = findMatches(currentVal);
  const html = matchArr
    .map((location) => {
      return `
        <li>
          <span class="name">${hlHelper(location.city, currentVal)}, ${hlHelper(location.state, currentVal)}</span>
          <span class="population">${popFormatter(location.population)}</span>
        </li>
      `;
    })
    .join("");
  suggestionsUl.innerHTML = html;
};

searchInput.addEventListener("keyup", displayMatches);
