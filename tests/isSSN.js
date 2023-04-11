/* eslint-disable */ 


        const {isSSN} = require("../functions/isSSN"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test the isSSN() function for various SSN formats, case-insensitive matches, and SSNs with special characters such as hyphens.
 * Extreme cases to handle are SSNs with non-standard formats.
 */
function testIsSSN() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "isSSN";
    
    // Valid SSN format
    try {
        const validSSN = isSSN("123-45-6789");
        if (validSSN) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }
    
    // Invalid SSN format
    try {
        const invalidSSN = isSSN("1234-56789");
        if (!invalidSSN) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }
    
    // Another invalid SSN format
    try {
        const invalidFormatSSN = isSSN("123-4-6789");
        if (!invalidFormatSSN) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }
    
    // Special characters in SSN
    try {
        const specialCharSSN = isSSN("123#45$6789");
        if (!specialCharSSN) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }
    
    // Empty string as input
    try {
        const emptyStringSSN = isSSN("");
        if (!emptyStringSSN) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }
    
    // Whitespace input
    try {
        const whitespaceSSN = isSSN("   ");
        if (!whitespaceSSN) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }
    
    // Calling the addToReadme function with the generated test badge
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testIsSSN
};