"use strict";
var probablyADuck = {
    walk: function () { return console.log('walking like a duck'); },
    swim: function () { return console.log('swimming like a duck'); },
    quack: function () { return console.log('quacking like a duck'); }
};
function FlyOverWather(bird) { }
FlyOverWather(probablyADuck); // works !!
var MyBook = (function () {
    function MyBook() {
    }
    MyBook.prototype.markDamage = function (reason) {
        console.log('reason: ' + reason);
    };
    return MyBook;
}());
//# sourceMappingURL=04-interfaces-examples.js.map