/* eslint-disable */ 

/**
 * Validates if a given string is a valid email address.
 *
 * @param {string} email - The email string to validate.
 * @return {boolean} true if the email is valid, false otherwise. 
 * 
 * @example
 *      const isValidEmail = isEmail("johndoe@example.com"); // true
 */
function isEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
}

module.exports = {
    isEmail
};