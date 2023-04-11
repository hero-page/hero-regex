/* eslint-disable */ 


        const {isLengthBetween} = require("../functions/isLengthBetween"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for isLengthBetween function
 */
function testIsLengthBetween() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "isLengthBetween";

    try {
        const expectedResult = true;
        const actualResult = isLengthBetween("hello", 3, 5);
        if (actualResult === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const expectedResult = false;
        const actualResult = isLengthBetween("hello", 2, 4);
        if (actualResult === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const expectedResult = false;
        const actualResult = isLengthBetween("hello", 6, 10);
        if (actualResult === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const expectedResult = true;
        const actualResult = isLengthBetween("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 62, 62);
        if (actualResult === expectedResult) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const expectedResult = false;
        const maxStringLength = Number.MAX_SAFE_INTEGER;
        const actualResult = isLengthBetween("a".repeat(maxStringLength), maxStringLength - 1, maxStringLength);
        if (actualResult === expectedResult) {
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
    testIsLengthBetween
};