// Arrays that define parts of the excuse
let who = ["the dog", "my grandma", "his turtle", "my bird"];
let what = ["ate", "pissed on", "crushed", "broke"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

// Function to generate a random excuse
function generateExcuse() {
  // Randomly select an element from each array
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  // Create the excuse by combining the elements
  let randomExcuse =
    who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];

  // Display the generated excuse on the page
  document.getElementById("generated-excuse").innerText = randomExcuse;

  // Log the excuse to the console as well
  console.log(randomExcuse);
}
