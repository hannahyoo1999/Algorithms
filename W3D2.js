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
    }
    if (str === "") // This is the terminal case that will end the recursion
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0); //substring is like slice 
    let rev=""
    for (let char of str){
        rev = char + rev
    }*/

}


console.log(reverString(str1));
console.log(reverString(str2));
console.log(reverString(str3));
console.log(reverString(str4));