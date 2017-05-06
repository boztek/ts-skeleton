(function () {
'use strict';

function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
var greet = function () { return document.body.innerHTML = greeter(user); };

var AnotherGreeter = (function () {
    function AnotherGreeter(name) {
        if (name === void 0) { name = "You"; }
        this.name = name;
    }
    AnotherGreeter.prototype.hi = function () {
        return "Hey " + this.name + ".";
    };
    return AnotherGreeter;
}());

greet();
var g2 = new AnotherGreeter("Boris");
var greeting = g2.hi();
console.log("Another greeting:", greeting);

}());
//# sourceMappingURL=bundle.js.map
