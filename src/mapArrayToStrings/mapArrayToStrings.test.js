const mapArrayToStrings = require("./mapArrayToStrings");

describe("test map array to strings array", () => {
  test("corrected value", () => {
    expect.assertions(1);

    expect(mapArrayToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Mixed values", () => {
    expect.assertions(1);

    expect(mapArrayToStrings([1, 2, 3, null, undefined, NaN])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("Empty array test", () => {
    expect(mapArrayToStrings([])).toEqual([]);
  });

  test("Uncorrected values", () => {
    expect(mapArrayToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
