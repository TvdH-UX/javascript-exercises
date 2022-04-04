// Take fahrenheit temperature
// Apply conversion
// Round down to one decimal
// Return celsius

const ftoc = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * (5/9));
  roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

// Take celsius temperature
// Apply conversion
// Round down to one decimal
// Return fahrenheit

const ctof = function(celsius) {
  let fahrenheit = (celsius * (9/5) + 32);
  roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
