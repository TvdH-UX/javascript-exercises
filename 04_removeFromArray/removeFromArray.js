// Receive array from which to remove value(s)
// Receive value(s) which to remove from array
// See which values need to be removed
// Sift through the array looking for the values one by one
// Save the location
// Splice the value out at saved location
// Repeat
// Return the trimmed array

// Code which only works for the first test
// const removeFromArray = function(array, value) {
//     if (array.includes(value)){
//         let location = array.indexOf(value);
//         array.splice(location ,1);
//     }
//     return array;
// };

// Code using rest parameters
const removeFromArray = function(array, ...values) {
    console.log(array);
    console.log(values);
    for (let i = 0; i < values.length; i++){
        if (array.includes(values[i])){
            console.log(values[i]);
            let location = array.indexOf(values[i]);
            array.splice(location, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
