/* Write a function called 'averagePair'. Given a sorted array of integers and a target average, determine if 
there is a pair of values in the array where the average of the pair equals the target average. There may be 
more than one pair that matches the average target.

E.g.    averagePair([1,2,3], 2.5) // true
        averagePair([1,3,3,5,6,7,10,12,19], 8) // true
        averagePair([-1,0,3,4,5,6], 4.1) // false
        averagePair([], 4) // false

BONUS CONSTRAINTS:
Time: O(N)
Space: O(1)
*/

function averagePair(arr, target) {
        
        // Set pointerA to the first index of arr
        var pointerA = 0;

        // Set pointerB to the second index of arr
        var pointerB = arr.length-1;

        // if arr is empty, return false
        if(arr.length === 0) {
                return false;
        }

        // for the length of arr
        for(var i=0; i<arr.length; i++) {

                // if pointerA index===pointerB index, return false
                if(pointerA === pointerB) {
                        return false;
                }
                      
                // calculate average of pointerA + pointerB (calculatedAvg)
                var calculatedAvg = (arr[pointerA] + arr[pointerB])/2;
                // console.log(i, calculatedAvg);                

                // if calculatedAvg is the same as the target, return true
                if(calculatedAvg===target) {
                        return true;
                } else {
                        // if calculatedAvg < target, increment pointerA index by one
                        if(calculatedAvg < target) {
                                pointerA += 1;
                        } else {
                        // if calculatedAvg > target, decrement pointerB index by one
                                pointerB-=1;
                        }                        
                }                          
        }      
}

// averagePair([3,4,5], 4.5);           // true
// averagePair([3,6,7,8,12], 9.5);      // true
// averagePair([2,4,5,7,8,9], 7.2);     // false
// averagePair([5], 5)                  // false
// averagePair([1,2,3], 2.5)            // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1)     // false
// averagePair([], 4)                   // false
