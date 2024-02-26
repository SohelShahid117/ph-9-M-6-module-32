// 32-7 (Optional) Callback Function And Pass Different Functions
/*A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/
/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
*/
let value = 1;

// doSomething(() =>
//     {value = 2;}
// );

console.log(value);

function myDisplayer(some) {
    console.log(some);
}
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();


  function myDisplayer2(some) {
    console.log(some);
  }
  
  function myFirst2() {
    myDisplayer2("Hello");
  }
  
  function mySecond2() {
    myDisplayer2("Goodbye");
  }
  
  mySecond2();
  myFirst2();


  function myDisplayer3(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(55, 65);
  myDisplayer3(result);

  
  
  console.log(`-------tricky callback function----------`);
  function myDisplayer4(something) {
    console.log(something);
  }
  function myCalculator2(num1, num2, myCallbackkk) {
    let sum = num1 + num2;
    myCallbackkk('tricky callback function',sum);
  }  
  myCalculator2(51, 52, myDisplayer4);

  /*
  In the example above, myDisplayer is a called a callback function.
  It is passed to myCalculator() as an argument.
  When you pass a function as an argument, remember not to use parenthesis.
  */


const myNumbers = [4, 1, -20, -7, 5, 9, -6,-22,33,-44,-77,88,99,0,2];
const plusNumbr = (x)=>x>=0
// (x) => x >= 0
const posNumbers = removeNeg(myNumbers,plusNumbr);
console.log(posNumbers);

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const y of numbers) {
    if (callback(y)) {
      myArray.push(y);
    }
  }
  return myArray;
}
console.log(`-----------callback function---------------`)
function greeting(grtHandlFunton,name){
    grtHandlFunton(name)
}

function greetingHandler(name){
    console.log('good morning',name);
}
function greetEvening(name){
    console.log('good evening',name);
}

function greetNight(name){
    console.log('good night',name)
}

greeting(greetingHandler)
greeting(greetingHandler,'sohel')
greeting(greetingHandler,'sumi')
greeting(greetEvening,'Aadil')
greeting(greetNight,'Shahid')

