// 32-3 Different Truthy And Falsy Values In JavaScript

/*
    Truthy:
    1.true,
    2.any +,- number other than 0
    3.any string other than empty string
    4.'0','false'
    5.{}
    6.[]

    Falsy:
    1.false
    2.0
    3.''
    4.undefined
    5.null
*/
// const x = '0'
// const x;SyntaxError: Missing initializer in const declaration
// let x;
// let x = null;
let x = {};
console.log(x)
if (x) {
    console.log(`${x} is truthy value`)
} else {
    console.log(`${x} is falsy value`)
}