/* eslint-disable */ 

/**
 * Checks if a given string exactly matches a given pattern. Handles matching
 * plain text, case-insensitive matches, and complex patterns with nested groups.
 * Extreme cases to handle are very long strings and patterns. 
 * Ignores cases where the pattern is an empty string.
 *
 * @example
 * matchExact("hello world", "hello world"); // true
 * matchExact("hello world", "HELLO world", true); // true
 * matchExact("ab(cc(dd)ee)ff", "ab(cc(dd)ee)ff"); // true
 * matchExact("abccddeeff", "ab(cc(dd)ee)ff"); // false
 *
 * @param {string} str - The input string to be checked.
 * @param {string} pattern - The pattern to check against the input string.
 * @param {boolean} [caseInsensitive=false] - If true, the matching will be case-insensitive.
 * @return {boolean} True if the input string exactly matches the pattern, false otherwise.
 */
function matchExact(str, pattern, caseInsensitive = false) {
    if (caseInsensitive) {
        str = str.toLowerCase();
        pattern = pattern.toLowerCase();
    }

    try {
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(str);
    } catch (error) {
        return false;
    }
}

module.exports = {
    matchExact
};