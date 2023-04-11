/* eslint-disable */ 

/**
 * Replaces all occurrences of a pattern in a given string with a new value, while preserving the original capitalization.
 * Handles cases such as case-insensitive matches, replacing with an empty value, or with very long strings.
 * Ignores cases where the pattern is an empty string.
 *
 * @param {string} inputString - The input string.
 * @param {string} pattern - The pattern to replace in the input string.
 * @param {string} newValue - The new value to replace the pattern with.
 * @return {string} The input string with all occurrences of the pattern replaced by the new value.
 *
 * @example
 * // Will replace all occurrences of "re" in "Replace me with a newer value, Reeeee", preserving capitalization
 * const result = replacePattern("Replace me with a newer value, Reeeee", "re", "xx");
 * console.log(result); // "Xxplace me with a newer value, Xxeeee"
 */
function replacePattern(inputString, pattern, newValue) {
    if (pattern === "") {
        return inputString;
    }

    const regexPattern = new RegExp(pattern, "gi");
    const matches = inputString.match(regexPattern);
    if (!matches) {
        return inputString;
    }

    let result = inputString;
    for (const match of matches) {
        const preservedCase = newValue.split("").map((char, index) => {
            return match[index] && match[index].isUpperCase() ? char.toUpperCase() : char;
        }).join("");
        result = result.replace(match, preservedCase);
    }
    return result;
}

module.exports = {
    replacePattern
};