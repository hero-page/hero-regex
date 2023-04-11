/* eslint-disable */ 

/**
 * Checks if a given string contains at least n special (non-alphanumeric) characters.
 *
 * @param {string} str - The string to check for special characters.
 * @param {number} n - The minimum number of special characters required.
 * @return {boolean} Returns true if the string contains at least n special characters; otherwise, false.
 *
 * @example
 * hasSpecialChars("abc!@#123", 3) // true
 * hasSpecialChars("abc!@#123", 4) // false
 * hasSpecialChars("abcdef123", 1) // false
 * hasSpecialChars("abc!@#&*^%$123", 8) // true
 */
function hasSpecialChars(str, n) {
    let specialCharsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (!(/\w/.test(str[i]))) {
            specialCharsCount++;
            if (specialCharsCount >= n) {
                return true;
            }
        }
    }
    
    return false;
}

module.exports = {
    hasSpecialChars
};