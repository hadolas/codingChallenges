/* Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci
sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which 
starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

e.g.    fib(4)      // 3
        fib(10)     // 55
        fib(28)     // 317811
        fib(35)     // 9227465
*/

function fib(num) {
    if(num<=2) {
        return 1;
    }
    return fib(num-1) + fib(num-2);
}

// fib(1)      // 1
// fib(2)      // 1
// fib(3)      // 2
// fib(5)      // 5
// fib(42)     // 267,914,296
// fib(10)     // 55
// fib(28)     // 317,811
// fib(35)     // 9,227,465