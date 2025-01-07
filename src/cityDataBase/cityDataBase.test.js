const {
  isCity,
  clearCityDataBase,
  initializeCityDatabase,
} = require("./cityDataBase");

describe("City database tests", () => {
  beforeEach(() => {
    initializeCityDatabase();
  });

  afterEach(() => {
    clearCityDataBase();
  });

  it("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  it("city database not Paris", () => {
    expect(isCity("Paris")).toBeFalsy();
  });

  it("city database not Paris", () => {
    expect(isCity("Paris")).not.toBeTruthy();
  });
});

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));

describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));

  test("", () => console.log("2 - test"));
});
