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
export default AnotherGreeter;
//# sourceMappingURL=another.js.map