/* eslint-disable */ 

/**
 * Checks if a given string contains at least n uppercase characters.
 *
 * @param {string} str - The string to check for uppercase characters.
 * @param {number} n - The minimum number of uppercase characters required.
 * @return {boolean} True if the string contains at least n uppercase characters, false otherwise.
 *
 * Example usage:
 * hasUpperCase("Hello World", 2); // Returns true
 * hasUpperCase("Hello World", 3); // Returns false
 */
function hasUpperCase(str, n) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            count++;
        }

        if (count >= n) {
            return true;
        }
    }

    return n === 0;
}

module.exports = {
    hasUpperCase
};