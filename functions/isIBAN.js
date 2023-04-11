/* eslint-disable */ 

/**
 * Validates if a given string is a valid International Bank Account Number (IBAN).
 *
 * @param {string} iban - The IBAN string to validate.
 * @return {boolean} True if the given IBAN is valid, false otherwise.
 * @example
 * // Check if the provided IBAN is valid
 * isIBAN('GB82WEST12345698765432'); // returns true
 */
function isIBAN(iban) {
    // Remove whitespace and hyphens from the input
    const sanitizedIban = iban.replace(/[\s-]/g, "").toUpperCase();

    // Check basic requirements for the IBAN
    if (!/^(?:[A-Z]{2}\d{2}[A-Z\d]+)$/.test(sanitizedIban)) {
        return false;
    }

    // Move the first four characters to the end of the string
    const repositionedIban = sanitizedIban.substr(4) + sanitizedIban.substr(0, 4);

    // Convert each character to a number
    const numberIban = repositionedIban.split("").map((char) => {
        return isNaN(char) ? char.charCodeAt(0) - "A".charCodeAt(0) + 10 : char;
    });

    // Convert the character array to a single large integer
    const ibanNumber = BigInt(numberIban.join(""));

    // Check if the IBAN is valid using modulo 97
    return ibanNumber % 97n === 1n;
}

module.exports = {
    isIBAN
};
