export class TupleExample {

    myTuple: [number, string] = [25, 'truck'];

    
    constructor() {
        let firstElement = this.myTuple[0]; // 25
        let secondElement = this.myTuple[1]; // truck
    }
    
    private changeTuple(): void {
        // other elements can have numbers or strings
        this.myTuple[0] = 100;
        this.myTuple[1] = 'this works!';
        this.myTuple[2] = 'this can be any type!!';
    }
}