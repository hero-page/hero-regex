/* eslint-disable */ 

/**
 * Checks if the length of a given string is between min and max values inclusive.
 *
 * @param {string} str - The input string to check.
 * @param {number} min - The minimum length for the string.
 * @param {number} max - The maximum length for the string.
 * @return {boolean} Returns true if the length of the string is between min and max values inclusive, otherwise false.
 *
 * @example
 * // Returns true
 * isLengthBetween("hello", 3, 5)
 * // Returns false
 * isLengthBetween("hello", 2, 4)
 */
function isLengthBetween(str, min, max) {
    const length = str.length;
    return length >= min && length <= max;
}

module.exports = {
    isLengthBetween
};