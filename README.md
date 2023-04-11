
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-regex

A set of utility functions for working with regular expressions, such as finding and replacing text patterns and validating user input.

## Functions

### findPattern

Finds the occurrences of a pattern in a given string. Test cases include matching plain text, case-insensitive matches, and ignoring whitespace. Extreme cases to handle are very long strings and patterns with nested groups. Ignore cases where the pattern is an empty string.

### replacePattern

Replaces all occurrences of a pattern in a given string with a new value. Test cases include replacing plain text, case-insensitive matches, and preserving original capitalization. Extreme cases to handle are very long strings and replacing with an empty value. Ignore cases where the pattern is an empty string.

### matchExact

Checks if a given string exactly matches a given pattern. Test cases include matching plain text, case-insensitive matches, and complex patterns with nested groups. Extreme cases to handle are very long strings and patterns. Ignore cases where the pattern is an empty string.

### isEmail

Validates if a given string is a valid email address. Test cases include typical email formats, case-insensitive matches, and various domain extensions. Extreme cases to handle are long email addresses and internationalized domain names. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isURL

Validates if a given string is a valid URL. Test cases include typical URL formats, case-insensitive matches, and various domain extensions. Extreme cases to handle are long URLs and internationalized domain names. Ignore cases with obvious invalid input such as empty strings or whitespace.

### hasDigits

Checks if a given string contains at least n digits. Test cases include varying lengths of digits, digits interspersed with non-digit characters, and strings with no digits. Extreme cases to handle are very long strings and n=0 (expect true for any input). Ignore cases with empty strings if n > 0.

### hasUpperCase

Checks if a given string contains at least n uppercase characters. Test cases include varying lengths of uppercase characters, uppercase characters interspersed with lowercase characters, and strings with no uppercase characters. Extreme cases to handle are very long strings and n=0 (expect true for any input). Ignore cases with empty strings if n > 0.

### hasLowerCase

Checks if a given string contains at least n lowercase characters. Test cases include varying lengths of lowercase characters, lowercase characters interspersed with uppercase characters, and strings with no lowercase characters. Extreme cases to handle are very long strings and n=0 (expect true for any input). Ignore cases with empty strings if n > 0.

### hasSpecialChars

Checks if a given string contains at least n special (non-alphanumeric) characters. Test cases include varying lengths of special characters, special characters interspersed with alphanumeric characters, and strings with no special characters. Extreme cases to handle are very long strings and n=0 (expect true for any input). Ignore cases with empty strings if n > 0.

### isLengthBetween

Checks if the length of a given string is between min and max values inclusive. Test cases include varying lengths of strings, strings exactly at min or max values, and strings with mixed character types. Extreme cases to handle are very long strings and min/max values close to or equal to JavaScript's maximum string length. Ignore cases with empty strings if min > 0.

### isPalindrome

Checks if a given string is a palindrome, ignoring whitespace and case. Test cases include various palindromes, strings with spaces and special characters, and non-palindrome strings. Extreme cases to handle are long palindromes and palindromes with a large amount of whitespace. Ignore cases with only whitespace and/or empty strings.

### countWords

Counts the number of words in a given string, delimited by whitespace. Test cases include strings with varying numbers of words, strings with punctuation, and strings with consecutive whitespace characters. Extreme cases to handle are very long strings and strings with large blocks of whitespace. Ignore cases with only whitespace and/or empty strings.

### isPhoneNumber

Validates if a given string is a valid phone number. Test cases include various formats for phone numbers, international phone numbers, and numbers with special characters such as hyphens or parentheses. Extreme cases to handle are long phone numbers and phone numbers with many special characters. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isDate

Validates if a given string is a valid date. Test cases include various date formats (e.g. MM/DD/YYYY, YYYY-MM-DD), leap years, and different date ranges. Extreme cases to handle are dates near the minimum and maximum JavaScript date values. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isTime

Validates if a given string is a valid time. Test cases include various time formats (e.g. HH:mm, HH:mm:ss, hh:mm A), 12-hour and 24-hour formats, and different time ranges. Extreme cases to handle are times with uncommon formats, such as 2-digit hours in a 12-hour format. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isPostalCode

Validates if a given string is a valid postal code for a specific country. Test cases include various postal code formats for different countries, case-insensitive matches, and postal codes with special characters. Extreme cases to handle are postal codes with non-standard formats for their country. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isSSN

Validates if a given string is a valid U.S. Social Security Number (SSN). Test cases include various SSN formats, case-insensitive matches, and SSNs with special characters such as hyphens. Extreme cases to handle are SSNs with non-standard formats. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isCreditCard

Validates if a given string is a valid credit card number. Test cases include various credit card formats, case-insensitive matches, and credit card numbers with special characters such as spaces or hyphens. Extreme cases to handle are credit card numbers with non-standard formats. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isIBAN

Validates if a given string is a valid International Bank Account Number (IBAN). Test cases include various IBAN formats, case-insensitive matches, and IBANs with special characters such as spaces or hyphens. Extreme cases to handle are IBANs with non-standard formats. Ignore cases with obvious invalid input such as empty strings or whitespace.

### isIP

Validates if a given string is a valid IP address (both IPv4 and IPv6). Test cases include various IP address formats, case-insensitive matches, and IPs with special characters. Extreme cases to handle are IPs with non-standard or deprecated formats. Ignore cases with obvious invalid input such as empty strings or whitespace.

---
[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)

                

### Tests for countWords

![countWords](https://img.shields.io/badge/countWords()-3%20passed%2C%201%20failed.-ff69b4)

### Tests for hasSpecialChars

![hasSpecialChars](https://img.shields.io/badge/hasSpecialChars()-5%20passed%2C%201%20failed.-ff69b4)

### Tests for hasUpperCase

![hasUpperCase](https://img.shields.io/badge/hasUpperCase()-5%20passed%2C%200%20failed.-13b285)

### Tests for isCreditCard

![isCreditCard](https://img.shields.io/badge/isCreditCard()-5%20passed%2C%200%20failed.-13b285)

### Tests for isDate

![isDate](https://img.shields.io/badge/isDate()-4%20passed%2C%201%20failed.-ff69b4)

### Tests for isEmail

![isEmail](https://img.shields.io/badge/isEmail()-6%20passed%2C%201%20failed.-ff69b4)

### Tests for isIBAN

![isIBAN](https://img.shields.io/badge/isIBAN()-8%20passed%2C%200%20failed.-13b285)

### Tests for isIP

![isIP](https://img.shields.io/badge/isIP()-0%20passed%2C%205%20failed.-ff69b4)

### Tests for isLengthBetween

![isLengthBetween](https://img.shields.io/badge/isLengthBetween()-4%20passed%2C%201%20failed.-ff69b4)

### Tests for isPalindrome

![isPalindrome](https://img.shields.io/badge/isPalindrome()-4%20passed%2C%201%20failed.-ff69b4)

### Tests for isPhoneNumber

![isPhoneNumber](https://img.shields.io/badge/isPhoneNumber()-5%20passed%2C%201%20failed.-ff69b4)

### Tests for isPostalCode

![isPostalCode](https://img.shields.io/badge/isPostalCode()-5%20passed%2C%200%20failed.-13b285)

### Tests for isSSN

![isSSN](https://img.shields.io/badge/isSSN()-6%20passed%2C%200%20failed.-13b285)

### Tests for isTime

![isTime](https://img.shields.io/badge/isTime()-6%20passed%2C%200%20failed.-13b285)

### Tests for isURL

![isURL](https://img.shields.io/badge/isURL()-2%20passed%2C%206%20failed.-ff69b4)

### Tests for matchExact

![matchExact](https://img.shields.io/badge/matchExact()-4%20passed%2C%202%20failed.-ff69b4)

### Tests for replacePattern

![replacePattern](https://img.shields.io/badge/replacePattern()-2%20passed%2C%203%20failed.-ff69b4)

### Tests for hasDigits

![hasDigits](https://img.shields.io/badge/hasDigits()-4%20passed%2C%201%20failed.-ff69b4)

### Tests for hasLowerCase

![hasLowerCase](https://img.shields.io/badge/hasLowerCase()-5%20passed%2C%200%20failed.-13b285)

### Tests for findPattern

![findPattern](https://img.shields.io/badge/findPattern()-4%20passed%2C%201%20failed.-ff69b4)