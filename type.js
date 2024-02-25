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
// 8 ways to get undefiend

let number;
console.log(number);     // => undefined

let movie = { name: 'Interstellar' };
console.log(movie.year); // => undefined

let movies = ['Interstellar', 'Alexander'];
console.log(movies[3]);  // => undefined

console.log(typeof undefined === 'undefined'); // => true

let nothing;
console.log(typeof nothing === 'undefined');   // => true


//https://dmitripavlutin.com/7-tips-to-handle-undefined-in-javascript/

const unsafeOptions = {
    fontSize: 18
};
const defaults = {
    fontSize: 16,
    color: 'black'
};
const options = {
    ...defaults,
    ...unsafeOptions
};

console.log(options.fontSize); // => 18
console.log(options.color);    // => 'black'


const styles = {
    fontSize: 18
};

console.log(styles.color)
console.log(styles.color ?? 'black'); // => 'black'
console.log(styles.fontSize ?? 16);   // => 18


function multiply(a, b) {
    console.log(a); // => 5
    console.log(b); // => undefined
    return a * b;
}

console.log(multiply(5)); // => NaN



function multiply2(a, b) {
    if (b === undefined) {
        b = 2;
    }
    console.log(a); // => 5
    console.log(b); // => 2
    return a * b;
}

console.log(multiply2(5)); // => 10


function square(x) {
    const res = x * x;
    // return
    // return res;
}

console.log(square(2)); // => undefined


console.log(void 1);                    // => undefined
console.log(void (false));              // => undefined
console.log(void { name: 'John Smith' }); // => undefined
console.log(void Math.min(1, 3));       // => undefined

const colors = ['blue', 'white', 'red'];

console.log(colors[0]);  // => undefined
console.log(colors[5]);  // => undefined
console.log(colors[-1]); // => undefined


const sparse1 = new Array(3);
console.log(sparse1);    // => [<empty>, <empty>, <empty>]
console.log(typeof sparse1);
console.log(sparse1[0]); // => undefined
console.log(sparse1[1]); // => undefined

const sparse2 = ['white', , 'blue']
console.log(sparse2);    // => ['white', <empty>, 'blue']
console.log(sparse2[1]); // => undefined


//https://dmitripavlutin.com/7-tips-to-handle-undefined-in-javascript/

const sixth = [1, 2, 51, 4, 5, 6, 7, 8, 78];
console.log(sixth);
delete sixth[1];//to remove item not use delete method,use splice method
console.log(sixth)

let arr = ["shift", "splice", "filter", "pop"];

// Removing the specified element from the array  
let spliced = arr.splice(1, 1);
console.log("Removed element: " + spliced);
console.log("Remaining elements: " + arr);


// JavaScript code to illustrate splice() function  
let arrrrr = ["shift", "splice", "filter", "pop"];

// Removing the specified element by value from the array  
for (let i = 0; i < arrrrr.length; i++) {
    if (arrrrr[i] === "splice") {
        let spliced = arrrrr.splice(i, 2);
        console.log("Removed element: " + spliced);
        console.log("Remaining elements: " + arrrrr);
    }
}


// JavaScript to illustrate filter() method 
function isPositive(value) {
    return value > 0;
}

function func() {
    let filtered = [101, 98, 12, -1, 848].filter(isPositive);
    console.log("Positive elements in array: " + filtered);
}
func();

//https://www.geeksforgeeks.org/remove-elements-from-a-javascript-array/