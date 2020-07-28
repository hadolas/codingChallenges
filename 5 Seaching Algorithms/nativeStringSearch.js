/* Naive String Search
    Loop over the longer string
    Loop over the shorter string
    If the characters don't match, break out of the inner loop
    If the characters do match, keep going
    If you complete the inner loop and find a match, increment count of matches
    Return the count
*/

function naiveSearch(str1, str2) {

    var count = 0;
    for(var i=0; i<str1.length; i++) {
        for(var j=0; j<str2.length; j++) {
            if(str2[j]!==str1[i+j]) {
                // console.log("not a match");
                break;
            } else {
                // console.log(str2[j], str1[i+j])
            }
        }
        // console.log("j: "+j)
        if(j===str2.length) {
            count+=1;
        }
    }

    return count;
}

// naiveSearch("orange", "ran");           // 1
// naiveSearch("wallpaperpaste", "pa")     // 2
// naiveSearch("chinchilla", "chip")       // 0