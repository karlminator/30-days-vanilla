const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filter1 = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
  /* OR,
    return inventor.year >= 1500 && inventor.year < 1600;
    */
});
const filter2 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);

console.table(filter2);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const map1 = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(map1);

// Array.prototype.sort()
// !! toSorted() does not mutate !!
// 3. Sort the inventors by birthdate, oldest to youngest

const sort1 = inventors.toSorted((a, b) => a.year - b.year);
console.table(sort1);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const reduce1 = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(`Total years:${reduce1}`);

// 5. Sort the inventors by years lived

const oldest1 = inventors.toSorted((a, b) => b.passed - b.year - (a.passed - a.year));

const oldest2 = inventors.toSorted((a, b) => {
  const yearsA = a.passed - a.year;
  const yearsB = b.passed - b.year;
  return yearsB - yearsA; // descending order
});
console.table(oldest1);
console.table(oldest2);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Test by running in the console on the wiki-page
const boulevards = [...document.querySelectorAll(".mw-category a")] // Spreads NodeList into an array - selects all <a> tags that are descendants of elements with class "mw-category"
  .map((boulevard) => boulevard.textContent) // Maps the textContent from all <a> tags.
  .filter((name) => name.includes("de")); // Filter out names that don't have "de".

// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha1 = people.toSorted((a, b) => {
  const [aLast] = a.split(", ");
  const [bLast] = b.split(", ");
  return aLast.localeCompare(bLast); // Handles all cases, case-insensitive options
});

const alpha2 = people.toSorted((a, b) => a.split(", ")[0].localeCompare(b.split(", ")[0]));
//                                       │              │                │
//                                       │              │                └─ Split "b" and get element at index 0, [0] = last name
//                                       │              └─ localeCompare() compares the two strings
//                                       └─ Split "a" and get element at index 0, [0] = last name
console.log(alpha2);

// 8. Reduce Exercise
// Sum up the instances of each of "data"

const dataSum1 = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});

const dataSum2 = data.reduce((obj, item) => ((obj[item] = (obj[item] || 0) + 1), obj), {});

console.log(dataSum2);
