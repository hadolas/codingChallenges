/** Write a function which takes in a string and returns counts of each alphanumeric
character in the string. 
(Only count letters and numbers. Exclude spaces, punctuation, etc)
**/

function countChars(input) {
    // Convert input to lowercase
    var str = input.toLowerCase();

    // Create charsCounted object
    var charsCounted = {}

    // Regex for letters and numbers
    var regex = /^[a-z0-9]/
    // console.log(str.match(regex))

    // Look at each char in string
    for(var i=0; i<str.length; i++) {
        if(str[i].match(regex)){
            // If char is in object, increment char value by 1
            if(charsCounted.hasOwnProperty(str[i])) {
                charsCounted[str[i]]+=1
            }

            // If char NOT in object, add char key in obj and give value of 1
            if(!charsCounted.hasOwnProperty(str[i])) {
                charsCounted[str[i]] = 1;
            }
        }
        
        
    }    
    return charsCounted;
}

// countChars("gandalf 3878327';");
// countChars("!&^?>");
// countChars("apple");
// countChars("a p p l e");