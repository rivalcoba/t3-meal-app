// Images
import hero from "../assets/images/food-bkg.jpg";
export default () => {
  console.log('home.js');
  // Hero page
  const heroImage = document.getElementById("hero-image");
  heroImage.src = hero;
};
