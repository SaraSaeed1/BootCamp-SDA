/*
Array: Concat
.push allowed: arrName.push(newItem)
Replicate JavaScript’s concat() which combines two arrays into one NEW array
Input: two arrays
Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"]
const arrB1 = [1, 2, 3]
// const expected1 = ["a", "b", 1, 2, 3]

const arrA2 = [1, 2, 3]
const arrB2 = ["a", "b"]
// const expected2 = [1, 2, 3, "a", "b"]

function concat(arr1,arr2){
    var newArr=[];

    for(i=0; i<arr1.length ; i++){
        newArr.push(arr1[i]);
    }
    for(i=0; i<arr2.length ; i++){
        newArr.push(arr2[i]);
    }
    return newArr;
}

console.log("----algorithm1----")
console.log(concat(arrA1,arrB1));
console.log(concat(arrA2,arrB2));


/* ******************************************************************************** */
// Interview 2020!!
/*
Given one array,
return a new array that contains all of the original items duplicated twice
*/

const arrA3 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

// const arr2 = ["a"];
// const expected2 = ["a", "a"];

// const arr3 = [];
// const expected3 = [];

function concatArrWithSelf(arr) {
    var newArr=[];
    var repeat =2;
    for(i=0 ; i<repeat; i++){
        for(j=0; j<arr.length ; j++){
        newArr.push(arr[j]);
        }
    }
    return newArr;
}

    console.log("----algorithm2----")
    console.log(concatArrWithSelf(arrA3))
