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

const power = function() {
	
};

const factorial = function() {
	
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
