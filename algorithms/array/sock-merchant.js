"use strict";

// https://www.hackerrank.com/challenges/sock-merchant/problem

/*
It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock

*/

function sockMerchant(n, ar) {
  let matchingPairs = 0;

  while (ar.length > 0) {
    const currentValue = ar[0];

    ar.shift();

    const index = ar.indexOf(currentValue);

    if (index !== -1) {
      matchingPairs++;
      ar.splice(index, 1);
    }
  }

  return matchingPairs;
}

module.exports = sockMerchant;
