const { sum, nativeNull } = require("./intro");

describe("sum testing", () => {
  test("Sum should return sum of two values", () => {
    expect(sum(1, 2)).toBe(3);

    expect(sum(10, 20)).toEqual(30);
  });

  test("Sum should return value correct comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);

    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);

    expect(sum(2, 3)).toBeLessThan(10);

    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test("sum should return correct value", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("NativeNull function testing", () => {
  test("Testing null function should return null", () => {
    expect(nativeNull(null)).toBeNull();
    expect(nativeNull(null)).toBeFalsy();
    expect(nativeNull()).toBeDefined();
  });

  test("Testing should return another value", () => {
    expect(nativeNull(null)).not.toBeTruthy();
    expect(nativeNull(null)).not.toBeUndefined();
  });
  
});
