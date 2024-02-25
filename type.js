// 32-1 Module Overview, Primitive And Non-Primitive Data Type
// JS is a dynamic type programming language

const a = 5;
const b = 'sohel';
const c = 33;
const d = [1, 2, 1, 5, 7];
const e = {
    firstName: 'Sohel',
    lastName: 'Shahid',
    age: 32
}
const f = true;
const g = null;
const h = undefined;

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h)

let x = 5;
let y = 7;
console.log(x, y);
y = x;
console.log(x, y);

y = 9;
console.log(x, y);

let p = { job: 'web developer' };
let q = p;
console.log(p, q)

q = { job: 'backend developer' };
console.log(p, q)

q.job = 'full stack developer';
console.log(p, q)



// 32-2 Null Vs Undefined, Different Ways You Will Get Undefined