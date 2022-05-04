const palindromes = function (string) {
    newString = string.replace(/[^\w\s\']|_/g, "")
                .replace(/\s+/g, "");
    lowerCaseString = newString.toLowerCase();
    trimmedString = lowerCaseString.trim();
    newArray = Array.from(trimmedString);
    reversedNewArray = newArray.slice().reverse();
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i] !== reversedNewArray[i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
