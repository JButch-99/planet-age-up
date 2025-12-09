export class StoredInfo {
  constructor(earthAge, venusAge, martianYear, jupiterAge, mercurialYear, name){
    this.venusAge = venusAge;
    this.earthAge = earthAge;
    this.martianYear = martianYear;
    this.jupiterAge = jupiterAge;
    this.mercurialYear = mercurialYear;
    this.name = name;
  }

  setEarthInfo(userName, userAge) {
    this.name = userName;
    this.earthAge = userAge;
  }

  calculateAge(planet) {
    const cosmoListings = {
      Jupiter: 11.86,
      Venus: .62,
      Mars: 1.88,
      Mercury: .24
    }

    if (planet === cosmoListings) {
      console.log(cosmoListings[planet]);
    }
  }
}



