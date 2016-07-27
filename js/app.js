"use strict";
// new ES6 import syntax
var enums_1 = require('./enums');
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
// set default parm as expression
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
//
function GetBookTitleByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]); // print out string representation of Enum
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerId(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer: ' + name);
    if (age) {
        console.log('age: ' + age);
    }
    if (city) {
        console.log('city: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
// implementation function
function GetTitles(bookProperty) {
    var foundTitles = [];
    var allBooks = GetAllBooks();
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get books by availability, add to foundTitles
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//*******************************************************
var myBook = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: enums_1.Category.Fiction,
    pages: 250,
    markDamaged: function (reason) { return console.log('Damaged: ' + reason); }
};
printBook(myBook);
myBook.markDamaged('missing back cover');
// let hermansBooks = GetTitles('Herman Melville');
// // hermansBooks.forEach(title => console.log(title));
// let checkedOutBooks = GetTitles(false);
// checkedOutBooks.forEach(title => console.log(title));
// rest parms
// let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));
//LogFirstAvailable();
// default parms
// let defaultBooks = GetBookTitleByCategory();
// let poetryBooks = GetBookTitleByCategory(Category.Poetry);
// CreateCustomer('stephen');
// CreateCustomer('stephen', 10);
// CreateCustomer('stephen', 10, 'Shawnee');
// let x: number;
// // function pointer for CreateCustomerId
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = (name: string, id: number) => { return id + name; };
// let myId: string = IdGenerator('stephen ', 20);
// console.log(myId);
// const poetryBooks = GetBookTitleByCategory(Category.Poetry);
// const fictionBooks = GetBookTitleByCategory(Category.Fiction);
// LogBookTitles(poetryBooks);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' ' + val))
// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map