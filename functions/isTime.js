/* eslint-disable */ 

/**
 * Validates if a given string is a valid time.
 *
 * @param {string} timeStr - The time string to validate.
 * @return {boolean} True if the given string is a valid time, false otherwise.
 *
 * @example
 * // returns true
 * isTime("12:34");
 * // returns true
 * isTime("12:34:56");
 * // returns true
 * isTime("12:34 PM");
 */
function isTime(timeStr) {
    const timePattern24Hr = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?$/;
    const timePattern12Hr = /^(1[0-2]|0?[1-9]):([0-5][0-9])(:([0-5][0-9]))?(\s[AaPp][Mm])$/;

    return timePattern24Hr.test(timeStr) || timePattern12Hr.test(timeStr);
}

module.exports = {
    isTime
};