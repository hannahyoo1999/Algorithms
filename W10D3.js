/* Given by Riot games.*/
// b70a164c32a20c10

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

function rehash(str) {
    const letterHashCounts = {};
    let numStr = "";
    let letter = str[0];

    for (let i = 1; i < str.length; i++) {
        const num = parseInt(str[i]);
        const isNum = !isNaN(num);
        const isLetter = isNaN(num);

        if (isNum) {
            numStr += str[i]; 
        }

        if (isLetter || i === str.length - 1) {
            const letterCount = parseInt(numStr);

            if (letter in letterHashCounts) {
                letterHashCounts[letter] += letterCount; 
            } else {
                letterHashCounts[letter] = letterCount;
            }

            letter = str[i];
            numStr = "";
        }
    }

    const alphabetized = Object.keys(letterHashCounts).sort();

    let newHash = "";

    // This could have been chained after the sort as a .forEach and then concat
    // the string, or .reduce instead to create the string to return.
    for (let i = 0; i < alphabetized.length; i++) {
        const letter = alphabetized[i];
        newHash += letter + letterHashCounts[letter];
    }

    return newHash;
}

console.log(rehash(str1))

function rehashArray(str) {
    const letterHashCounts = []
    let numStr = "";
    let letter = str[0];

    for (let i = 1; i < str.length; i++) {
        const num = parseInt(str[i]);
        const isNum = !isNaN(num);
        const isLetter = isNaN(num);

        if (isNum) {
            numStr += str[i];
        }

        if (isLetter || i === str.length - 1) {
            const letterCount = parseInt(numStr);
            let charCode = letter.charCodeAt() - 'a'.charCodeAt()
            if (letterHashCounts[charCode] === undefined) {
                letterHashCounts[charCode] = 0
            }
            letterHashCounts[charCode] += letterCount;

            letter = str[i];
            numStr = "";
        }
    }
    
    let newHash = "";

    for (let i = 0; i < letterHashCounts.length; i++) {
        if (letterHashCounts[i]) {
            newHash += String.fromCharCode(i + 97)
            newHash += letterHashCounts[i];
        }
    }
    return newHash;
}
console.log(rehashArray(str1))


/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/
// 1 h, 1 e, 3 l, 2 o, 1 r, 1 d
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
//const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) { }