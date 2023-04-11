/* eslint-disable */ 

/**
 * Validates if a given string is a valid IP address (both IPv4 and IPv6).
 *
 * @param {string} input - The IP address string to validate.
 * @return {boolean} True if the input is a valid IP address, false otherwise.
 *
 * @example
 * isIP("127.0.0.1"); // true
 * isIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334"); // true
 * isIP("not_an_ip_address"); // false
 */
function isIP(input) {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Pattern = /^((?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?!.*::.*::)(?:(?:[0-9a-fA-F]{1,4}:){1,7}|:)((?::[0-9a-fA-F]{1,4}){1,7}|:)|::(?!.*::)(?:(?:[0-9a-fA-F]{1,4}:){1,7}|:)((?::[0-9a-fA-F]{1,4}){1,7}|:)|(?:[0-9a-fA-F]{1,4}:){1,4}:(?:(?::[0-9a-fA-F]{1,4}){0,6}|(?:(?::[0-9a-fA-F]{1,4})?::)(?:(?:[0-9a-fA-F]{1,4}:)?){0,4}(?::[0-9a-fA-F]{1,4}){0,4})(?!.*\2)((?::[0-9a-fA-F]{1,4}){1,6}|:)$/;

    if (ipv4Pattern.test(input) || ipv6Pattern.test(input)) {
        return true;
    }
    return false;
}

module.exports = {
    isIP
};