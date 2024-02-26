// 32-6 (Advanced) Closure, Encapsulation, Private Variable
/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

function kitchen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer);
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

function add(a,b){
    return a+b;
}
const sum = add(22,33);
console.log(sum)
// console.log(sum())  //TypeError: sum is not a function

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
//   myFunc();
console.log(myFunc)
console.log(myFunc())



function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
//   console.log(add10(2)); // 12

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
console.log(stopWatch)
console.log(stopWatch())
let stop = stopWatch();
console.log(stop)
console.log(stop())
console.log(stop())
console.log(stop())
console.log(stopWatch())

