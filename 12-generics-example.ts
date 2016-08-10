
import { 
  Book, 
  DamageLogger,
  Author,
  Librarian
}                               from './interfaces';

class GenericsExample {

    constructor() {
        let someString: string = this.LogAndReturn<string>('log this');
    }

    genericExample1(): void {
        // 
        let poetryBooks: Book[];
        
        // define array of type Book
        let fictionBooks: Array<Book>;

        let historyBooks = new Array<Book>(5);
    }

    // Generic Function
    LogAndReturn<T>(thing: T): T {
        console.log(thing);
        return thing;
    }

    
}
