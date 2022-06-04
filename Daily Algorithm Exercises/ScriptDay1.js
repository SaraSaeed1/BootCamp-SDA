const arr1 = ["a", "b", "c"];
// const newItem1 = "d";
// const expected1 = 4
// const expectedArr1 = ["a", "b", "c", "d"]

const arr2 = []
// const newItem2 = "a"
// const expected2 = 1
// const expectedArr2 = ["a"]

let newItem;
function push(arr,newItem ){
        arr[arr.length]=newItem;
        return arr;
    }

    console.log(push(arr1,"d"));
    console.log(push(arr2,"a"));

