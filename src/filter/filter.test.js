const myFilter = require("./filter");

describe("myFilter custom function testing", () => {
  let mockCallback;
  let firstTestCase;
  let input;

  beforeEach(() => {
    mockCallback = jest.fn((item) => item > 2);
    input = [1, 2, 3, 4, 5, 6];
    firstTestCase = [3, 4, 5, 6];
  });

  test("myFilter should return values more than 2", () => {
    const result = myFilter(input, mockCallback);

    expect(result).toEqual(firstTestCase);

    expect(mockCallback).toHaveBeenCalledTimes(input.length);
  });

  test("myFilter called with rightly params", () => {
    myFilter(input, mockCallback);

    input.forEach((item, index) => {
      expect(mockCallback).toHaveBeenCalledWith(item, index, input);
    });
  });

  test("myFilter should return valid length of output array", () => {
    expect(myFilter(input, mockCallback)).toHaveLength(4);

    expect(input[0]).toBe(1);
  });

  test("mock callback should return some methods response", () => {
    myFilter(input, mockCallback);

    expect(mockCallback.mock.calls[0][0]).toBe(1);

    expect(mockCallback.mock.calls).toHaveLength(6);
  });
});
