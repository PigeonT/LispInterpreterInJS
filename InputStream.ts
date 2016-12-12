export default class InputStream {
    private inputStream : string;
    private index : number;
    private col : number;
    private line : number; 

    constructor(str: string) {
        this.inputStream = str; 
        this.index = 0;
    }

    public peek() : string {
        return this.inputStream.slice();
    }

    public next() : string {
        let ch : string = this.inputStream.charAt(this.index++) ;
        if('\n' === ch) this.line++, this.col = 0;
        else this.col++;
        return ch;
    }

    public eof() : boolean {
        return (this.inputStream.length === 0)? true : false; 
    }

    public croak(msg : string) : never {
        throw new Error(`${msg} ( ${this.line} : ${this.col} )`);
    } 

    public getIndex() : number {
        return this.index;
    }
}
