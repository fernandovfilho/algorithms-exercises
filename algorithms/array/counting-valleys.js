"use strict";

// https://www.hackerrank.com/challenges/counting-valleys/problem

/*

Input Format

The first line contains an integer , the number of steps in Gary's hike.
The second line contains a single string , of  characters that describe his path.

*/

function countingValleys(n, s) {
  let valleys = 0;

  let level = 0;
  let oldLevel = level;

  s.split("").map((step) => {
    oldLevel = level;
    if (step === "D") level--;
    if (step === "U") level++;
    if (oldLevel === 0 && level === -1) valleys++;
    oldLevel = level;
  });

  return valleys;
}

module.exports = countingValleys;
