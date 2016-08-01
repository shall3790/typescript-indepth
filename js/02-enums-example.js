"use strict";
// Enum sample
var EnumExample = (function () {
    function EnumExample() {
    }
    EnumExample.prototype.runEnumCode = function () {
        var CategoryA;
        (function (CategoryA) {
            CategoryA[CategoryA["Biography"] = 0] = "Biography";
            CategoryA[CategoryA["Poetry"] = 1] = "Poetry";
            CategoryA[CategoryA["Fiction"] = 2] = "Fiction";
        })(CategoryA || (CategoryA = {}));
        ; // 0, 1, 2 (default)
        var CategoryB;
        (function (CategoryB) {
            CategoryB[CategoryB["Biography"] = 1] = "Biography";
            CategoryB[CategoryB["Poetry"] = 2] = "Poetry";
            CategoryB[CategoryB["Fiction"] = 3] = "Fiction";
        })(CategoryB || (CategoryB = {}));
        ; // 1, 2, 3 (set start index val)
        var CategoryC;
        (function (CategoryC) {
            CategoryC[CategoryC["Biography"] = 5] = "Biography";
            CategoryC[CategoryC["Poetry"] = 8] = "Poetry";
            CategoryC[CategoryC["Fiction"] = 9] = "Fiction";
        })(CategoryC || (CategoryC = {}));
        ; // 5, 8, 9 (manually set val)
        var fav = CategoryA.Biography; // 0
        var ctgStr = CategoryA[fav]; // Biography
    };
    return EnumExample;
}());
exports.EnumExample = EnumExample;
//# sourceMappingURL=02-enums-example.js.map