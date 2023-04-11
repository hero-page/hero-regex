/* eslint-disable */ 

/**
 * Finds the occurrences of a pattern in a given string.
 *
 * @param {string} inputString - The input string in which to search for pattern occurrences.
 * @param {string} pattern - The pattern to search for in the input string.
 * @param {boolean} caseInsensitive - Whether to perform case-insensitive matching (optional, default: false).
 * @param {boolean} ignoreWhitespace - Whether to ignore whitespace in the input string and pattern (optional, default: false).
 * @return {number} The number of occurrences of the pattern in the input string.
 *
 * @example
 * findPattern("hello world", "o", true) //Returns: 2
 * findPattern("hello world", "O", true) //Returns: 2
 * findPattern("It is a Bright and sunny day.", " ", false, true) //Returns: 6
 */
function findPattern(inputString, pattern, caseInsensitive = false, ignoreWhitespace = false) {
    if (pattern === "") {
        return 0;
    }

    if (ignoreWhitespace) {
        inputString = inputString.replace(/\s+/g, "");
        pattern = pattern.replace(/\s+/g, "");
    }

    if (caseInsensitive) {
        inputString = inputString.toLowerCase();
        pattern = pattern.toLowerCase();
    }
    
    let occurrences = 0;
    for (let i = 0; i <= inputString.length - pattern.length; i++) {
        if (inputString.substring(i, i + pattern.length) === pattern) {
            occurrences++;
        }
    }

    return occurrences;
}

module.exports = {
    findPattern
};