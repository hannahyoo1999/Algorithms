const str1 = "creature";
const str2= "dog";
const str3= "hello";
const str4 = "";

/*
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverString(str) {
    var newString=""
    newString= str.split("").reverse().join("")
    return newString
    /*for (var i = str.length-1;i>0;i--){
        newString += str[i];
    }*/
}


console.log(reverString(str1));
console.log(reverString(str2));
console.log(reverString(str3));
console.log(reverString(str4));