const Lodash = require("./async");

const _ = new Lodash();

describe("Lodash compact testing", () => {
  let array;

  beforeEach(() => {
    array = [false, 0, 1];
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should remove falsy values from array", () => {
    expect(_.compact(array)).toBeTruthy();
  });

  test("should not contain falsy values", () => {
    expect(_.compact(array)).not.toContain(0);
  });

  test("array should by edited", () => {
    const newArray = [...array, 10];

    [...array, "one", "two"];

    expect(array).not.toContain("one", "two");
  });

  afterAll(() => {
    array = [];
  });
});

describe("Lodash groupBy test", () => {
  let smallestValues;

  beforeEach(() => {
    smallestValues = [5.1, 4.2, 3.3, 2.4, 1.5];
  });

  test("should groupBy is defined", () => {
    expect(_.groupBy).toBeDefined();
  });

  test("should group array items by smallest values", () => {
    expect(_.groupBy(smallestValues)).toEqual([1, 2, 3, 4, 5]);
    expect(_.groupBy(smallestValues)).toHaveLength(5);
  });

  test("should return type array", () => {
    expect(Array.isArray(smallestValues)).toBeTruthy();
  });

  test("should return sum of array", () => {
    expect(_.sumOfValues(_.groupBy(smallestValues))).toBe(15);
  });
});

