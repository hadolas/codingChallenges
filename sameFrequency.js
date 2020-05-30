/* Write a function called sameFrequency. Given two positive integers, find out if the 
two numbers have the same frequency of digits.
(Time must be O(N))

e.g.    sameFrequency(182, 281) // true
        sameFrequency(34, 14) // false
        sameFrequency(3589578, 5879385) // true
        sameFrequency(22, 222) // false
*/

function sameFrequency(num1Input, num2Input) {

        // Create an object for each integer to keep track of freq of each digit
        var num1 = num1Input.toString();
        var num2 = num2Input.toString();
        var num1DigitFreqCount = {};
        var num2DigitFreqCount = {};


        // Return false if length of integers are NOT the same
        if(num1.length!==num2.length) {
                return false;
        }

        // Loop through first integer and populate num1DigitFreqCount object: if key exists then increment value by 1, else create key and set the value to 1
        for(var i=0; i<num1.length; i++) {
                if(num1DigitFreqCount.hasOwnProperty(num1[i])) {
                        num1DigitFreqCount[num1[i]] +=1;
                } else {
                        num1DigitFreqCount[num1[i]] = 1;
                } 
        }

        // Loop through second integer and populate num2DigitFreqCount object: if key exists then increment value by 1, else create key and set the value to 1
        for(var j=0; j<num2.length; j++) {
                if(num2DigitFreqCount.hasOwnProperty(num2[j])) {
                        num2DigitFreqCount[num2[j]] +=1;
                } else {
                        num2DigitFreqCount[num2[j]] = 1;
                } 
        }

        // If the number of keys in each object are NOT the same, return false
        if(Object.keys(num1DigitFreqCount).length!==Object.keys(num2DigitFreqCount).length) {
                return false;
        }

        // Compare both objects. If value of a key in one object don't match the value of the key in the other, return false.
        for(var k=0; k<num1.length; k++) {
                if(num1DigitFreqCount[num1[k]]!==num2DigitFreqCount[num1[k]]) {
                        return false;
                }
                // console.log(num1[k], num1DigitFreqCount[num1[k]], num2DigitFreqCount[num1[k]])
        }

        // Return true as frequency of each digit in each integer is the same.   
        return true;
}

// sameFrequency(12, 123456);
// sameFrequency(54637544, 26444888);
// sameFrequency(1234, 4321);
// sameFrequency(33335555, 33445566);
// sameFrequency(1429556891, 9891154625);