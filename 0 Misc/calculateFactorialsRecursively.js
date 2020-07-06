/* Write Factorials Recursively */

function calculateFactorialsRecursively(n) {
    if(n===0) {
        return 1;
    } 
    return n*calculateFactorialsRecursively(n-1);
}

// calculateFactorialsRecursively(3)     // 6
// calculateFactorialsRecursively(4)     // 24
// calculateFactorialsRecursively(5)     // 120
// calculateFactorialsRecursively(9)     // 362,880
// calculateFactorialsRecursively(12)    // 479,001,600