import '../assets/results.css'
console.log("results JS 🤘");

const randomButton = document.querySelector("#randomButton");
const blurModal = document.querySelector(".blurModal");

const recipeContainer = document.querySelector(".container");

randomButton.addEventListener("mouseover", () => {
  blurModal.style.display = "block";
});

randomButton.addEventListener("mouseout", () => {
  blurModal.style.display = "none";
});