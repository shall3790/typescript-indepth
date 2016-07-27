// new ES6 import syntax
import { Category }   from './enums';
import { Book }       from './interfaces';

function GetAllBooks(): Book[] {  
  let books: Book[] = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ];

  return books;
}

// set default parm as expression
function LogFirstAvailable(books = GetAllBooks()): void { 
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';
  for(let currentBook of books) {
  
    if(currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log('Total Books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}
//


function GetBookTitleByCategory(categoryFilter: Category = Category.Fiction): Array<string> { // add default parm
  console.log('Getting books in category: ' + Category[categoryFilter]); // print out string representation of Enum
  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];

  for(let currentBook of allBooks) {
    if(currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
  for(let title of titles) {
    console.log(title); 
  }
}

function GetBookById(id: number) : Book {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number) : string {
  return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) {
  console.log('Creating customer: ' + name);
  if(age) {
    console.log('age: ' + age);
  }
  if(city) {
    console.log('city: ' + city);
  }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
  console.log('Checking out books for ' + customer);

  let booksCheckedOut: string[] = [];
  for(let id of bookIds) {
    let book = GetBookById(id);
    if(book.available) {
      booksCheckedOut.push(book.title);
    }
  }
  return booksCheckedOut;
}


function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
// implementation function
function GetTitles(bookProperty: any): string[] {
    const foundTitles: string[] = [];
    const allBooks = GetAllBooks();

    if(typeof bookProperty == 'string') {
      for(let book of allBooks) {
        if(book.author === bookProperty) {
          foundTitles.push(book.title);
        }
      }
    }
    else if(typeof bookProperty == 'boolean') {
        // get books by availability, add to foundTitles
      for(let book of allBooks) {
        if(book.available === bookProperty) {
          foundTitles.push(book.title);
        }
      }
    }
    return foundTitles;
}

function printBook(book: Book): void {
  console.log(book.title + ' by ' + book.author);
}

//*******************************************************

let myBook: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string) => console.log('Damaged: ' + reason)
  
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
