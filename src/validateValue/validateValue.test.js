const validateValue = require("./validateValue");

describe("Validate value", () => {
  it("validate value corners", () => {
    expect(validateValue(50)).toBe(true);
  });

  it("more than value", () => {
    expect(validateValue(101)).toBe(false);
  });

  it("less than value", () => {
    expect(validateValue(-1)).toEqual(false);
  });

  it("corrected value", () => {
    expect(validateValue(20)).toBeTruthy();
  });

  it("less than value corner", () => {
    expect(validateValue(0)).toBe(true);
  });

  it("more than value corner", () => {
    expect(validateValue(100)).toBeTruthy();
  });
});
