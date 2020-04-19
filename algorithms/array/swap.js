function swap(arr, firstPosition, secondPosition) {
  const tmp = arr[firstPosition];
  arr[firstPosition] = arr[secondPosition];
  arr[secondPosition] = tmp;

  return arr;
}

module.exports = swap;
