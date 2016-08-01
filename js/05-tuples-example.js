"use strict";
var TupleExample = (function () {
    function TupleExample() {
        this.myTuple = [25, 'truck'];
        this.firstElement = myTuple[0]; // 25
        this.secondElement = myTuple[1]; // truck
    }
    TupleExample.prototype.changeTuple = function () {
        // other elements can have numbers or strings
        myTuple[0] = 100;
        myTuple[1] = 'this works!';
        myTuple[2] = 'this can be any type!!';
    };
    return TupleExample;
}());
exports.TupleExample = TupleExample;
//# sourceMappingURL=05-tuples-example.js.map