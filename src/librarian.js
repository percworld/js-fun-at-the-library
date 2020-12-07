

class Librarian {

  constructor(name, branch) {
    this.name = name;        //assign name argument
    this.library = branch;   //assign library branch argument
    this.greetPatron = function(patron, beforeNoon) {
      var morningGreeting = `Good morning, ${patron}!`;
      var afternoonGreeting = `Hello, ${patron}!`;
      if (beforeNoon == true) {
        return morningGreeting;
      } else {
        return afternoonGreeting;
      };
    };
    this.findBook = function(title) {
      //console.log(librarian.library.shelves.Object.keys(shelves)['fantasy'][0]);
      if (branch.shelves.fantasy[0].title == title){
        return `Yes, we have ${title}`;
        checkoutBook(this.library, title, branch.shelves.fantasy[0]); //[(title['genre'])]);  //(branch, title, genre)
      } else {
        //console.log(this.library.Object.keys(shelves)['fantasy'][i]);
        return `Sorry, we do not have ${title}`;
      }
    };
    this.calculateLateFee = function(days) {
      var lateFee;
      lateFee = Math.ceil(days * 0.25);
      return lateFee;
    }
  };
};

module.exports = Librarian;
