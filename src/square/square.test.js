const square = require("./square");

describe("Square testing", () => {
  let squareTest;

  beforeEach(() => {
    squareTest = square(2);
  });

  test("should square return correct value", () => {
    expect(squareTest).toBe(4);
  });

  test("should square return incorrect value", () => {
    expect(squareTest).toBeLessThan(8);
  });

  test("should square return correct value", () => {
    expect(squareTest).toBeLessThanOrEqual(8);
  });

  test("should square return correct value", () => {
    expect(square(4)).not.toBe(4);
  });

  test("should square return correct value", () => {
    expect(square(10)).toBeGreaterThanOrEqual(100);
  });

  test("should square return correct value", () => {
    expect(square(10)).toBeGreaterThan(99);
  });

  test("should square return correct value", () => {
    const spy = jest.spyOn(Math, "pow");

    square(1);

    expect(spy).toBeCalledTimes(0);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
