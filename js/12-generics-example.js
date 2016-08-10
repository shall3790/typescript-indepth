"use strict";
var GenericsExample = (function () {
    function GenericsExample() {
        var someString = this.LogAndReturn('log this');
    }
    GenericsExample.prototype.genericExample1 = function () {
        // 
        var poetryBooks;
        // define array of type Book
        var fictionBooks;
        var historyBooks = new Array(5);
    };
    // Generic Function
    GenericsExample.prototype.LogAndReturn = function (thing) {
        console.log(thing);
        return thing;
    };
    return GenericsExample;
}());
//# sourceMappingURL=12-generics-example.js.map