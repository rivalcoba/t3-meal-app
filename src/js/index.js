// Importamos estilos
import "../assets/index.css";

// Leer la entrada del usuario

const startSearch = document.querySelector("#startSearchBtn");
const stringSearch = document.querySelector("#inputMeal");
const toInsertChild = document.querySelector("body");
let sugContainer = document.querySelector(".sugContainer");

let terminoBusqueda;

let sugerenciasArray = [];

stringSearch.addEventListener("input", function leerBusqueda(event) {
  terminoBusqueda = event.target.value;
  imprimirSugerencia(terminoBusqueda);
});

function limpiarArray() {
  // Eliminar datos del array
  console.log("--------Array Limpiado-----------");
  return (sugerenciasArray = []);
  
}

function llenarArray(nameMeal, idMeal, noIngredientes) {
  //Insertar nuevos datos en el array
  sugerenciasArray.push({
    nameMeal: nameMeal,
    idMeal: idMeal,
    noIngredientes: noIngredientes
  });
}

function traerSugerencias(terminoBusqueda) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${terminoBusqueda}`
  )
    .then((response) => response.json())
    .then((data) => {
      limpiarArray();
      for (let i = 0; i < data.meals.length && i < 4; i++) {
        let meal = data.meals[i].strMeal;
        let id = data.meals[i].idMeal;
        let ingredientsCount = obtenerNumeroIngredientes(data.meals[i])
        console.log("✍ Llenara Ingredientes...");
        llenarArray(meal, id, ingredientsCount);
      }
      // Crear Cards
      createCards();
      console.log(sugerenciasArray);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function imprimirSugerencia(terminoBusqueda) {
  if (terminoBusqueda.length < 2) {
    sugContainer.style.display = "none";
  } else {
    sugContainer.style.display = "flex";
    traerSugerencias(terminoBusqueda);
  }
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
  console.log("🔪 Termina de llenar ingredientes...");
  return ingredientsCounter;
}

function createCards() {
  let resultCards = ""
  sugerenciasArray.forEach(item => {
    resultCards = resultCards.concat(`
    <div class="sugerencia">
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

function crearCardSugerencia (nMeal, nIngredientes){
  const sugContainer = document.querySelector('.sugContainer');

  const sugerencia = document.createElement('div');
  sugerencia.className = 'sugerencia';
  
  const nameMeal = document.createElement('h3');
  nameMeal.className = 'nameMeal';

  const ingredientes = document.createElement('div');
  ingredientes.className = 'ingredientes';

  const numeroIngredientes = document.createElement('p');
  numeroIngredientes.className = 'numeroIngredientes';

  const p = document.createElement('p');

  sugContainer.appendChild(sugerencia);
  sugerencia.appendChild(nameMeal);
  sugerencia.appendChild(ingredientes);
  ingredientes.appendChild(numeroIngredientes);
  ingredientes.appendChild(p);

  document.querySelector(".nameMeal").textContent = nMeal;
  document.querySelector("p").textContent = nIngredientes;
}