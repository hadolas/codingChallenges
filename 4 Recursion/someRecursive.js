/* Write a recursive function called someRecursive which accepts an array and 
a callback. The function returns true if a single value in the array returns 
true when passed to the callback. Otherwise it returns false.

E.g.    SAMPLE INPUT / OUTPUT
        const isOdd = val => val % 2 !== 0;

        someRecursive([1,2,3,4], isOdd)     // true
        someRecursive([4,6,8,9], isOdd)     // true
        someRecursive([4,6,8], isOdd)       // false
        someRecursive([4,6,8], val => val > 10);    // false
*/

function someRecursive(arr, callback){
  
    if(arr.length===0) {
            return false;
    }
    if(callback(arr[0]) === true) {
            return true;
    }

    return someRecursive(arr.splice(1), callback); 
}

function isOdd(num) {
    if(num%2!==0) {
        return true;
    }    
}

function isEven(num) {
    if(num%2===0) {
        return true;
    }
}

// someRecursive([4,6,8], val => val > 10);    // false
// someRecursive([4,0,8,0,0], isOdd)       // false
// someRecursive([1,2,3,4], isEven)        // true
// someRecursive([2,4,6,8,10], isEven)     // true
// someRecursive([2,4,6,8,10], isOdd)      // false