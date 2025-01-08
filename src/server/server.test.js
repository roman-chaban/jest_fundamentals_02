const { default: axios } = require("axios");
const Ajax = require("./server");

jest.mock("axios");

describe("Ajax: echo function test", () => {
  let asyncResult;

  beforeEach(async () => {
    asyncResult = await Ajax.echo("some data");
  });

  test("echo should return async value", async () => {
    expect(asyncResult).toBe("some data");
  });

  test("should return data from Promise", () => {
    return Ajax.echo("some data").then((dataResult) => {
      expect(dataResult).toBe("some data");
    });
  });

  test("should return error from Promise", () => {
    return Ajax.echo("some data").catch((errorResultMessage) => {
      expect(errorResultMessage).rejects.toBeInstanceOf(Error);
    });
  });
});

describe("Ajax: get", () => {
  let usersData;

  beforeEach(async () => {
    usersData = await Ajax.get();

    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
      ],
    };
  });

  test("should return users", () => {
    axios.get.mockReturnValue(usersData);

    expect(axios.get.mockReturnValue(usersData)).toMatchSnapshot();
  });
});
