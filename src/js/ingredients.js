import '../assets/ingredients.css'
import getRecipe from './helpers/getRecipe.js'
console.log("Ingredients JS 🤘");

const urlApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// Getting interface references
const recipeTitle = document.getElementById("recipe-title");
const ingredientsList = document.getElementById("ingredients-list")
const directionsParagraph = document.getElementById("directions-paragraph");
const recipeThumbnail = document.getElementById("recipe-thumbnail");

// Getting Search
const search = window.location.search.substring(1).split("=")[1];

getRecipe(axios, urlApi + search).then(recipe => {
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

});