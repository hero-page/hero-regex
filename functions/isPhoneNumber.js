/* eslint-disable */ 

/**
 * Validates if a given string is a valid phone number.
 *
 * @param {string} input - The input string to be validated as a phone number.
 * @return {boolean} Returns true if the given input is a valid phone number, otherwise returns false.
 *
 * @example
 * // Returns true
 * isPhoneNumber("+1 (555) 123-4567")
 */
function isPhoneNumber(input) {
    // Remove special characters and whitespace
    const sanitizedInput = input.replace(/[^0-9+]/g, '');

    // Check if it contains at least 10 digits and a maximum of 15 digits
    const isValidLength = sanitizedInput.length >= 10 && sanitizedInput.length <= 15;

    // Check if it starts with a + symbol for international numbers or with digits
    const isValidStart = sanitizedInput[0] === "+" || /^[0-9]$/.test(sanitizedInput[0]);

    return isValidLength && isValidStart;
}

module.exports = {
    isPhoneNumber
};