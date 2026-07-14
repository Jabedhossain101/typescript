
//type guard

//in typeof


type Alpha= string | number;
const add = (num1:Alpha, num2: Alpha) => {
  if (typeof num1 === 'number' && 
    typeof num2 ==='number'
  ) {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
}

add(4,3)

const addition = add('4', '5')
console.log(addition);

console.log(add('6', '2'));
