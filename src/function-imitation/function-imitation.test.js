const { forEach, getData } = require("./function-imitation");

const { fetchData } = require("../fetchData/fetchData");

jest.mock("../fetchData/fetchData.js", () => ({
  fetchData: jest.fn(),
}));

describe("Testing function imitation", () => {
  let mockCallback;

  jest.useFakeTimers();

  beforeEach(() => {
    mockCallback = jest.fn((x) => 42 + x);
  });

  test("forEach mock function", () => {});

  test("jest.fn() imitation test", () => {
    const mockFunction = jest.fn();

    mockFunction("1", "2");

    expect(mockFunction).toHaveBeenCalledTimes(1);

    expect(mockFunction).toHaveBeenCalledWith("1", "2");
  });

  test("jest.fn() imitation test with return some value", () => {
    const mockFunction = jest.fn().mockReturnValue("Hello mock!");

    expect(mockFunction()).toMatch(/Hello mock!/i);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test("mock function with implementation", () => {
    const mockFunctionWithImplementation = jest.fn((name) => `Hello ${name}`);

    expect(mockFunctionWithImplementation("Roman")).toBe("Hello Roman");

    expect(mockFunctionWithImplementation).toHaveBeenCalledWith("Roman");
  });

  test("testing function imitation with spyOn method", () => {
    const userInfo = {
      sayHello: (greetMessage) => `Hello ${greetMessage}`,
    };

    const userInfoSpy = jest.spyOn(userInfo, "sayHello");

    userInfo.sayHello("World!");

    expect(userInfoSpy).toHaveBeenCalledTimes(1);

    userInfoSpy.mockRestore();
  });

  test("jest.mock example request", async () => {
    fetchData.mockResolvedValue("Mocked data");

    const result = await getData();
    expect(result).toBe("Processed: Mocked data");
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  test("mock function call verification", () => {
    const mockFunction = jest.fn();

    mockFunction("1");
    mockFunction("2");

    expect(mockFunction).toHaveBeenCalledTimes(2);

    expect(mockFunction).toHaveBeenNthCalledWith(1, "1");

    expect(mockFunction).toHaveBeenNthCalledWith(2, "2");
  });

  test("mock fake timers example", () => {
    const mockFunction = jest.fn();

    setTimeout(() => {
      mockFunction();
    }, 1000);

    jest.advanceTimersByTime(1000);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test("should return mock results", () => {
    const mockFunction = jest.fn((x) => x * 2);

    mockFunction(2);

    expect(mockFunction.mock.results); // [{type: 'return'; value: 4}]
  });

  test("should return mockReturnedValueOnce results", () => {
    const mockFunctionOnce = jest
      .fn()
      .mockReturnValueOnce("First result")
      .mockReturnValueOnce("Second result");

    expect(mockFunctionOnce()).toBe("First result");

    expect(mockFunctionOnce()).toBe("Second result");
  });
});
