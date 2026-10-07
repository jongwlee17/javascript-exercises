const reverseString = function (str) {
    let results = "";

    for (let i = str.length - 1; i >= 0; i--) {
        results += str[i];
    }

    return results;
};

// Do not edit below this line
module.exports = reverseString;
