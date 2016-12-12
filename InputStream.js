"use strict";
var InputStream = (function () {
    function InputStream(str) {
        this.inputStream = str;
        this.index = 0;
    }
    InputStream.prototype.peek = function () {
        return this.inputStream.slice();
    };
    InputStream.prototype.next = function () {
        var ch = this.inputStream.charAt(this.index++);
        if ('\n' === ch)
            this.line++, this.col = 0;
        else
            this.col++;
        return ch;
    };
    InputStream.prototype.eof = function () {
        return (this.inputStream.length === 0) ? true : false;
    };
    InputStream.prototype.croak = function (msg) {
        throw new Error(msg + " ( " + this.line + " : " + this.col + " )");
    };
    InputStream.prototype.getIndex = function () {
        return this.index;
    };
    return InputStream;
}());
exports.__esModule = true;
exports["default"] = InputStream;
