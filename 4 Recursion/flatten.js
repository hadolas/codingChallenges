/* Write a recursive funtion called 'flatten' which accepts an array of arrays 
and returns a new array with all values flattened.

E.g.    flatten([1, 2, 3, [4, 5] ])         // [1, 2, 3, 4, 5]
        flatten([1, [2, [3, 4], [[5]]]])    // [1, 2, 3, 4, 5]
        flatten([[1],[2],[3]])              // [1,2,3]
        flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])    // [1,2,3]
*/

function flatten(arr) {

    var result = [];

    function helper(helperInput) {
        if(helperInput.length===0) {
            return;
        }

        // console.log("RESULT so far: " + helperInput[0], result);
        if(typeof helperInput[0] !== "number") {
            helper(helperInput[0]);
            
        } else {
            result.push(helperInput[0]);    
        }
        
        helper(helperInput.splice(1));
    }

    helper(arr);
    return result;
}

// flatten([1,2,[3,4]]);               // [1,2,3,4]
// flatten([[2,4,[6,[8,10],12]],14]);  // [2,4,6,8,10,12,14]
// flatten([1, 2, 3, [4, 5] ])         // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]])    // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]])              // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])    // [1,2,3]