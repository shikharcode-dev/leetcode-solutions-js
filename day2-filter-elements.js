// Day 2 - Filter Elements from Array
// Platform: LeetCode
// Topic: Array / Functions

var filter = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
};