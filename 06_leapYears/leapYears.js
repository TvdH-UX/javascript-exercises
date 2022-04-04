// Receive a year
// Check whether a year is divisible by 4 (good)
// Check whether a year is divisible by 100 (not good)
// Check whether a year is divisible by both 100 and 400 (good)
// Return false if not leap year otherwise return true

const leapYears = function(year) {
    if (year % 4 == 0){
        console.log("Year divisible by 4");
        if (year % 100 == 0 && year % 400 == 0){
            return true;
        } else if (year % 100 == 0 && year % 400 != 0){
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
