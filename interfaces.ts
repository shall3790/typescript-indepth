import { Category }         from './enums';

export interface Book {
    // properties
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number; //optional

    // method signatures
    markDamaged?: DamageLogger; // use interface type declared below
}

export interface DamageLogger {
    (reason: string): void;
}

export interface Person {
    name: string;
    email: string;
}

export interface Author extends Person {
    numBooksPublished: number;
}

export interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}