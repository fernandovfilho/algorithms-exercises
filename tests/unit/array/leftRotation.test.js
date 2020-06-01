const leftRot = require("../../../algorithms/array/left-rotation.js");

test("left rotation array - 5 times", () => {
  expect(leftRot([1,2,3,4,5], 4)).toBe([5,1,2,3,4])
})