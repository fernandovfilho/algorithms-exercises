const countingValleys = require("../../../algorithms/array/counting-valleys");

test("Print a single integer that denotes the number of valleys Gary walked through during his hike - UDDDUDUU", () => {
  expect(countingValleys(8, "UDDDUDUU")).toBe(1);
});

test("Print a single integer that denotes the number of valleys Gary walked through during his hike - DDUUDDUDUUUD", () => {
  expect(countingValleys(12, "DDUUDDUDUUUD")).toBe(2);
});
