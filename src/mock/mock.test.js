const { map } = require("./mock");

describe("Map functions testing suite", () => {
  let someArr;
  let fn;

  beforeEach(() => {
    someArr = [1, 2, 3, 4];
    fn = jest.fn((x) => x ** 2);
    map(someArr, fn);
  });

  test("should return result", () => {
    expect(fn.mock.calls.length).toBe(4);
  });

  test("should return pow 2", () => {
    expect(fn.mock.results[0].value).toBe(1);
  });

  test("should return fn to work", () => {
    fn.mockReturnValueOnce(100);

    expect(fn()).toBe(100);
  });
});


