export enum CategoryATypeExample { 
    Biography, 
    Poetry, 
    Fiction
}; // 0,1,2

export class TypesExample {
    private myBool: Boolean = false;
    private myNum: Number = 24;
    private myString: string = 'this is a string';
    private strArray1: string[] = ['here', 'are', 'strings'];
    
    private myTuple: [number, string] = [25, 'truck'];

    constructor() {
        console.log(CategoryATypeExample.Biography);
    }

    constExample(parm1: string): void {
        const numLivesForCat = 9;
        const kitty = {
            name: "Aurora",
            numLives: numLivesForCat,
        }

        // Error !!
        // kitty = {
        //     name: "Danielle",
        //     numLives: numLivesForCat
        // };

        // Const is immutable, but the values they refer to are immutable.
        // all "okay"
        kitty.name = "Rory";
        kitty.name = "Kitty";
        kitty.name = "Cat";
        kitty.numLives--;
    }
    
}