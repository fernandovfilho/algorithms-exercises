const quickSort = require("../../../algorithms/array/quick-sort");
const { isSameArray } = require("../../../utils");

test("Order an array using quicksort", () => {
  const arrayToTest = [1, 10, 5, 8, 4, 6, 9, 7, 2, 3];
  const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(isSameArray(quickSort(arrayToTest), expectedArray)).toBe(true);
});
