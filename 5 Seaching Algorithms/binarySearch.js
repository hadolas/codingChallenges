/*  Binary Search:
    Write a function called 'binarySearch' which accepts a sorted array and a value and returns 
    the index at which the value exists. Otherwise, return -1.
*/

function binarySearch(arr, val) {
    // Set leftPointer to start of arr
    var leftPointer = 0;
    // Set rightPointer to end of arr
    var rightPointer = arr.length-1;
    
    // Run loop while leftPointer is less than or equal to rightPointer.
    while(leftPointer<=rightPointer) {
        // console.log(leftPointer, middlePointer, rightPointer);

        // Set middlePointer index to average of leftPointer+rightPointer, and round up to integer
        var middlePointer = Math.ceil((leftPointer+rightPointer)/2);

        // If middlePointer value is equal to val, return middlePointer (the index of the val)
        if(arr[middlePointer]===val) {
            return middlePointer;
        }

        // If middlePointer value is less than val, change leftPointer index to middlePointer+1, 
        // else if middlePointer is >= to val, change rightPointer index to middlePointer-1  
        if(arr[middlePointer]<val) {
            leftPointer=middlePointer+1;
        } else {
            rightPointer=middlePointer-1;
        }       
    }
    // If val is not in arr, return -1
    return -1
}
// binarySearch([1,4,7,10,13,16,19,22], 22);           // 7
// binarySearch([1,4,7,10,13,16,19,22], 20);           // -1
// binarySearch([-8,-4,0,2,5,8,11,14,20,25,32], 25)    // 9

/*
L0 R7 M4    [1,4,7,10,13,16,19,22]
L5 R7 M6                [16,19,22]
L7 R7 M7                      [22]
*/