/* Write a function called recursiveRange which accepts a number and adds up all the numbers
from 0 to the number passed to the function.

e.g.    recursiveRange(6)   // 21
        recursiveRange(10)  // 55
*/ 

function recursiveRange(num) {
    var total = 0;
    
    function helper(helperInput) {
        if(helperInput===0) {
            return 1;
        }
        total += helperInput;
        if(helperInput>0) {
            // if helperInput is a positive number
            return helper(helperInput-1);    
        } else {
            // if helperInput is a negative number
            return helper(helperInput+1);
        }          
    }

    helper(num);
    return total;
}

// recursiveRange(4)   // 10
// recursiveRange(12)  // 78
// recursiveRange(18)  // 171
// recursiveRange(-4)  //-10
// recursiveRange(0)   // 0