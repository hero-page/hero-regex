/* eslint-disable */ 


        const {isCreditCard} = require("../functions/isCreditCard"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for the isCreditCard function
 */
function testIsCreditCard() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "isCreditCard";

    // Test case 1: Valid Visa credit card number
    try {
        const result = isCreditCard("4111-1111-1111-1111");
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2: Invalid credit card number with invalid characters
    try {
        const result = isCreditCard("abc3-44-5abc-44");
        if (result === false) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 3: Valid Mastercard credit card number
    try {
        const result = isCreditCard("5500 0000 0000 0004");
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 4: Valid American Express credit card number
    try {
        const result = isCreditCard("3782-822463-10005");
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 5: Invalid credit card number with incorrect length
    try {
        const result = isCreditCard("4000 0010");
        if (result === false) {
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
    testIsCreditCard
};