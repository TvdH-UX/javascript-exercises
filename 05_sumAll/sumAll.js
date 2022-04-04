// Receive two integers
// Create result variable containing the first number
// Create a variable with an empty array
// Loop through the numbers until second number is reached
// Put the numbers from the loop into the array
// Loop through the array
// Add numbers from array to result variable
// Return result variable

const sumAll = function(num1, num2) {
    sum = num1;
    numbersBetween = [];
    if (num1 < num2){
        for (let i = num1 + 1; i <= num2; i++){
            numbersBetween.push(i);
        }
    } else if (num1 > num2){
        for (let i = num1 - 1; i >= num2; i--){
            numbersBetween.push(i);
        }
    }
    for (let n = 0; n < numbersBetween.length; n++){
        sum += numbersBetween[n];
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
