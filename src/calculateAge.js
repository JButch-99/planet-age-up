export class StoredInfo {
  constructor(earthAge, venusAge, martianYear, jupiterAge, mercurialYear, name, originalAge, desiredAge){
    this.venusAge = venusAge;
    this.earthAge = earthAge;
    this.martianYear = martianYear;
    this.jupiterAge = jupiterAge; 
    this.mercurialYear = mercurialYear;
    this.name = name;
    this.originalAge = originalAge;
    this.desiredAge = desiredAge;
  }

  setEarthInfo(userName, userAge) {
    this.name = userName;
    this.earthAge = userAge;
  }
 
  calculateMercury() {

  }

  calculateVenus() {

  }

  calculateEarth() {
        
  }

  calculateMars() {

  }

  calculateJupiter() {

  }

  resetSavedInfo() {
    this.earthAge = 0;
    this.mercurialYear = 0;
    this.martianYear = 0;
  }
}


export const storedUserInfo = new StoredInfo();

