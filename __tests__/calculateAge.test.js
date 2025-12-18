import { storedUserInfo } from "../src/calculateAge";
const dataBase = new storedUserInfo;



describe('StoredInfo', () => {
  test('should change name and age on user submission', () => {
    dataBase.setEarthInfo("Jeff", 18);
    expect(dataBase.name).toBe("Jeff");
    expect(dataBase.earthAge).toBe(18);
  });
});