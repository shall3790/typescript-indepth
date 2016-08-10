"use strict";
var ReferenceItemExample = (function () {
    function ReferenceItemExample(title, publisher) {
    }
    ReferenceItemExample.prototype.printChapterTitle = function (chapterNum) {
        // do something
    };
    Object.defineProperty(ReferenceItemExample.prototype, "editor", {
        // getters and setters
        get: function () {
            return this._editor;
        },
        set: function (newEditory) {
            this._editor = newEditory;
        },
        enumerable: true,
        configurable: true
    });
    return ReferenceItemExample;
}());
exports.ReferenceItemExample = ReferenceItemExample;
// explicitly declare class properties
var AuthorExample = (function () {
    function AuthorExample(authorName) {
        name = authorName;
    }
    return AuthorExample;
}());
exports.AuthorExample = AuthorExample;
// implicitely declaring properties
var Author2Example = (function () {
    // name: string;
    function Author2Example(name) {
        this.name = name;
        // name = authorName;
    }
    Author2Example.prototype.printAuthorName = function () {
        console.log(this.name); // references name property
    };
    return Author2Example;
}());
exports.Author2Example = Author2Example;
// static variable example
var AuthorExample3 = (function () {
    function AuthorExample3(name) {
        this.name = name;
    }
    AuthorExample3.description = 'Some description';
    return AuthorExample3;
}());
exports.AuthorExample3 = AuthorExample3;
var aut = new AuthorExample3('name');
var name = aut.name; // instance variable
// need to call static on Class, not instance 
var desc = AuthorExample3.description;
var encyclopedia1 = new ReferenceItemExample('WorldPedia', 'WorldPub');
//# sourceMappingURL=06-class-example.js.map