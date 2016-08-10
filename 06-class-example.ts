export class ReferenceItemExample {
    
    // private property only accessible inside class
    private numberOfPages: number;

    private _editor: string;

    // protected property only accessible inside class
    // and also subclasses
    protected variablex: string;

    // default access modifier will be public 
    foo: string;

    constructor(title: string, publisher?: string) {

    }

    printChapterTitle(chapterNum: number): void {
        // do something
    }

    // getters and setters
    get editor(): string {
        return this._editor;
    }
    set editor(newEditory: string) {
        this._editor = newEditory;
    }
}

// explicitly declare class properties
export class AuthorExample {
    name: string;

    constructor(authorName: string) {
        name = authorName;
    }
}

// implicitely declaring properties
export class Author2Example {
    // name: string;

    constructor(public name: string) {
        // name = authorName;
    }

    printAuthorName(): void {
        console.log(this.name); // references name property
    }
}

// static variable example
export class AuthorExample3 {
    constructor(public name: string) {}
    static description: string = 'Some description';

}

let aut = new AuthorExample3('name');
let name = aut.name; // instance variable

// need to call static on Class, not instance 
let desc = AuthorExample3.description;

let encyclopedia1 = new ReferenceItemExample('WorldPedia', 'WorldPub');