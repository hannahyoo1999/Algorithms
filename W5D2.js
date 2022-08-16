/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

// My function: 
// function interleaveArrays(arr1, arr2) {
//     let newArr = []
//     let shortest_arr= arr1
//     let longest_arr = arr2
//     if (arr1.length > arr2.length){
//         shortest_arr = arr2
//         longest_arr = arr1
//     }for (let i = 0; i < shortest_arr.length; i++) {
//         newArr.push(arr1[i], arr2[i])
//     }
//         // if (shortest_arr == arr1){
//         //     for (let j = shortest_arr.length; j<arr2.length; j++){
//         //         newArr.push(arr2[j])}
//         // }else {
//         //     for (let j = shortest_arr.length; j<arr1.length; j++){
//         //         newArr.push(arr1[j])}
//         // }
//         for (let j = shortest_arr.length; j<longest_arr.length; j++){
//             newArr.push(longest_arr[j])}
//     return newArr
// }

function interleaveArrays(arr1, arr2) {
    let result = []
    if(arr1.length > arr2.length){
        len = arr1.length;
    }
    else{
        len = arr2.length
    }
    for(var i = 0; i < len; i++){
        if(i < arr1.length){
            result.push(arr1[i])
        }
        if(i < arr2.length){
            result.push(arr2[i])
        }
    }
    return result
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

