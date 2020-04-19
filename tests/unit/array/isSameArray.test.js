const { isSameArray } = require("../../../utils");

test("Verify if the two arrays are equals - same array test", () => {
  const testArray = [1, 10, 5, 8, 4, 6, 9, 7, 2, 3];

  expect(isSameArray(testArray, testArray)).toBe(true);
});

test("Verify if the two arrays are equals - array vs empty array", () => {
  const testArray = [1, 10, 5, 8, 4, 6, 9, 7, 2, 3];

  expect(isSameArray(testArray, [])).toBe(false);
});

test("Verify if the two arrays are equals - array vs not an array", () => {
  const testArray = [1, 10, 5, 8];

  expect(isSameArray(testArray, "test")).toBe(false);
});

test("Verify if the two arrays are equals - empty array vs empty array", () => {
  expect(isSameArray([], [])).toBe(true);
});

test("Verify if the two arrays are equals - int array vs string array", () => {
  const firstArray = [1, 10, 5, 8];
  const secondArray = ["1", "10", "5", "8"];

  expect(isSameArray(firstArray, secondArray)).toBe(false);
});
