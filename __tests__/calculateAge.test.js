import { StoredInfo } from "../src/calculateAge";



describe('StoredInfo', () => {
  test('should change name, age, and desired age on user submission', () => {
    const data = new StoredInfo();
    data.updateUserInfo(24, "Bill", 32);
    expect(data.originalAge).toBe(24);
    expect(data.name).toBe("Bill");
    expect(data.desiredAge).toBe(32);
  });

  test('should be able to calculate age for Mercury', () => {
    const data = new StoredInfo();
    data.updateUserInfo(21, "", 30);
    data.calculateMercury();
    expect(data.mercurialYear).toEqual("37.50");
  });

  test('should be able to calculate age for Venus', () => {
    const data = new StoredInfo();
    data.updateUserInfo(21, "", 30);
    data.calculateVenus();
    expect(data.venusAge).toEqual("14.52");
  });

  test('should be able to calculate age for Earth', () => {
    const data = new StoredInfo();
    data.updateUserInfo(21, "", 30);
    data.calculateEarth();
    expect(data.earthAge).toEqual(9);
  });

  test('should be able to calculate age for Mars', () => {
    const data = new StoredInfo();
    data.updateUserInfo(21, "", 30);
    data.calculateMars();
    expect(data.martianYear).toEqual("4.79")
  });

  test('should be able to calculate age for Jupiter', () => {
    const data = new StoredInfo();
    data.updateUserInfo(21, "Joe", 30);
    data.calculateJupiter();
    expect(data.jupiterAge).toEqual("0.76")
  });

  test('should correctly calculate the differences of age', () => {
    const data = new StoredInfo();
    data.updateUserInfo(21, "", 30);
    expect(data.differenceOfAge()).toBe(9)
  });

  test('should always return a positive result', () => {
    const data = new StoredInfo();
    data.updateUserInfo(30, "", 21);
    expect(data.differenceOfAge()).toBe(9);
  });
});

