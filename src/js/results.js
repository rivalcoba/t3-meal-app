import '../assets/results.css'
import pandaImage from "../assets/img/panda.svg";
import rectangleImage from "../assets/img/rectangle9.svg";
console.log("results JS 🤘");

let recipe = "";

// Panda Image
const panda = document.querySelector("#pandaImage");
panda.src = pandaImage;

// Rectangle
const rectangle = document.querySelector("#rectangle");
rectangle.src = rectangleImage;

// Random Button
const randomButton = document.querySelector("#randomButton");

// Blur
const blurModal = document.querySelector(".blurModal");

// Container
const recipeContainer = document.querySelector(".container");

// randomRecipeName
const randomRecipeName = document.querySelector(".randomRecipeName");

// Event listeners for randomButton
randomButton.addEventListener("mouseover", () => {

  // Gets new recipe every time the mouse is over randomButton
  getRandomRecipe().then(function (data) {
    console.log(data);
    recipe = getRecipeName(data);

    randomRecipeName.textContent = recipe;
  });
});

randomButton.addEventListener("click", ()=>{
  window.location.href=`/ingredients.html?s=${recipe}`
 });

// API Helper Functions
function getRandomRecipe() {
  return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(function (response) {
    return response.json();
  });
}

function getRecipeName(data) {
  return data.meals[0].strMeal;
}

