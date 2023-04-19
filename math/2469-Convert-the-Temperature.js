/*
2469. Convert the Temperature
https://leetcode.com/problems/convert-the-temperature/
16 April 2023
David Pratt
*/

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let m = (212 - 32) / (100 - 0);

  fahrenheit = m * celsius + 32;
  kelvin = celsius + 273.15;

  return [kelvin, fahrenheit];
};
