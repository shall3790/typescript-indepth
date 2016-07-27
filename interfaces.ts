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
    markDamaged?: (reason: string) => void;
}