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
  console.log(nameMeal);

}

function traerSugerencias(terminoBusqueda) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${terminoBusqueda}`
  )
    .then((response) => response.json())
    .then((data) => {
      limpiarArray();
      for (let i = 0; i < data.meals.length; i++) {
        //   console.log(data.meals[i].idMeal);
        //   console.log(data.meals[i].strMeal);
        
        llenarArray(data.meals[i].strMeal, data.meals[i].idMeal, obtenerNumeroIngredientes(data.meals[i].strMeal));
      }
      console.log(sugerenciasArray);
    })
    .catch(function (error) {
      console.log("Error en la API");
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

function obtenerNumeroIngredientes(idMeal) {
  //Recibir el ide
  //Recorrer el objeto.strIngredient${}
  //si strIngredient$ tiene algun valor cuentaIngredientes+1
  //si no, retunr cuentaIngredientes
}
