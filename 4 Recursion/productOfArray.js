/* Write a function called productOfArray which takes in an array of numbers and
returns the product of all of them.

E.g.    productOfArray([1,2,3])     // 6
        productOfArray([1,2,3,10])  // 60
*/

function productOfArray(arr) {
    var product = 1;

    function helper(helperInput) {
        if(helperInput.length===0) {
            return;
        }
        product *= helperInput[0];
        helper(helperInput.slice(1));
    }

    helper(arr);
    return product;
}

// productOfArray([2,3,4])          // 24
// productOfArray([5,6,3])          // 90
// productOfArray([6,4,10,2,3])     // 1440
// productOfArray([1,2,3])          // 6
// productOfArray([1,2,3,10])       // 60
// productOfArray([0])              // 0
