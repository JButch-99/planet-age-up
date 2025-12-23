import { StoredInfo } from "../src/calculateAge";
const dataBase = new StoredInfo;



describe('StoredInfo', () => {
  test('should change name and age on user submission', () => {
    dataBase.setEarthInfo("Jeff", 18);
    expect(dataBase.name).toBe("Jeff");
    expect(dataBase.earthAge).toBe(18);
  });
});