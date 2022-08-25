// Importando Tipos
import 'materialize-css'
// Importando Materilize Css
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
// Importando estilos personalizados
import "./assets/styles/main.css"

import homeScript from './scripts/home';
import aboutScript from './scripts/about';

// Auto Init Materialize interactivity
M.AutoInit();

// Scripts Selector
window.location.pathname == "/" && homeScript();
window.location.pathname == "/views/about.html" && aboutScript();

