import { myMap } from "./map";

describe("map polyfill", () => {
  beforeAll(() => {
    Array.prototype.myMap = myMap;
  });

  afterAll(() => {
    delete Array.prototype.myMap;
  });

  describe("specification", function () {
    let arr, result, callback;

    beforeEach(() => {
      arr = [1, 2, 3, 4, 5];
      callback = (i) => i + 1;
      result = arr.myMap(callback);
    });

    afterEach(() => {
      result = null;
    });

    it("should return new Array", function () {
      expect(Array.isArray(result)).toBe(true);
      expect(arr === result).toBe(false);
    });

    it("should return array with callback on each element", function () {
      expect(result).toEqual([2, 3, 4, 5, 6]);
    });

    it("should support thisArg", function () {
      let thisArg = { multiplier: 100 };
      result = arr.myMap(function (i) {
        return i * this.multiplier;
      }, thisArg);
      expect(result).toEqual([100, 200, 300, 400, 500]);
    });
  });
});
