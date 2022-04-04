// Receive array from which to remove value(s)
// Receive value(s) which to remove from array
// See which values need to be removed
// Sift through the array looking for the values one by one
// Splice the values out
// Return the trimmed array

const removeFromArray = function(array, value) {
    console.log(array);
    console.log(value);
    if (array.includes(value)){
        let location = array.indexOf(value);
        array.splice(value - 1,1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
