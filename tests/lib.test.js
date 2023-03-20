const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return Welcome plus the name of the user", () => {
    const result = lib.greet("Andre");
    expect(result).toMatch(/Andre/);
  });
});

describe("getCurrencies", () => {
  it("should return an array with supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return a product object with a given id and a price", () => {
    const result = lib.getProduct(1);
    expect(result).toHaveProperty("id", 1);
    expect(result).toHaveProperty("price");
  });
});

describe("registerUser", () => {
  it("should return a user object with id and username if valid username is passed", () => {
    const result = lib.registerUser("andrefonseca");
    expect(result.id).toBeGreaterThan(0);
    expect(result).toMatchObject({ username: "andrefonseca" });
  });

  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((arg) => {
      expect(() => {
        lib.registerUser(arg);
      }).toThrow();
    });
  });
});
