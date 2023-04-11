/* eslint-disable */ 


        const {hasUpperCase} = require("../functions/hasUpperCase"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for hasUpperCase.
 */
function testHasUpperCase() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "hasUpperCase";

    // Test 1: Basic case with 2 uppercase characters
    try {
        const result = hasUpperCase("Hello World", 2);
        if (result === true) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test 2: Basic case expecting false with 3 uppercase characters
    try {
        const result = hasUpperCase("Hello World", 3);
        if (result === false) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test 3: Case with no uppercase characters
    try {
        const result = hasUpperCase("hello world", 1);
        if (result === false) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test 4: Case with all uppercase characters
    try {
        const result = hasUpperCase("HELLO WORLD", 5);
        if (result === true) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test 5: Case with long string and n=0
    try {
        const result = hasUpperCase("This is a very long string with a lot of characters and words to make it a big test case", 0);
        if (result === true) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testHasUpperCase
};