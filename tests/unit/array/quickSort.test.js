const quickSort = require("../../../algorithms/array/quick-sort");
const { isSameArray } = require("../../../utils");

test("Order an array using quicksort - [1, 10, 5, 8, 4, 6, 9, 7, 2, 3]", () => {
  const arrayToTest = [1, 10, 5, 8, 4, 6, 9, 7, 2, 3];
  const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(
    isSameArray(
      quickSort(arrayToTest, 0, arrayToTest.length, true),
      expectedArray
    )
  ).toBe(true);
});

test("Order an array using quicksort - [3, 7, 8, 5, 2, 1, 9, 5, 4]", () => {
  const arrayToTest = [3, 7, 8, 5, 2, 1, 9, 5, 4];
  const expectedArray = [1, 2, 3, 4, 5, 5, 7, 8, 9];

  expect(
    isSameArray(
      quickSort(arrayToTest, 0, arrayToTest.length, true),
      expectedArray
    )
  ).toBe(true);
});
