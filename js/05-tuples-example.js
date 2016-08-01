"use strict";
var TupleExample = (function () {
    function TupleExample() {
        this.myTuple = [25, 'truck'];
        var firstElement = this.myTuple[0]; // 25
        var secondElement = this.myTuple[1]; // truck
    }
    TupleExample.prototype.changeTuple = function () {
        // other elements can have numbers or strings
        this.myTuple[0] = 100;
        this.myTuple[1] = 'this works!';
        this.myTuple[2] = 'this can be any type!!';
    };
    return TupleExample;
}());
exports.TupleExample = TupleExample;
//# sourceMappingURL=05-tuples-example.js.map