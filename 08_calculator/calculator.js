const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numberArray) {
	let summation = 0;
  for (const number of numberArray){
    summation += number;
  }
  return summation;
};

const multiply = function(numberArray) {
  let multiplied = numberArray[0];
  const newArray = numberArray.slice(1);
  for (const number of newArray){
    multiplied *= number;
  }
  return multiplied;
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
  let result = number;
	if (number <= 1){
    return 1;
  } else {
    for (let newNumber = (number - 1); newNumber > 1; newNumber--){
      console.log("newnumber:" + newNumber);
      result *= newNumber;
      console.log("result: " + result)
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
