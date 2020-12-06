function createLibrary (branch) {
  var library = {
    name: branch,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  };
  return library;
};
function addBook (branch, title) {
  branch.shelves[(title['genre'])].push(title);
};
// ! denverLibrary.shelves is one object containing arrays as values for its keys
function checkoutBook (branch, title, genre) {        //Is genre parameter necessary? It is unused in the function
  var genreArray = branch.shelves[genre];            //array of books per genre
  for (var i = 0; i < genreArray.length; i++) {     // loop through genre array
    if (title === genreArray[i]['title']) {        //check if titles match
      genreArray.splice(i, 1);                    //takes book from shelf
      return "You have now checked out " + title + " from the " + branch.name;
    };
  };
  return `Sorry, there are currently no copies of ${title} available at the ${branch.name}`;
};
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
