import InputStream from './InputStream';

let inputStream : InputStream = new InputStream('');
let index : number = inputStream.getIndex();
let to : string = inputStream.peek(); 

export default function readNext() {
    while(!inputStream.eof()) {
        to = inputStream.peek();

        if(inputStream.eof()) return null;
        if(isQuote(to)) return readString();
        if(isDigit(to)) return readNumber();
        if(isPunc(to)) return readPunctuation();
        if(isOp(to)) return readOperation();  
    }
}

function isDigit(c : string) : boolean{
    return /\d+/.test(c);
}

function isQuote(c : string) : boolean {
    return /"/.test(c);
}

function isPunc(c : string) : boolean {
    return /[\(\)\[\]{}]+/.test(c);
}

function isOp(c : string) : boolean {
    return (-1 !== '+-*/%=!<>&|'.indexOf(c));
}

function readString() : Object {
    let s = '';
    while('"' !== inputStream.peek()) {
        s += inputStream.next();    
    }
    return {type : 'str', value : s};
}

function readNumber() : Object {
    let s = '';
    while(/\d+/.test(to)) {
        s += inputStream.next();    
    }
    return {type : 'num', value : Number(s)};
}

function readPunctuation() : boolean {
    return false;
}

function readOperation() : boolean {
    return false;
}