/* eslint-disable */ 


        const {matchExact} = require("../functions/matchExact"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the matchExact function for various cases.
 */
function testMatchExact() {
    const name_of_function = "matchExact";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const result = matchExact("hello world", "hello world");
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = matchExact("hello world", "HELLO world", true);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = matchExact("ab(cc(dd)ee)ff", "ab(cc(dd)ee)ff");
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = matchExact("abccddeeff", "ab(cc(dd)ee)ff");
        if (result === false) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Extreme cases: very long strings and patterns
    try {
        const veryLongStr = "a".repeat(10000);
        const veryLongPattern = "a".repeat(10000);
        const result = matchExact(veryLongStr, veryLongPattern);
        if (result === true) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const veryLongStr = "a".repeat(10000);
        const veryLongPattern = "b".repeat(10000);
        const result = matchExact(veryLongStr, veryLongPattern);
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
    testMatchExact
};