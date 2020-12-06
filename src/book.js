function createTitle(oldTitle) {
  return "The " + oldTitle;
};

function buildMainCharacter(charName, charAge, charPronouns) {
  var ghoulCharacter = {
    name: charName,
    age: charAge,
    pronouns: charPronouns
  };
  return ghoulCharacter;
};

function saveReview (newReview, oldReviews) {
  for (var i=0; i<oldReviews.length; i++ ){
    if (newReview == oldReviews[i]) {
      return oldReviews;
      };
    };
  oldReviews.push(newReview);
  return oldReviews;
};

function calculatePageCount (bookTitle) {
  var titleLetters = bookTitle.split('');
  var bookPageCount;
  bookPageCount = titleLetters.length * 20;
  return bookPageCount;
};

function writeBook (bookTitle, bookCharacter, type) {
   var book = {
     title : bookTitle,
     mainCharacter : bookCharacter,
     genre : type,
     pageCount: calculatePageCount(bookTitle)
   };
   return book;
};

function editBook (book) {
  book.pageCount = book.pageCount * .75;
  return book;
};




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
