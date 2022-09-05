import '../assets/results.css'
import pandaImage from "../assets/img/panda.svg";
import rectangleImage from "../assets/img/rectangle9.svg";

// Referencia a la caja de busqueda
const stringSearch = document.querySelector("#inputMeal");
let sugContainer = document.querySelector(".container");
// Variables de busqueda
let terminoBusqueda;
let sugerenciasArray = [];

// Verificando si hay busqueda en query
let search = window.location.search ? window.location.search.split("=")[1] : "";
traerSugerencias();

stringSearch.addEventListener("input", function leerBusqueda(event) {
  terminoBusqueda = event.target.value;
  imprimirSugerencia(terminoBusqueda);
});

function imprimirSugerencia(terminoBusqueda) {
  if (terminoBusqueda.length < 2) {
    sugContainer.style.display = "none";
  } else {
    sugContainer.style.display = "flex";
    traerSugerencias(terminoBusqueda);
  }
}

function limpiarArray() {
  // Eliminar datos del array
  console.log("--------Array Limpiado-----------");
  return (sugerenciasArray = []);
}

function obtenerNumeroIngredientes(meal) {
  //Recibir Meal
  //Recorrer el objeto Meal
  let ingredientsCounter = 0;
  for (let key in meal) {
    const content = meal[key]
    if (key.indexOf('Ingredient') >= 0 && content) {
      ingredientsCounter++;
    }
  }
  return ingredientsCounter;
}

function llenarArray(nameMeal, idMeal, noIngredientes, category, thumbnail) {
  //Insertar nuevos datos en el array
  sugerenciasArray.push({
    nameMeal: nameMeal,
    idMeal: idMeal,
    noIngredientes: noIngredientes,
    category: category,
    thumbnail: thumbnail
  });
}

function createCardsOld() {
  let resultCards = ""
  sugerenciasArray.forEach(item => {
    resultCards = resultCards.concat(`
    <div class="sugerencia" onclick='window.location.href="/ingredients.html?s=${item.nameMeal}"'>
      <h3 class="nameMeal1">${item.nameMeal}</h3>
        <div class="ingredientes">
          <p class="numeroIngredientes1">${item.noIngredientes}</p>
          <p>Ingredientes</p>
        </div>
    </div>
    `)
  });
  sugContainer.innerHTML = resultCards;
}
function createCards() {
  let resultCards = ""
  sugerenciasArray.forEach(item => {
    resultCards = resultCards.concat(`
    <section class="recipe-item">
      <!-- Tarjeta de receta en galeria de resultados -->
      <div id="mealCard" class="card">
        <div id="mealThumbnail" class="imgCard">
          <img src="${item.thumbnail}" alt="imagen receta">
        </div>
        <div class="descriptionCard">
          <div class="mainDescriptionCard">
            <h3 id="nameMeal" class="nameMealCard">
              ${item.nameMeal}
            </h3>
            <h4 id="categoryMeal" class="categoryMealCard">
              ${item.category}
            </h4>
          </div>
          <div class="ingredientsDescrptionCard">
            <h5 id="numberOfIngredients" class="numberIngredientsCard">
              ${item.noIngredientes} ingredientes
            </h5>
          </div>
        </div>
      </div>
    </section>
    `)
  });
  sugContainer.innerHTML = resultCards;
}

function traerSugerencias(terminoBusqueda) {
  
  let fetchUrl = terminoBusqueda ?
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${terminoBusqueda}` :
    search === "" ?
      'https://www.themealdb.com/api/json/v1/1/random.php' :
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  console.log(fetchUrl);

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      limpiarArray();
      for (let i = 0; i < data.meals.length && i < 4; i++) {
        let meal = data.meals[i].strMeal;
        let id = data.meals[i].idMeal;
        let ingredientsCount = obtenerNumeroIngredientes(data.meals[i])
        let thumbnail = data.meals[i].strMealThumb;
        let category = data.meals[i].strCategory;
        llenarArray(meal, id, ingredientsCount, category, thumbnail);
      }
      // Crear Cards
      createCards();
    })
    .catch(function (error) {
      console.log(error);
    });
}

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

