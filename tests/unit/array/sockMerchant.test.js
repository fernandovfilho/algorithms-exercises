const sockMerchant = require("../../../algorithms/array/sock-merchant");

test("Return the total number of matching pairs of socks that John can sell - 9 registers", () => {
  expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test("Return the total number of matching pairs of socks that John can sell - 10 registers", () => {
  expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
});
