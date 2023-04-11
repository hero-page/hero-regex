/* eslint-disable */ 

/**
 * Validates if a given string is a valid date.
 *
 * @param {string} dateString - The date string to validate.
 * @return {boolean} true if the given string is a valid date, false otherwise.
 * @example
 * isDate("12/31/2000"); // returns true
 * isDate("2000-02-29"); // returns true
 * isDate("1900-02-29"); // returns false
 */
function isDate(dateString) {
    if (typeof dateString !== "string" || dateString.trim() === "") {
        return false;
    }

    const validFormats = [
        /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19\d\d|20\d\d)$/,
        /^(19\d\d|20\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    ];

    for (const format of validFormats) {
        if (format.test(dateString)) {
            const dateParts = dateString.split(/\/|-/);
            const year = parseInt(dateParts[2], 10);
            const month = parseInt(dateParts[0], 10);
            const day = parseInt(dateParts[1], 10);

            if (month === 2) {
                if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
                    if (day > 29) { // leap year, days should be less than or equal to 29
                        return false;
                    }
                } else {
                    if (day > 28) { // non-leap year, days should be less than or equal to 28
                        return false;
                    }
                }
            } else if (month === 4 || month === 6 || month === 9 || month === 11) {
                if (day > 30) { // days should be less than or equal to 30 for these months
                    return false;
                }
            } else if (day > 31) { // days should be less than or equal to 31 for the other months
                return false;
            }

            const date = new Date(year, month - 1, day); // months are 0-indexed in Date objects
            if (
                date.getFullYear() !== year ||
                date.getMonth() !== month - 1 ||
                date.getDate() !== day
            ) {
                return false;
            }

            return true;
        }
    }

    return false;
}

module.exports = {
    isDate
};