/**
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
//Linear Search
//Time: 0(N^2) | Space 0(1)
//two for loops are 0(N) which is why time complexity is 0(N^2)
var containsDuplicate = function (nums) {
    for(let right = 0; right < nums.length; right++){
        for(let left = 0; left<right; left++){
            if(nums[left] === nums[right]){
                return true;
            }
        }
    }
    return false
};

//HeapSort 
//Time: 0(N*log(N)) | Space 0(1)
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a-b);
    return hasDuplicate(nums);
}
const hasDuplicate = (nums) =>{
    for(let curr = 0; curr<nums.length -1; curr++){
        const next = curr+1;
        const isNextDuplicate = nums[curr] === nums[next];
        if(isNextDuplicate) return true;
    }
    return false;
}

nums1 = [1,2,3,1] 
console.log(containsDuplicate(nums1)) //Output: true

nums2 = [1,2,3,4]
console.log(containsDuplicate(nums2)) //Output: false

nums3 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums3)) //Output: true

