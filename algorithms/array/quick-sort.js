"use strict";

// Lucas Montano channel membership algorithm training

/*

Input Format

The first argument is an unordered integer array
The second argument is the first index to order array recursively
The third argument is the pivot index to order array recursively

Return an ordered integer array

*/

const { swap } = require("../../utils");

let array = [];

function quickSort(UnorderedArray, fromIndex, toIndex) {
  if (array.length === 0) array = UnorderedArray;

  let pivotIndex = toIndex;
  let elementIndex = fromIndex;

  while (elementIndex < pivotIndex) {
    if (array[elementIndex] > array[pivotIndex]) {
      array = swap(array, pivotIndex, pivotIndex - 1);

      if (elementIndex + 1 < pivotIndex) {
        array = swap(array, elementIndex, pivotIndex);
      }

      pivotIndex--;
    } else {
      elementIndex++;
    }
  }

  let leftArrayFromIndex = 0;
  let leftArrayToIndex = pivotIndex - 1;
  let isLeftPivotArrayNotSorted = leftArrayToIndex > 1;
  if (isLeftPivotArrayNotSorted) {
    array = quickSort(array, leftArrayFromIndex, leftArrayToIndex);
  }

  let rightArrayFromIndex = pivotIndex + 1;
  let rightArrayToIndex = array.length - 1;
  let isRightPivotArrayNotSorted = rightArrayFromIndex < toIndex;
  if (isRightPivotArrayNotSorted) {
    array = quickSort(array, rightArrayFromIndex, rightArrayToIndex);
  }

  return array;
}

module.exports = quickSort;
