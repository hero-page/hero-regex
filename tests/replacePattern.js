/* eslint-disable */ 


        const {replacePattern} = require("../functions/replacePattern"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for replacePattern
 */
function testReplacePattern() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "replacePattern";

    try {
        const result = replacePattern("Replace me with a newer value, Reeeee", "re", "xx");
        if (result === "Xxplace me with a newer value, Xxeeee") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = replacePattern("Hello World, it's time to TEST", "test", "win");
        if (result === "Hello World, it's time to WIN") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = replacePattern("LongStringOfAaaaaaaaaaaaaaa", "a", "A");
        if (result === "LongStringOfAAAAAAAAAAAAAAAAA") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = replacePattern("Remove the vowels from this sentence", "[aeiou]", "");
        if (result === "Rmv th vwls frm ths sntnc") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = replacePattern("This example should not change", "", "new value");
        if (result === "This example should not change") {
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
    testReplacePattern
};