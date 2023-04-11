/* eslint-disable */ 


        const {isDate} = require("../functions/isDate"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for validating isDate
 */
function testIsDate() {
    const name_of_function = "isDate";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    // Test valid date formats
    try {
        if (isDate("12/31/2000") && isDate("2000-02-29")) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test invalid date formats
    try {
        if (!isDate("1900-02-29") && !isDate("02/29/1900") && !isDate("13/01/2000") && !isDate("2000-13-01")) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test leap years
    try {
        if (isDate("02/29/2004") && isDate("02/29/2020") && !isDate("02/29/1900") && !isDate("02/29/2005")) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test different date ranges and edge cases
    try {
        if (
            isDate("01/01/1970") &&
            isDate("01/01/2021") &&
            !isDate("12/32/2020") &&
            !isDate("2000-02-30")
        ) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test ignoring cases with obvious invalid input
    try {
        if (!isDate("") && !isDate("   ") && !isDate("abc")) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testIsDate
};