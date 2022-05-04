const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    } else {
        newArray = [];
        for (let i = 0; i < number; i++){
            if ( i < 2){
                newArray.push(1);
            } else {
                newArray.push(newArray[newArray.length - 1] + newArray[newArray.length - 2]);
                console.log(newArray);
            }
        }
        return newArray[newArray.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
