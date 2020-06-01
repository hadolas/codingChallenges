/* Implement a function called 'areThereDuplicates' which accepts a VARIABLE NUMBER OF ARGUMENTS, and 
checks whether there are any duplicates among the arguments passed in. You can solve this using the 
frequency counter pattern OR the multiple pointers pattern.

Time: O(n)
Space O(n)

BONUS:  Time: O(n log n)
        Space: O(1)

E.g.    areThereDuplicates(1, 2, 3)             // false
        areThereDuplicates(1, 2, 2)             // true
        areThereDuplicates('a', 'b', 'c', 'a')  // true

*/

function areThereDuplicates() {

    // argumentOccurrenceCount object to count occurence of each argument until a duplicate is found
    var argumentOccurrenceCount = {};

    // loop through arguments and populate argumentOccurrenceCount object.
    for(var i=0; i<arguments.length; i++) {

        // if a key doesn't exist, create it and set the value to 1
        if(!argumentOccurrenceCount[arguments[i]]) {
            argumentOccurrenceCount[arguments[i]]=1;

        } else {
        // if the value of a key is already 1, return true
                return true;
        }

    }

    // no duplicate, return false
    return false;
}

// areThereDuplicates(3, 4, 5);             // false
// areThereDuplicates(3, 4, 3);             // true
// areThereDuplicates('w', 'o', 'o', 'd');  // true
// areThereDuplicates();                    // false