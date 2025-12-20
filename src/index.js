// Imports & IDs
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { submittedInfo } from './submit';
import earth from './assets/images/earth.jpg'
import mercury from './assets/images/mercury.jpg'
import rasputin from './assets/images/rasputin.png'
import venus from './assets/images/venus.jpg'
import jupiter from './assets/images/jupiter.png'
document.getElementById("planet1").addEventListener("click", handlePlanetClicks);
document.getElementById("planet2").addEventListener("click", handlePlanetClicks);
document.getElementById("planet3").addEventListener("click", handlePlanetClicks);
document.getElementById("planet4").addEventListener("click", handlePlanetClicks);
document.getElementById("planet5").addEventListener("click", handlePlanetClicks);
document.querySelector('#infoForm').addEventListener("submit", submittedInfo);
const planetImages = {
  planet1: `url(${mercury})`,
  planet2: `url(${venus})`,
  planet3: `url(${earth})`,
  planet4: `url(${rasputin})`,
  planet5: `url(${jupiter})`
};

// UI Logic

function revealContent() {
  let cover = document.getElementById("coverScreen"); 
  let info = document.getElementById("content"); 

  cover.classList.add("hidden");
  info.classList.remove("hidden");
}

function swapPhoto(planet) {
  let imageFrame = document.getElementById("photoFrame");
  imageFrame.style.backgroundImage = planetImages[planet];
}

function handlePlanetClicks(event) {
  const selectedPlanet = event.target.id;
  console.log(selectedPlanet);
  revealContent();
  
  switch(selectedPlanet) {
    case 'planet1':
      swapPhoto(selectedPlanet);
      break;
    case 'planet2':
      swapPhoto(selectedPlanet);
      break;
    case 'planet3':
      swapPhoto(selectedPlanet);
      break;
    case 'planet4':
      swapPhoto(selectedPlanet);
      break;
    case 'planet5':
      swapPhoto(selectedPlanet);
      break;
    default:
      console.log("ERROR!");
  }
} 