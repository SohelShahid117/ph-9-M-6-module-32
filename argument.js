//32-8 (advanced) function arguments pass by reference pass by value

function sum(a,b,c){  //parameters
    console.log(arguments)
    console.log(typeof arguments)
    const args = [...arguments];
    console.log(args)
    console.log(typeof args)
    for(item of args){
        console.log(`arguments value inside for of loop ${item}`)
    }
    console.log(arguments[4])
    const total = a+b+c;
    return total;
}
const add = sum(4,5,6);//arguments
console.log(add);

console.log(arguments)
const add2 = sum(4,5,6,7,72,8,9,11);
console.log(add2);
console.log(typeof sum);
console.log('variable declare/parameter declare in sum function ' + sum.length + ' t');


//primitive er value chang hoina but non primitive er value change hoi.
//non primitive data pass by value
let num1 = 5;
let num2 = 6;
function mul(a,b){
    a = 55;
    const multiplied = a*b;
    return multiplied;
}
console.log(num1,num2)
const gonFol = mul(num1,num2);
console.log(gonFol)
console.log(num1,num2)


/*non primitive data---object & array pass by reference tai functioner bitore value change korle outer scope eo value change hobe*/
// / let std1 = {name:'sohel',partner:'sumi'};
// let std2 = {name:'shahid',partner:'sharmin'};
const std1 = {name:'sohel',partner:'sumi'};
const std2 = {name:'shahid',partner:'sharmin'};
function makeLife(couple1,couple2){
    couple1.name = 'shahidul Islam'
    couple2.partner= 'farzana'
}
console.log(std1,std2)
const songsarLife = makeLife(std1,std2);
console.log(songsarLife)
console.log(std1,std2)