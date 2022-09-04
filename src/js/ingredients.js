import '../assets/ingredients.css'
import getRecipe from './helpers/getRecipe.js'
import loading from '../assets/img/loading.gif'

let searchRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
const randomRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

// Getting interface references
const recipeTitle = document.getElementById("recipe-title");
const ingredientsList = document.getElementById("ingredients-list")
const directionsParagraph = document.getElementById("directions-paragraph");
const recipeThumbnail = document.getElementById("recipe-thumbnail");
recipeThumbnail.src = loading;

// Getting Search
const search = window.location.search;
searchRecipeUrl = search && search.search("s") > 0 ? searchRecipeUrl + search : randomRecipeUrl;


getRecipe(axios, searchRecipeUrl).then(recipe => {
  // Escribiendo Titulo
  recipeTitle.innerHTML = `🌟 ${recipe.strMeal} 🌟`;

  // Asignando imagen
  recipeThumbnail.src = recipe.strMealThumb;
  
  // Asignando ingredientes y medidas
  const ingredients = []
  const measures = []

  for(let key in recipe){
    const content = recipe[key]
    if(key.indexOf('Ingredient')>= 0 && content){
      ingredients.push(content);
    }
    if(key.indexOf('Measure') >= 0 && content){
      measures.push(content);
    }
  }
  let listItems = "";

  ingredients.forEach((ingredient, index)=>{
    listItems += `<li>${measures[index]} ${ingredient}</li></br>`
  });

  // Escribiendo lista de ingredientes
  ingredientsList.innerHTML = listItems;

  // Escribiendo lista de instrucciones
  directionsParagraph.innerHTML = recipe.strInstructions;

}, error => {
  console.log("Receta no encontrada");
  // Escribiendo Titulo
  recipeTitle.innerHTML = `⚠ Receta no encontrada  ⚠`;
});
