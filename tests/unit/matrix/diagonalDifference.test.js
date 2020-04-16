const diagonalDifference = require("../../../algorithms/matrix/diagonal-difference");

test("calculate the absolute difference between the sums of its diagonals 3x3 matrix", () => {
  expect(diagonalDifference([[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(
    15
  );
});

test("calculate the absolute difference between the sums of its diagonals 5x5 matrix", () => {
  expect(
    diagonalDifference([
      [5],
      [11, 2, 4, 8, 3],
      [4, 5, 6, 7, -2],
      [10, 8, -12, 10, 5],
      [11, 2, 4, 8, 3],
      [11, 8, 7, 6, 1],
    ])
  ).toBe(2);
});
