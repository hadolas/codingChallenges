/** Given two strings, write a function to determine if the second string is an anagram
of the first. An anagram is a word, phrase, or name formed by rearranging the letters of 
another, such as 'cinema', formed from 'iceman'.

e.g  validAnagram('','')              //true
     validAnagram('aaz','zza')        //false
     validAnagram('rat','car')        //false
     validAnagram('awesome','awesom') //false
     validAnagram('qwerty','qeywrt')  //true
**/

function validAnagram(str1, str2) {
    
    // Create object to count characters in str1
    var str1Count = {}

    // Create object to count characters in str2
    var str2Count= {}

    // if str1 length is not the same as str2 length, return false
    if(str1.length!==str2.length) {
        return false
    }

    // Loop through str1 counting each character's occurrence
    for(var i=0; i<str1.length; i++) {
        if(str1Count.hasOwnProperty(str1[i])) {
            str1Count[str1[i]] += 1
        } else {
            str1Count[str1[i]] = 1
        }
    }

    // Loop through str2 counting each character's occurrence
    for(var j=0; j<str2.length; j++) {
        if(str2Count.hasOwnProperty(str2[j])) {
            str2Count[str2[j]] += 1
        } else {
            str2Count[str2[j]] = 1
        }
    }

    // If number of keys in str1Count object and str2Count object not the same, return false
    if(Object.keys(str1Count).length!==Object.keys(str2Count).length) {
        return false;
    }

    // Loop through str1 and compare str1 obj vals with str2 obj vals. If don't match, return false
    for(var k=0; k<str1.length; k++) {
        // console.log("Val of key "+ str1[k] +" from str1: " + str1Count[str1[k]])
        // console.log("Val of key "+ str1[k] +" from str2: " + str2Count[str1[k]])
        if(str1Count[str1[k]]!==str2Count[str1[k]]) {
            return false
        }
    }

    // console.log(str1Count)
    // console.log(str2Count)

    // if got this far, the two strings are anagrams, return true
    return true

}

// validAnagram("", "");
// validAnagram("pineapple", "pleiapenp");
// validAnagram("lemon", "melon")
// validAnagram("doctorwho", "torchwood");
// validAnagram("1234", "4321");
// validAnagram("purple", "trains");