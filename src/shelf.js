
function shelfBook (book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book);
  };
  return shelf;
};

function unshelfBook(title, shelf) {
  shelf.splice(1,1);
  return shelf;
};

function listTitles(shelf) {
  var titles = '';
  for (var i = 0; i < shelf.length; i++) {
     if (i == shelf.length - 1) {
      titles = titles + shelf[i]['title'];
    } else {
      titles = titles + shelf[i]['title'] + ', ';
    };
  };
  return titles;
};

function searchShelf(shelf, title) {
  var available;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i]['title'] == title) {
      available = true;
    } else {
      available = false;
    };
  };
  return available;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
