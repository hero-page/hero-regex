/* eslint-disable */ 

/**
 * Validates if a given string is a valid postal code for a specific country.
 *
 * @param {string} postalCode - The postal code to validate.
 * @param {string} countryCode - The 2-letter ISO country code to validate against.
 * @return {boolean} True if the postal code is valid for the country, false otherwise.
 *
 * @example
 * // returns true
 * isPostalCode("90210", "US");
 *
 * // returns false
 * isPostalCode("abcdef", "US");
 */
function isPostalCode(postalCode, countryCode) {
    const postalCodeRegex = {
        "US": /^[\d]{5}(-[\d]{4})?$/,
        "UK": /^([A-Za-z]{1,2}\d{1,2}[A-Za-z]?)\s?(\d[A-Za-z]{2})$/,
        "CA": /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/,
    };

    const regex = postalCodeRegex[countryCode.toUpperCase()];

    if (regex) {
        return regex.test(postalCode);
    }

    return false;
}

module.exports = {
    isPostalCode
};