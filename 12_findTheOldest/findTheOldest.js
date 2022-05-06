// Look at the array of objects
// Calculate the lifespan of each person
// Check if the lifespan of the current person is longer than
// that of the previous person
// Change variable "oldest" to object oldest person
// Return the person object

const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth);
        const currentAge = (person.yearOfDeath - person.yearOfBirth);
        return oldestAge < currentAge ? person : oldest;
    })
};

const getAge = function(birth, death){
    
}

// const findTheOldest = function(array) {
//     const oldestPerson = array.reduce((oldest, person) => {
//         if ((person.yearOfDeath - person.yearOfBirth) > )
//         return oldest;
//     }, array[0])
//     console.log(oldestPerson);
// };

// const findTheOldest = function(array) {
//     console.table(array);
//     const totalYears = array.reduce((total, person) => {
//         return total + (person.yearOfDeath - person.yearOfBirth);
//     }, 0);
//     console.log(totalYears);
// };




// const findTheOldest = function(array) {
//     let personLifespan = 0;
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].name);
//         personLifespan = array[i].yearOfDeath - array[i].yearOfBirth;
//         console.log(personLifespan);
//     }
// };

// Do not edit below this line
module.exports = findTheOldest;
