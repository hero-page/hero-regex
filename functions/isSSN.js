/* eslint-disable */ 

/**
 * Validates if a given string is a valid U.S. Social Security Number (SSN).
 *
 * @param {string} ssn - The string to validate as a valid SSN.
 * @return {boolean} True if the given string is a valid SSN, false otherwise.
 * @example
 * // returns true
 * isSSN("123-45-6789")
 * // returns false
 * isSSN("1234-56789")
 */
function isSSN(ssn) {
    const ssnRegex = /^(\d{3}-\d{2}-\d{4})$/;
    return ssnRegex.test(ssn);
}

module.exports = {
    isSSN
};