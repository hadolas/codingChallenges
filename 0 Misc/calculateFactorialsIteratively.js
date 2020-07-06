/* Write Factorials Iteratively */

function calculateFactorialIteratively(num) {

    // var for currentTotal (which stores the total calculated at the end of each iteration). Initial val set to factorial num given as argument.
    var currentTotal = num;

    // Loop num-1 number of times. Multiply currentTotal with i. Decrement i by 1 after each iteration.
    for(var i=num-1; i>0; i--) {
        console.log(i, currentTotal);
        currentTotal *= i;
    }

    return currentTotal;
}

// calculateFactorialIteratively(3)     // 6
// calculateFactorialIteratively(4)     // 24
// calculateFactorialIteratively(5)     // 120
// calculateFactorialIteratively(9)     // 362,880
// calculateFactorialIteratively(12)    // 479,001,600