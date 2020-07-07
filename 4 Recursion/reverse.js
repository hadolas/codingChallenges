/* Write a recursive function called reverse which accepts a string and returns a new string in reverse.

e.g.    reverse('awesome')  // 'emosewa'
*/

function reverse(str) {

    // Convert string into array where each item in array is a char from the string
    var strCharArray = str.split("");

    // Var for storing reversedString
    var reversedString = '';

    function helper(helperInput) {
        // Stop this function if char array (helperInput) is empty
        if(helperInput.length===0) {
            return;
        }
        // Concat the last item in char arr (helperInput) to reversedString, pop it off the helperInput, and run the helper function again
        reversedString += helperInput[helperInput.length-1];
        helperInput.pop();
        helper(helperInput);
    }
    
    // Pass strCharArray to helper function to convert it to a reversed string
    helper(strCharArray);
    return reversedString;
}

// reverse('potato')       // otatop
// reverse('polaris')      // siralop
// reverse('pyramids')     // sdimaryp
// reverse('dolphin')      // nihplod