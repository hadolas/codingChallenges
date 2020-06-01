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

    // Create var for highest. Set to first element in the arr
    var highestSumCalculated = arr[0];

    // Calc the sum of the first n elements by adding each element (after the first one) to highestSumCalculated 
    for(var i=1; i<n; i++) {
        highestSumCalculated += arr[i]
    }

    var tempSum = highestSumCalculated;
    // Loop through arr 
    for(var j=1; j<arr.length-n+1; j++) {

        // From tempSum, deduct value at arr[j-1] and add value at arr[j+n-1]
        tempSum -= arr[j-1];
        tempSum += arr[j+n-1]

        // if tempSum is greater than highestSumCalculated, make highestSumCalculated=tempSum
        if(tempSum > highestSumCalculated) {
            highestSumCalculated=tempSum;
        }
    }   

    // return highestSumCalculated
    return highestSumCalculated
}

// maxSubarraySum([1,3,5],5);
// maxSubarraySum([1,2,3,4,5],3);
// maxSubarraySum([2,8,2,3,1,6,7,3,2,1,5,4],5);
// maxSubarraySum([-1,2,4,2,6,-7],3);
// maxSubarraySum([-1,-2,-3,-2,-6,-7],2);
// maxSubarraySum([13,6,4,23,18,2,8,10], 1)