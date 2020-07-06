/* Given an array of integers and a number, write a function called 'maxSubarraySum', which
finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the 
first example below. [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

E.g.    maxSubarraySum([100,200,300,400], 2)        // 700
        maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)   // 39
        maxSubarraySum([-3,4,0,-2,6,-1], 2)         // 5
        maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)  // 5
        maxSubarraySum([2,3], 3)                    // null

CONSTRAINTS
Time Complexity:  O(N)
Space Complexity: O(1)
*/

function maxSubarraySum(arr, n) {
    // Return null if the length of arr is greater than n
    if(arr.length < n) {
        return null;
    }

    // Create var for greatestSumCalculated
    var greatestSumCalculated = 0;

    // Calculate the sum of the first n numbers in arr. Store this value in greatestSumCalculated
    for(var i=0; i<n; i++) {
        greatestSumCalculated += arr[i];
    }

    // Create var for tempSum
    var tempSum = greatestSumCalculated;

    /* Loop through arr and calculate the sum of each set of n elements by subtracting the previous 
    element from the previous sum and adding the next. Store this sum in tempSum */
    for(var j=1; j<arr.length-n+1; j++) {
        tempSum = tempSum - arr[j-1] + arr[j+n-1];
        // console.log(j, tempSum);

        // If tempSum is > greatestSumCalculated, replace greatestSumCalculated with tempSum
        if(tempSum > greatestSumCalculated) {
            greatestSumCalculated = tempSum;
        }
    }

    // Return greatestSumCalculated
    return greatestSumCalculated;
}


// maxSubarraySum([1,5,3,2,6,5,4,1],3);                // 15
// maxSubarraySum([5,20,2,6,5], 3);                    // 28
// maxSubarraySum([-4,2,6,-3,-1,5,8,9,-10,7,2], 4);    // 21
// maxSubarraySum([40,12,17], 5);                      // null
// maxSubarraySum([100,200,300,400], 2);               // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4);          // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2);                // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2);         // 5
// maxSubarraySum([2,3], 3);                           // null
// maxSubarraySum([-1,-3,-6,-14,3,-12,-3,1,-1, -5], 3);    // -3