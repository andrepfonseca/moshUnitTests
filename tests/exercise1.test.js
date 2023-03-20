const exercise1 = require("../exercise1");

describe("fizzBuzz", () => {
  it("should throw if input is not a number", () => {
    expect(() => exercise1.fizzBuzz("teste")).toThrow();
    expect(() => exercise1.fizzBuzz(null)).toThrow();
    expect(() => exercise1.fizzBuzz(undefined)).toThrow();
    expect(() => exercise1.fizzBuzz({})).toThrow();
  });

  it("should return FizzBuzz if input is divisible by 3 and 5", () => {
    expect(exercise1.fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if input is divisible by 3", () => {
    expect(exercise1.fizzBuzz(3)).toBe("Fizz");
  });

  it("should return Fizz if input is divisible by 5", () => {
    expect(exercise1.fizzBuzz(5)).toBe("Buzz");
  });

  it("should return the input if it is not divisible by 3 and(or) 5", () => {
    expect(exercise1.fizzBuzz(1)).toBe(1);
  });
});
