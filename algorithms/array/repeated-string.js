"use strict";

// https://www.hackerrank.com/challenges/repeated-string/problem

/*
Complete the repeatedString function in the editor below.
It should return an integer representing the number of occurrences
of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
*/

function repeatedString(s, n) {
  let occurrences = 0;

  for (let index = 0; index < n; index++) {
    while (!s[index]) {
      s += s;
    }
    if (s[index] === "a") {
      occurrences++;
    }
  }

  return occurrences;
}

module.exports = repeatedString;
