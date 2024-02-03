const valid = document.getElementById("validator");
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = input.value;

  if (userValue.includes("@")) {
    console.log("hello");
  }
});
