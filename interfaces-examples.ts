interface Duck {
    walk: () => void;
    swim: () => void;
    quack: () => void;
}

let probablyADuck = {
    walk: () => console.log('walking like a duck'),
    swim: () => console.log('swimming like a duck'),
    quack: () => console.log('quacking like a duck')
}

function FlyOverWather(bird: Duck) {}
FlyOverWather(probablyADuck); // works !!


// sample interface
export interface Book {
    id: number;
    title: string;
    author: string;
    //optional properties
    pages?: number;

    // method signature
    markDamage: (reason: string) => void;
}