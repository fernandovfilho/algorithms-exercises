"use strict";

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  const arraySize = arr[0][0];
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  let firstDiagonalCursor = 0;
  let secondDiagonalCursor = arraySize - 1;

  for (let index = 1; index < arraySize + 1; index++) {
    let row = arr[index];

    firstDiagonalSum += row[firstDiagonalCursor];
    firstDiagonalCursor += 1;

    secondDiagonalSum += row[secondDiagonalCursor];
    secondDiagonalCursor -= 1;
  }

  const sum = firstDiagonalSum - secondDiagonalSum;

  if (sum < 0) return sum * -1;
  return sum;
}

module.exports = diagonalDifference;
