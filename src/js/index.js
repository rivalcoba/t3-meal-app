// Importamos estilos
import '../assets/index.css'

// Importamos imágenes
import backgroundMain from '../assets/img/background.svg';
import principalMain from '../assets/img/imagen_principal.svg';
import aleatorioIcon from "../assets/img/aleatorio_icon.png";

const inputSearch = document.getElementById("input-search");

// Asignamos imágenes
document.getElementById("backgroundMain").src = backgroundMain;
document.getElementById("principalMain").src = principalMain;
document.getElementById("aleatorioIcon").src = aleatorioIcon;

document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
})

document.getElementById("search-button").addEventListener("click", () => {
   window.location.href = `/results.html?s=${inputSearch.value}`; 
});

document.getElementById("randomButton").addEventListener("click",(event) => {
   window.location.href = "/ingredients.html";
})