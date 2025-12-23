import { storedUserInfo } from "./calculateAge";

export function submittedInfo(event) {
  event.preventDefault();

  const submittedName = document.getElementById("nameOfUser").value;
  const submittedTargetAge = parseFloat(document.getElementById("desiredAge").value);
  const submittedUserAge = parseFloat(document.getElementById("currentEarthAge").value);

  storedUserInfo.updateUserInfo(submittedUserAge, submittedName, submittedTargetAge);
  storedUserInfo.calculateMercury();
  storedUserInfo.calculateVenus();
  storedUserInfo.calculateMars();
  storedUserInfo.calculateJupiter();
  storedUserInfo.calculateEarth();
}

