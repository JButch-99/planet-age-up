// Imports & IDs
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { submittedInfo } from './submit';
import earth from './assets/images/earth.jpg'
import mercury from './assets/images/mercury.jpg'
import mars from './assets/images/rasputin.png'
import venus from './assets/images/venus.jpg'
import jupiter from './assets/images/jupiter.png'
import { storedUserInfo } from './calculateAge';
document.getElementById("planet1").addEventListener("click", handlePlanetClicks);
document.getElementById("planet2").addEventListener("click", handlePlanetClicks);
document.getElementById("planet3").addEventListener("click", handlePlanetClicks);
document.getElementById("planet4").addEventListener("click", handlePlanetClicks);
document.getElementById("planet5").addEventListener("click", handlePlanetClicks);
document.querySelector('#infoForm').addEventListener("submit", submittedInfo);
const userData = storedUserInfo;
const planetImages = {
  planet1: `url(${mercury})`,
  planet2: `url(${venus})`,
  planet3: `url(${earth})`,
  planet4: `url(${mars})`,
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

function appendItems(planetChosen) {
  const titleOfPlanet = document.getElementById("title");
  const locationOfPlanet = document.getElementById("location");
  const locationOfName = document.getElementById("name");
  const answerSpan = document.getElementById("answer");
  const locationOfInterest = document.getElementById("planetOfInterest");
  const ageOFUser = document.getElementById("age");
  const desiredAgeOfUser = document.getElementById("planetAge");
  const planet = {
    planet1: "Mercury",
    planet2: "Venus",
    planet3: "Earth",
    planet4: "Mars",
    planet5: "Jupiter"
  }
  const answers = {
    planet1: userData.mercurialYear,
    planet2: userData.venusAge,
    planet3: userData.earthAge,
    planet4: userData.martianYear,
    planet5: userData.jupiterAge
  }

  if (userData.name.trim() === "") {
    locationOfName.textContent = "Cadet!";
  } else {
    locationOfName.textContent = "Cadet " + userData.name;
  }
  titleOfPlanet.textContent = planet[planetChosen];
  locationOfPlanet.textContent = planet[planetChosen];
  locationOfPlanet.textContent = planet[planetChosen];
  locationOfInterest.textContent = planet[planetChosen];
  answerSpan.textContent = answers[planetChosen];
  ageOFUser.textContent = userData.originalAge;
  desiredAgeOfUser.textContent = userData.desiredAge;
}

function handlePlanetClicks(event) {
  const selectedPlanet = event.target.id;
  const errorForm = document.getElementById("error");
  

  if (!userData.originalAge || !userData.desiredAge) {
    errorForm.textContent = "Please enter your age and targeted desired age :)";
    return;
  }

  errorForm.textContent = "Transmission Approved";

  revealContent();
  swapPhoto(selectedPlanet);
  appendItems(selectedPlanet);
} 