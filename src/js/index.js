import "../assets/index.css";
import backgroundMain from "../assets/img/background.svg";
import principalMain from "../assets/img/imagen_principal.svg";
import aleatorioIcon from "../assets/img/aleatorio_icon.png";

document.getElementById("backgroundMain").src = backgroundMain;
document.getElementById("principalMain").src = principalMain;
document.getElementById("aleatorioIcon").src = aleatorioIcon;
document.getElementById("aleatorioIcon").style.height = "50%";

const form = document.getElementById("searchForm");
const randomButton = document.getElementById("randomButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Search");
});

randomButton.addEventListener("click", (event) => {
  alert("Random");
});
