/* eslint-disable */ 

/**
 * Counts the number of words in a given string, delimited by whitespace.
 *
 * @param {string} str - The string to count words in.
 * @return {number} The number of words in the given string.
 *
 * @example
 * // Returns 5
 * countWords("Hello, this is a test!");
 */
function countWords(str) {
    if (!str || str.trim() === "") {
        return 0;
    }
    const words = str.trim().split(/\s+/);
    return words.length;
}

module.exports = {
    countWords
};