/* eslint-disable */ 


        const {isIBAN} = require("../functions/isIBAN"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for isIBAN.
 */
function testIsIBAN() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "isIBAN";

    // Test cases
    const validIBANList = [
        "GB82WEST12345698765432",
        "DE12500105170648489890",
        "GR16 0110 1250 0000 0001 2300 695",
        "CH93-0076-2011-6238-5295-7",
    ];
    const invalidIBANList = [
        "GB82WEST1234569876543A",
        "DE1250010517064848989O",
        "GR16011012 50 0000 0001 2300 69@",
        "CH93-0076-2?11-6238-5295-7",
    ];

    // Testing valid IBANs
    try {
        validIBANList.forEach(iban => {
            if (isIBAN(iban)) {
                numberOfTestsPassed++;
            } else {
                numberOfTestsFailed++;
            }
        });
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Testing invalid IBANs
    try {
        invalidIBANList.forEach(iban => {
            if (!isIBAN(iban)) {
                numberOfTestsPassed++;
            } else {
                numberOfTestsFailed++;
            }
        });
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testIsIBAN
};