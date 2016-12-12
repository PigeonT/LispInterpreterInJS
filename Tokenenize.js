"use strict";
var InputStream_1 = require('./InputStream');
var inputStream = new InputStream_1["default"]('');
var index = inputStream.getIndex();
var to = inputStream.peek();
function readNext() {
    while (!inputStream.eof()) {
        to = inputStream.peek();
        if (inputStream.eof())
            return null;
        if (isQuote(to))
            return readString();
        if (isDigit(to))
            return readNumber();
        if (isPunc(to))
            return readPunctuation();
        if (isOp(to))
            return readOperation();
    }
}
exports.__esModule = true;
exports["default"] = readNext;
function isDigit(c) {
    return /\d+/.test(c);
}
function isQuote(c) {
    return /"/.test(c);
}
function isPunc(c) {
    return /[\(\)\[\]{}]+/.test(c);
}
function isOp(c) {
    return (-1 !== '+-*/%=!<>&|'.indexOf(c));
}
function readString() {
    var s = '';
    while ('"' !== inputStream.peek()) {
        s += inputStream.next();
    }
    return { type: 'str', value: s };
}
function readNumber() {
    var s = '';
    while (/\d+/.test(to)) {
        s += inputStream.next();
    }
    return { type: 'num', value: Number(s) };
}
function readPunctuation() {
    return false;
}
function readOperation() {
    return false;
}
