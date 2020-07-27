/* Write a recursive function called isPalindrome which returns true if the string passed to it
is a palindrome (reads the same forward and backward). Otherwise it returns false.

E.g.    // isPalindrome('awesome')  // false
        // isPalindrome('foobar')   // false
        // isPalindrome('tacocat')  // true
*/

function isPalindrome(str) {

        // Base case: if there is one or no chars remaining in the str, it must be a palindrome, retuen true
        if(str.length<=1) {
                return true;
        }

        // if the first char does not match the last char, it is NOT a palindrome, return false
        if(str[0]!==str[str.length-1]) {
                return false;
        }

        // Recursion: functions calls itself but with a new input which has the first and last char of the previous str removed
        return isPalindrome(str.slice(1,-1));
}

// isPalindrome('leaves')                  // false
// isPalindrome('autumn')                  // false
// isPalindrome('noon')                    // true
// isPalindrome('eye')                     // true
// isPalindrome("wasitacaroracatisaw")     // true