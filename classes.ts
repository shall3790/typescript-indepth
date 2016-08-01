import {
    Book,
    DamageLogger,
    Author,
    Librarian
}                               from './interfaces';

export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string ) {
        console.log(this.name + ' is assisting ' + custName);
    }
}
// abstract class example 
export abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'Research';

    constructor(public title?: string, protected year?: number) {
        
        console.log('creating new ReferenceItem');
    }       

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        // must refer to static with class name
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    // abstract method
    abstract printCitation(): void;
}

// inheritance
export class Encyclopedia extends ReferenceItem {
    
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);

    }

    // override superclass methods
    printItem(): void {
        super.printItem(); // not required
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export class Journal extends ReferenceItem {
    contributors: string[];

    constructor() {
        super();
    }

    
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }

    
}