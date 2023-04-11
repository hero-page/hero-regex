/* eslint-disable */ 

/**
 * Validates if a given string is a valid URL.
 *
 * @param {string} urlString - The string to validate as a URL.
 * @return {boolean} True if the given string is a valid URL, otherwise false.
 * @example
 * // returns true
 * isURL("https://www.example.com");
 * // returns true
 * isURL("http://www.example.com");
 * // returns false
 * isURL("www.example.com");
 */
function isURL(urlString) {
    const pattern = /^((http|https):\/\/)?((([a-zA-Z\d](([a-zA-Z\d-]){0,61}[a-zA-Z\d])?\.)*[a-zA-Z]{2,})|(([0-9]{1,3}\.){3}[0-9]{1,3}))(:[1-9][0-9]{0,4})?(\/[-a-zA-Z\d%_.~:'()?])+(\.[a-zA-Z]{2,4})?$/;
    return pattern.test(urlString);
}

module.exports = {
    isURL
};