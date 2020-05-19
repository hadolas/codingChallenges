function reverseString(str) {
    var input = str;
    var output = "";

    for(var i=1; i<=input.length; i++) {
        output = output.concat(input[input.length-i])
//         console.log(input.length-i + ' ' + input[input.length-i])
    }
    return output;
}

reverseString("olives");