/** Write a function which takes in a string and returns counts of each character
in the string.
**/

function countChars(input) {
    // Convert input to lowercase
    var str = input.toLowerCase();

    // Create charsCounted object
    var charsCounted = {}

    // Look at each char in string
    for(var i=0; i<str.length; i++) {

        // If char is in object, increment char value by 1
            if(charsCounted.hasOwnProperty(str[i])) {
                charsCounted[str[i]]+=1
            }

        // If char NOT in object, add char key in obj and give value of 1
            if(!charsCounted.hasOwnProperty(str[i])) {
                charsCounted[str[i]] = 1;
            }
    }    

    return charsCounted;
}

// countChars("gandalf");
// countChars("");
// countChars("switch");
// countChars("Mirkwood Forest");
// countChars("onomatopoeia");