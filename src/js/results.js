import '../assets/results.css'
import pandaImage from "../assets/img/panda.svg";
import rectangleImage from "../assets/img/rectangle9.svg";
console.log("results JS 🤘");

// Panda Image
const panda = document.querySelector("#pandaImage");
panda.src = pandaImage;

// Rectangle
const rectangle = document.querySelector("#rectangle");
rectangle.src = rectangleImage;

const randomButton = document.querySelector("#randomButton");
const blurModal = document.querySelector(".blurModal");

const recipeContainer = document.querySelector(".container");

randomButton.addEventListener("mouseover", () => {
  blurModal.style.display = "block";
});

randomButton.addEventListener("mouseout", () => {
  blurModal.style.display = "none";
});