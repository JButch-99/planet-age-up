import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Imports & IDs

import { submittedInfo } from './submit';

document.getElementById("planet1").addEventListener("click", handlePlanetClicks);
document.getElementById("planet2").addEventListener("click", handlePlanetClicks);
document.getElementById("planet3").addEventListener("click", handlePlanetClicks);
document.getElementById("planet4").addEventListener("click", handlePlanetClicks);
document.getElementById("planet5").addEventListener("click", handlePlanetClicks);
document.querySelector('#infoForm').addEventListener("submit", submittedInfo);


// UI Logic

function revealContent() {
  let cover = document.getElementById("coverScreen"); 
  let info = document.getElementById("content"); 

  cover.classList.add("hidden");
  info.classList.remove("hidden");
}

function handlePlanetClicks(event) {
  const selectedPlanet = event.target.id
  let mercuryBox = document.getElementById("mercury");
  let venusBox = document.getElementById("venus");
  let earthBox = document.getElementById("earth");
  let marsBox = document.getElementById("mars");
  let jupiterBox = document.getElementById("jupiter"); 
  let cover = document.getElementById("coverScreen"); 
  let info = document.getElementById("content"); 
  let array = [mercuryBox, venusBox, earthBox, marsBox, jupiterBox];

  for (let i = 0; i < array.length; i++) {
    array[i].classList.add("hidden");
  }

  revealContent();
  
  switch(selectedPlanet) {
    case 'planet1':
      mercuryBox.classList.remove("hidden");
      break;
    case 'planet2':
      venusBox.classList.remove("hidden");
      break;
    case 'planet3':
      earthBox.classList.remove("hidden");
      break;
    case 'planet4':
      marsBox.classList.remove("hidden");
      break;
    case 'planet5':
      jupiterBox.classList.remove("hidden");
      break;
    default:
      console.log("ERROR!");
  }
} 