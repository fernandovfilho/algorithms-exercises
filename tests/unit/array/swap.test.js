const swap = require("../../../algorithms/array/swap");
const { isSameArray } = require("../../../utils");

test("Swap two positions in an array", () => {
  const arrayToTest = [1, 10, 5, 8, 4, 6, 9, 7, 2, 3];
  const firstPosition = 2;
  const secondPosition = 6;
  const expectedArray = [1, 10, 9, 8, 4, 6, 5, 7, 2, 3];

  expect(
    isSameArray(swap(arrayToTest, firstPosition, secondPosition), expectedArray)
  ).toBe(true);
});
