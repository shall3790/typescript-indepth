import { Category } from './enums';

let books = [
    {title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    {title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    {title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    {title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
];

function CreateCustomerIdExample(name: string, id: number) : string {
    return name + id;
}

// typical anonymous function
let arr = books.filter(function (book) {
    return book.author === 'Herman Melville';
});

// arrow function 
let arr2 = books.filter(book => book.author === 'Herman Melville');

// empty parms
books.forEach(() => console.log('Done reading!'));

// passing single parm
books.forEach(title => console.log('Done reading!'));

// passing multiple parms 
// we need to wrap in parentheses unless we have only one!
books.forEach((title, idx, arr) => console.log(idx + ' - ' + title));

// using multiple lines 
books.forEach((title, idx, arr) => {
    console.log(idx + ' - ' + title);
});

// 'this' variable used 'old school' way
function Book() {
    let self = this;
    self.publishDate = 2016;
    setInterval(function () {
        console.log(self.publishDate);
    }, 1000);
}

// TypeScript way of using 'this' variable
function BookNew() : void {
    this.publishDate = 2016;
    setInterval(() => {
        console.log(this.publishDate);
    }, 1000);
}

// function types
function PublicationMessage(year: number): string {
    return 'Date published: ' + year;
}

// type definition 
let publishFunc: (someYear: number) => string;
// assign
publishFunc = PublicationMessage;
// now call
let message: string = publishFunc(2016);


// optional parms, optional parms must come after default parms
function CreateOptionalParms(name: string, age?: number) {}

// giving default value when parm is undefined
function GetBookByTitle2(title: string = 'The C Programming Language') {}

// rest parms, set the 'rest' of the parms in a variable 
// must have ... in front of parm name
function GetBooksReadForCustEx(name: string, ...bookIds: number[]) {}

// function overloads examples

// 2 declarations with empty function body
function GetTitles2(author: string): string[];
function GetTitles2(available: boolean): string[];
// implementation function
function GetTitles2(bookProperty: any): string[] {
    let foundTitles: string[] = [];
    if(typeof bookProperty == 'string') {
        // get books by author, add to foundTitles
    }
    else if(typeof bookProperty == 'boolean') {
        // get books by availability, add to foundTitles
    }
    return foundTitles;
}