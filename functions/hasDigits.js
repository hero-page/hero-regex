/* eslint-disable */ 

/**
 * Checks if a given string contains at least n digits.
 *
 * @param {string} inputString - The string to check for digits.
 * @param {number} n - The number of digits to check for.
 * @return {boolean} Returns true if inputString contains at least n digits, otherwise returns false.
 *
 * @example
 * // returns true
 * hasDigits("hello12world3", 3)
 */
function hasDigits(inputString, n) {
    const inputStringArray = inputString.split("");
    let digitCount = 0;

    for (const char of inputStringArray) {
        if (char >= "0" && char <= "9") {
            digitCount++;
        }
        if (digitCount >= n) {
            return true;
        }
    }

    return false;
}

module.exports = {
    hasDigits
};