const delay = require("./delay");

describe("Testing delay function", () => {
  let delayTest;
  beforeEach(async () => {
    delayTest = await delay(() => {
      return "Hello";
    }, 2000);
  });

  it("test async function", async () => {
    expect(delayTest).toMatch("Hello");
  });

  it("should return delay sum 10", async () => {
    expect(await delay(() => 5 + 10, 1000)).toEqual(15);
  });
});
