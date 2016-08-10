"use strict";
(function (CategoryATypeExample) {
    CategoryATypeExample[CategoryATypeExample["Biography"] = 0] = "Biography";
    CategoryATypeExample[CategoryATypeExample["Poetry"] = 1] = "Poetry";
    CategoryATypeExample[CategoryATypeExample["Fiction"] = 2] = "Fiction";
})(exports.CategoryATypeExample || (exports.CategoryATypeExample = {}));
var CategoryATypeExample = exports.CategoryATypeExample;
; // 0,1,2
var TypesExample = (function () {
    function TypesExample() {
        this.myBool = false;
        this.myNum = 24;
        this.myString = 'this is a string';
        this.strArray1 = ['here', 'are', 'strings'];
        this.myTuple = [25, 'truck'];
        console.log(CategoryATypeExample.Biography);
    }
    TypesExample.prototype.constExample = function (parm1) {
        var numLivesForCat = 9;
        var kitty = {
            name: "Aurora",
            numLives: numLivesForCat,
        };
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
    };
    return TypesExample;
}());
exports.TypesExample = TypesExample;
//# sourceMappingURL=10-types-example.js.map