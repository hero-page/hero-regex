/* eslint-disable */ 

/**
 * Checks if a given string contains at least n lowercase characters.
 *
 * @param {string} str - The string to check for lowercase characters.
 * @param {number} n - The number of lowercase characters required.
 * @return {boolean} True if the string contains n or more lowercase characters; false otherwise.
 * 
 * @example
 * // returns true
 * hasLowerCase("HelloWorld", 5);
 *
 * // returns false
 * hasLowerCase("HELLO WORLD", 1);
 *
 * // returns true, due to handling n = 0
 * hasLowerCase("ABCDEFG", 0);
 */
function hasLowerCase(str, n) {
    const lowerCaseRegEx = /[a-z]/;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (lowerCaseRegEx.test(str[i])) {
            count++;
        }

        if (count >= n) {
            return true;
        }
    }

    return false;
}

module.exports = {
    hasLowerCase
};