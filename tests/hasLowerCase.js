/* eslint-disable */ 


        const {hasLowerCase} = require("../functions/hasLowerCase"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for hasLowerCase function
 */
function testHasLowerCase() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "hasLowerCase";

    // Test case 1
    try {
        const result = hasLowerCase("HelloWorld", 5);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2
    try {
        const result = hasLowerCase("HELLO WORLD", 1);
        if (result === false) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 3
    try {
        const result = hasLowerCase("ABCDEFG", 0);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 4
    try {
        const result = hasLowerCase("abcdefghijklmnop", 14);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 5
    try {
        const result = hasLowerCase("ZzYyXxWwVvUu", 6);
        if (result === true) {
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
    testHasLowerCase
};
