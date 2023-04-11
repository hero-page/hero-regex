/* eslint-disable */ 

/**
 * Validates if a given string is a valid credit card number.
 *
 * @param {string} creditCardNumber - The string to be validated.
 * @return {boolean} True if the credit card number is valid, otherwise False.
 * @example
 * // returns true
 * isCreditCard("4111-1111-1111-1111");
 * // returns false
 * isCreditCard("abc3-44-5abc-44");
 */
function isCreditCard(creditCardNumber) {
    const formattedNumber = creditCardNumber.replace(/[-\s]/g, "");
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if (!regex.test(formattedNumber)) {
        return false;
    }

    let sum = 0;
    for (let i = formattedNumber.length - 1, j = 1; i >= 0; i--, j++) {
        const num = parseInt(formattedNumber.charAt(i));
        const doubled = j % 2 === 0 ? num * 2 : num;
        sum += doubled > 9 ? doubled - 9 : doubled;
    }

    return sum % 10 === 0;
}

module.exports = {
    isCreditCard
};