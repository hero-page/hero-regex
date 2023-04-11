/* eslint-disable */ 


        const {isPhoneNumber} = require("../functions/isPhoneNumber"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}  /**
   * Tests the isPhoneNumber function with various input cases.
   */
  function testIsPhoneNumber() {
      let numberOfTestsPassed = 0;
      let numberOfTestsFailed = 0;
      const nameOfFunction = "isPhoneNumber";

      try {
          const result = isPhoneNumber("+1 (555) 123-4567");
          if (result === true) {
              numberOfTestsPassed++;
          } else {
              numberOfTestsFailed++;
          }
      } catch (err) {
          numberOfTestsFailed++;
      }

      try {
          const result = isPhoneNumber("555-123-4567");
          if (result === true) {
              numberOfTestsPassed++;
          } else {
              numberOfTestsFailed++;
          }
      } catch (err) {
          numberOfTestsFailed++;
      }

      try {
          const result = isPhoneNumber("+44 20 7183 8750");
          if (result === true) {
              numberOfTestsPassed++;
          } else {
              numberOfTestsFailed++;
          }
      } catch (err) {
          numberOfTestsFailed++;
      }

      try {
          const result = isPhoneNumber("020 8123 4567");
          if (result === true) {
              numberOfTestsPassed++;
          } else {
              numberOfTestsFailed++;
          }
      } catch (err) {
          numberOfTestsFailed++;
      }

      try {
          const result = isPhoneNumber("1 555-123-456");
          if (result === false) {
              numberOfTestsPassed++;
          } else {
              numberOfTestsFailed++;
          }
      } catch (err) {
          numberOfTestsFailed++;
      }

      try {
          const result = isPhoneNumber("+1 (123) 555-ABCD");
          if (result === false) {
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
      testIsPhoneNumber,
  };