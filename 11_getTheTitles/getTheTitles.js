const getTheTitles = function(bookArray) {
    const newArray = bookArray.map(book => {
        return book.title;
    });
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
