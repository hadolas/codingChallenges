/* Write a function called isSubsequence which takes in two strings and checks whether
the characters in the first form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.

E.g.    isSubsequence('hello', 'hello world');  //true
        isSubsequence('sing', 'sting');         //true
        isSubsequence('abc', 'abracadabra');    // true
        isSubsequence('abc', 'acb');            // false (order matters)

REQUIREMENTS
Time Complexity:  O(N+M)
Space Complexity: O(1)
*/


function isSubsequence(str1, str2) {
        
        // Set firstPointer to index 0 of str1
        var firstPointer = 0;

        // Create string var. This will keep track of characters detected.
        var detectedSubsequence = "";

        // Return false if length of str2 is less than length of str1 becasue it won't be possible to have a subsequence of str1 in str2.
        if(str2.length<str1.length) {
                return false;
        }

        // Loop through str2 to find matching value of firstPointer
        for(var i=0; i<str2.length; i++) {
                // Return true if str1 matches detectedSubsequence
                if(str1===detectedSubsequence) {
                        return true;
                }

                // If match found, concat character to detectedSubsequence var and increment firstPointer index by one
                if(str2[i]===str1[firstPointer]) {
                        detectedSubsequence+=str2[i];
                        firstPointer += 1;
                }
        }

        // console.log("DETECTED: " + detectedSubsequence);

        // If at the end str1 and detectedSubsequence do not match, return false.
        if(str1!==detectedSubsequence) {
                return false;
        }
                
        // Return true
        return true;
}

// isSubsequence('apple', 'pineapple');    // true
// isSubsequence('bee', 'benevolent');     // true
// isSubsequence('cat', 'clarinet');       // true
// isSubsequence('melon', 'lemon');        // false
// isSubsequence('onomatopoeia', 'vworp'); // false