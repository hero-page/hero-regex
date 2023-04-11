/* eslint-disable */ 


        const {countWords} = require("../functions/countWords"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for countWords function.
 */
function testCountWords() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "countWords";

    // Test case 1: Basic string with 5 words
    try {
        const result = countWords("Hello, this is a test!");
        if (result === 5) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case 2: String with punctuation and consecutive whitespace
    try {
        const result = countWords("Hello,    this   is a test!");
        if (result === 5) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case 3: Very long string
    try {
        const longString = "This is a very long string with a lot of words, enough to make sure our countWords function can handle longer strings without breaking. It should have a total of 28 words.";
        const result = countWords(longString);
        if (result === 28) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test case 4: String with large blocks of whitespace
    try {
        const stringWithLargeWhitespace = "This       is    a       test      with       large      whitespace.";
        const result = countWords(stringWithLargeWhitespace);
        if (result === 7) {
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
    testCountWords
};