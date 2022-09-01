import '../assets/main.css'
import heroImage from '../assets/img/food_test.jpg';

// Testing image
let heroImageTag = document.getElementById('hero');
heroImageTag.src = heroImage;

// Testing ES6
// Arrow function
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(10, 20)); // Output 30

// Testing Script
console.log("Script Funcionando");