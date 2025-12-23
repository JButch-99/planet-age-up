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

  updateUserInfo(userAge, userName, userDesire) {
    this.originalAge = userAge;
    this.earthAge = userAge;
    this.name = userName;
    this.desiredAge = userDesire;
  }

  differenceOfAge() {
    const difference =  this.desiredAge - this.originalAge;

    if (difference < 0) {
      return difference * -1
    }

    return difference;
  }

  calculateMercury() {
    this.mercurialYear = (this.differenceOfAge() / 0.24).toFixed(2);
  }

  calculateEarth() {
    this.earthAge = this.differenceOfAge();
  } 

  calculateVenus() {
    this.venusAge = (this.differenceOfAge() / 0.62).toFixed(2);
  }

  calculateMars() {
    this.martianYear = (this.differenceOfAge() / 1.88).toFixed(2);
  }

  calculateJupiter() {
    this.jupiterAge = (this.differenceOfAge() / 11.86).toFixed(2);  
  }
}


export const storedUserInfo = new StoredInfo(0, 0, 0, 0,0, "", 0, 0);

