const repeatedString = require("../../../algorithms/array/repeated-string");

test("It should return an integer representing the number of occurrences of a - aba | 10", () => {
  expect(repeatedString("aba", 10)).toBe(7);
});

test("It should return an integer representing the number of occurrences of a - a | 1000000", () => {
  expect(repeatedString("a", 1000000)).toBe(1000000);
});

test("It should return an integer representing the number of occurrences of a - abbca | 20", () => {
  expect(repeatedString("abbca", 20)).toBe(8);
});
