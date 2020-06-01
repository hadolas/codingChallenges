/** Write a function called 'same', which accepts two arrays. 
The function should return true if every value in the array has it's 
corresponding value squared in the second array. The frequency of
values must be the same.

e.g. same([1,2,3], [4,1,9])  // true
     same([1,2,3], [1,9])    // false
     same([1,2,1], [4,4,1])  // false (must be same frequency) 
**/

function same(firstArray, secondArray) {
    var arrayA = firstArray
    var arrayB = secondArray

    // if length of arrayA does not equallength of arrayB, return false
    if(arrayA.length !=arrayB.length) {
        return false
    }
    // for each element in arrayA
    for(var i=0; i<arrayA.length; i++) {
    // console.log("ARRAYB: " + arrayB)
        for(var j=0; j<arrayB.length; j++) {
            // if it's corresponding squared val is in arrayB, change val in arrayB to 'F'
            if(Math.pow(arrayA[i],2)===arrayB[j]) {
                arrayB[j] = "F";
                break;
            }

        }
        // console.log("ARRAYB: " + arrayB)
    }

    // if all values in arrayB ARE NOT 'F', return false
    for(var j=0; j<arrayB.length; j++) {
        if(arrayB[j]!=='F') {
            return false
        }
    }
    return true
}


// same([1,2,2,1,1,1,1,1,1], [1,1,4,1,1,1,1,1,4])
// same([3,2,3,4],[1,4,9,9])
// same([2,4,8,3,2], [64,16,4,4,4])
// same([3,4,8,2,3], [64,16,4,4,4])
// same([2,2,2,2,5,5,6,3,6], [36,2,4,25,9,4,4,4,25])