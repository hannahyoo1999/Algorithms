// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
    let arr = [];
    let leftpointer = 0;
    let rightpointer = 0;
    while (leftpointer< left.length && rightpointer< right.length){
        if (left[leftpointer]<right[rightpointer]){ 
            arr.push(left[leftpointer])
            leftpointer++;
        }else{
            arr.push(right[rightpointer])
            rightpointer++
        }
    }
    if(leftpointer<left.length){
        for(let i = leftpointer; i <left.length; i++){
            arr.push(left[i])
        }
    }else{
        for(let j= rightpointer; j<right.length; j++){
            arr.push(right[j])
        }
    }
    return arr
}
console.log(merge(sortedA1, sortedB1))
console.log(merge(sortedA2, sortedB2))
console.log(merge(sortedA3, sortedB3))
console.log(merge(sortedA4, sortedB4))

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */

function mergeSort(nums = []) {
    if (nums.length === 1){
        return nums
    }
    const mid = Math.floor(nums.length/2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
    return merge(sortedLeft, sortedRight)
}
console.log(mergeSort(numsRandomOrder))
console.log(mergeSort(numsReversed))