/** Write a function called maxSubarraySum which accepts an array of integers and a 
number called n. The function should calculate the maximum sum of n consecutive 
elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2)   // 10
maxSubarraySum([1,2,5,2,8,1,5],4)   // 17
maxSubarraySum([4,2,1,6],1)         // 6
maxSubarraySum([4,2,1,6,2],4)       // 13
maxSubarraySum([],4)                // null
**/

function maxSubarraySum(arr, n) {

    // if arr length is less than n, return null
    if(arr.length<n) {
        return null;
    }

    // console.log(arr.length, n)

    // create var for highest sum calculated
    // var highestSumCalculated = 0;
    var highestSumCalculated = -Infinity;
    
    // loop through array checking groups of n consecutive elements
    for(var i=0; i<arr.length-n+1;i++) {
        var tempSum = 0;
        for(var j=0; j<n; j++) {
            tempSum += arr[i+j];
            console.log(arr[i], arr[j], arr[i+j]);
        }
        // console.log(tempSum)
        // if sum of checked group is greater than highestSumCalculated, then update highestSumCalculated with new sum
        if(tempSum>highestSumCalculated) {
            highestSumCalculated = tempSum;
        }
    }


    // return highestSumCalculated
    return highestSumCalculated;
}

// maxSubarraySum([1,3,5],5);
// maxSubarraySum([1,2,3,4,5],3);
// maxSubarraySum([2,8,2,3,1,6,7,3,2,1,5,4],5);
// maxSubarraySum([-1,2,4,2,6,-7],3);
// maxSubarraySum([-1,-2,-3,-2,-6,-7],2);