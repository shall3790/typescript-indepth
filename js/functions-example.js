var books = [
    { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
];
function CreateCustomerIdExample(name, id) {
    return name + id;
}
// typical anonymous function
var arr = books.filter(function (book) {
    return book.author === 'Herman Melville';
});
// arrow function 
var arr2 = books.filter(function (book) { return book.author === 'Herman Melville'; });
// empty parms
books.forEach(function () { return console.log('Done reading!'); });
// passing single parm
books.forEach(function (title) { return console.log('Done reading!'); });
// passing multiple parms 
// we need to wrap in parentheses unless we have only one!
books.forEach(function (title, idx, arr) { return console.log(idx + ' - ' + title); });
// using multiple lines 
books.forEach(function (title, idx, arr) {
    console.log(idx + ' - ' + title);
});
// 'this' variable used 'old school' way
function Book() {
    var self = this;
    self.publishDate = 2016;
    setInterval(function () {
        console.log(self.publishDate);
    }, 1000);
}
// TypeScript way of using 'this' variable
function BookNew() {
    var _this = this;
    this.publishDate = 2016;
    setInterval(function () {
        console.log(_this.publishDate);
    }, 1000);
}
// function types
function PublicationMessage(year) {
    return 'Date published: ' + year;
}
// type definition 
var publishFunc;
// assign
publishFunc = PublicationMessage;
// now call
var message = publishFunc(2016);
// optional parms, optional parms must come after default parms
function CreateOptionalParms(name, age) { }
// giving default value when parm is undefined
function GetBookByTitle2(title) {
    if (title === void 0) { title = 'The C Programming Language'; }
}
// rest parms, set the 'rest' of the parms in a variable 
// must have ... in front of parm name
function GetBooksReadForCustEx(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
}
// implementation function
function GetTitles2(bookProperty) {
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
    }
    else if (typeof bookProperty == 'boolean') {
    }
    return foundTitles;
}
//# sourceMappingURL=functions-example.js.map