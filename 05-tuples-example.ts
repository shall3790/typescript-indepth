export class TupleExample {

    myTuple: [number, string] = [25, 'truck'];

    firstElement = myTuple[0]; // 25
    secondElement = myTuple[1]; // truck

    constructor() {
        
    }
    
    private changeTuple(): void {
        // other elements can have numbers or strings
        myTuple[0] = 100;
        myTuple[1] = 'this works!';
        myTuple[2] = 'this can be any type!!';
    }
}