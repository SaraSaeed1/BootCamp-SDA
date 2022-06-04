/*
Given an array of integers
return the index where the smallest integer is located
return -1 if there is no smallest integer (array is empty)
since -1 is not a valid index, this indicates it couldn't be found
If the smallest integer occurs more than once, return the index of the first one.
*/
// num = 1 <- assignment
// num == 1 <- comparison


const nums1 = [5, 2, 3]
const expected1 = 1

const nums2 = [5, 7, 2, 3]
const expected2 = 2

const nums3 = []
const expected3 = -1


function indexOfMinVal(nums) {
    smallest = nums[0];
    let i;
    for( i=0 ; i < nums.length ; i++){

        if(nums[i] < smallest){
		smallest = nums[i];
        console.log (i);
        }
    }

    if(nums.length==0){
        console.log(-1);
    } 
}
indexOfMinVal(nums1);
indexOfMinVal(nums2);
indexOfMinVal(nums3);

/* ******************************************************************************** */

/*
Array: Second-Largest
Return the second-largest element of an array, or null if there is none.
Bonus: do it with one loop and no nested loops
*/

const nums4 = [2, 3, 1, 4]
const expected4 = 3

const nums5 = [3, 3]
const expected5 = null

const nums6 = [2]
const expected6 = null

const nums7 = []
const expected7 = null

function secondLargest(nums) {
    let largest = null;
    let secondLargest = null

    for(i=0 ; i<nums.length ; i++){
        if (nums[i]> largest){
            secondLargest = largest;
            largest = nums[i]
        }
        if(nums[i] > secondLargest && nums[i]  <largest){
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest(nums4))
console.log(secondLargest(nums5))
console.log(secondLargest(nums6))
console.log(secondLargest(nums7))