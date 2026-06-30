//function
// 2 types of function
// 1 arrow function
// 2 normal function

function add(num1:number, num2: number) {
  return num1 + num2;
}

console.log(add(34, 23));

const sums = (num5: number, num6: number) => num5 + num6;

console.log(sums(3,4));



type addFunc = (
  number1: number,
  number2: number,
) => number;

const addNum:addFunc=(number1,number2)=>number1+number2

console.log(addNum(35,54));



export {}



