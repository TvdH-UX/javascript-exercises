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
