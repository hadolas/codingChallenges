/** Implement a function called 'countUniqueValues', which accepts a sorted array, and counts the
unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2])                // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])   // 7
countUniqueValues([])                           // 0
countUniqueValues([-2,-1,-1,0,1])               // 4 
**/

function countUniqueValues(arr) {
    // var keeping count of unique values
    var uniqueValueCount = 1;

    // set first pointer to index 0 arr
    var firstPointer = 0;

    // set second pointer to index 1 of arr
    var secondPointer = 1;

    // if array is empty, return 0 because there are 0 unique values
    if(arr.length===0) {
        return 0;
    }

    while(secondPointer<arr.length) {
        // console.log("FP: " + firstPointer)
        // console.log("SP: " + secondPointer)
        
        // if second pointer val is the same as first pointer val: increment second pointer index
        if(arr[secondPointer]===arr[firstPointer]) {
            secondPointer += 1

        // if second pointer val is different to first pointer val: increment uniqueValueCount; make first pointer index second pointer's position; increment second pointer index;
        } else {
            uniqueValueCount += 1;
            firstPointer = secondPointer
            secondPointer += 1;
        }

       // console.log("UV: " + uniqueValueCount)
    }

    return uniqueValueCount;
}

// countUniqueValues([1,2,3,4,4]);
// countUniqueValues([4,4,4,5,5]);
// countUniqueValues([]);
// countUniqueValues([-4,-1,0,3,3,6,7]);
// countUniqueValues([3]);