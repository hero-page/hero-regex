/* eslint-disable */ 

/**
 * Checks if a given string is a palindrome, ignoring whitespace and case.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the given string is a palindrome, otherwise false
 *
 * @example
 * isPalindrome("A man a plan a canal Panama"); // returns true
 */
function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}

module.exports = {
    isPalindrome
};