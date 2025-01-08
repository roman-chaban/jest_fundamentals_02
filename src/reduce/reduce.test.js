const myReduce = require("./reduce");

describe("myReduce testing mocks", () => {
  let mockCallback;
  let inputValues;
  let outputValue;

  beforeEach(() => {
    mockCallback = jest.fn((acc, cur) => acc + cur);

    inputValues = [1, 2, 3, 4, 5];

    outputValue = 15;
  });

  test("myReduce should return sum of inputValues", () => {
    const sumOfNumbers = myReduce(inputValues, mockCallback, 0);

    expect(sumOfNumbers).toBe(outputValue);

    expect(mockCallback).toHaveBeenCalledTimes(inputValues.length);
  });

  test("test rightly params for myReduce", () => {
    myReduce(inputValues, mockCallback, 0);

    inputValues.forEach((value, index) => {
      const expectedAccumulator =
        index === 0
          ? 0
          : inputValues.slice(0, index).reduce((acc, curr) => acc + curr, 0);

      expect(mockCallback).toHaveBeenCalledWith(
        expectedAccumulator,
        value,
        inputValues
      );
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
