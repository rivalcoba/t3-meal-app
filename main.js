// Importando Tipos
import 'materialize-css'
// Importando Materilize Css
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";

 M.AutoInit();
// Images
import hero from './assets/images/food-bkg.jpg'

// Hero page
const heroImage = document.getElementById("hero-image");
console.log(heroImage);
heroImage.src = hero;

