// 32-5 Block Scope Global Scope Simple Understanding Of Hoisting
function add(a,b){
    const first = a;
    const second = b;
    const total = first + second;
    // const total = a+b;
    if(a>b){
        const sub = a-b;
        console.log(sub)
    }
    return total;
}
// add(10,5);
console.log(add(10,5));
// function add(a,b){
//     return a+b;
// }
// console.log(add(5,6));

for(var i =0;i<=5;i++){
    console.log(i);
}
console.log('outside---->here use var',i)
console.log(`---------------------`)

for(let j =0;j<=3;j++){
    console.log(j);
}
// console.log('outside---->here use let',j)//ReferenceError: j is not defined

/*hoisting:In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared
*/

//https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

add(3,4);
let total = add(4,5);
function add (a,b) {
    console.log(a+b);
    // return a+b;
}
add(3,4);
// let total = add(4,5);
// console.log(total)

console.log(a); //ReferenceError: a is not defined
var a;
// a=9
// var a =9;
console.log(a)
var a =9;
a=9