// @flow

//import fs from 'fs';

function test(a: number, b: number) : number {
    return a + b;
}

class MyClass {

    handle: number

    method() {
	this.handle = 123;
    }
};

type MyObject = {
    foo: number,
    bar: boolean,
    baz: string
};

const ex = new MyClass

class Base { }

class F {
    serialize() { return 'f'; }
}

class B {
    serialize() { return 'b'; }
}

interface Serial {
    s(): string;
}

class G extends Base implements  Serial {
    s() { return "123"}
}

// generics!

function identity<T>(value : T) : T { return value; }

//const a : number = test(22, true)
//console.log(fs);
