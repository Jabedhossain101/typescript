let bazarList: string[] = ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Mangoes'];

//splice()
//  method is used to add or remove elements from an array.
bazarList.push('Pineapples');

bazarList.splice(2, 1); // Removes "Oranges" from the list

// console.log(bazarList);

// shift()
//  method is used to remove the first element from an array and returns that removed element.

let nums: number[] = [1, 2, 3, 4, 5];

let del: number | undefined = nums.shift();

// console.log(nums);

// console.log(del);

// unshift()
//  method is used to add one or more elements to the beginning of an array and returns the new length of the array.

let bazarList2: string[] = ['Apples', 'Bananas'];

bazarList2.unshift('Pineapples', 'Strawberries');
// console.log(bazarList2);
//find()
interface User{
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" }
];

let user: User | undefined = users.find(u => u.id === 2);

// console.log(user);


// sort()
//  method is used to sort the elements of an array in place and returns the sorted array.

let nums3: number[] = [3, 1, 4, 2, 5];

nums3.sort((a, b) => a-b); // Sorts the array in ascending order

// console.log(nums3);
let names: string[] = ['Rahim', 'Karim', 'Jamal', 'Salam'];

names.sort(); // Sorts the array in ascending order
// console.log(names);


// .reverse() 
// method is used to reverse the order of the elements in an array in place and returns the reversed array.

let nums4: number[] = [1, 2, 3, 4, 5];

nums4.reverse(); // Reverses the order of the elements in the array

// console.log(nums4);

// slice()
//  method is used to extract a section of an array and returns a new array.

let array5: number[] = [6, 53, 32, 23, 9];

let sliced: number[] = array5.slice(1, 4);

// console.log(sliced);
// console.log(array5); // Original array remains unchanged


// map()
//  method is used to create a new array populated with the results of calling a provided function on every element in the calling array.


let nums6: number[] = [1, 2, 3, 4, 5];

let doubled: number[] = nums6.map((n: number) => n * 2);

// console.log(doubled);

// console.log(nums6); // Original array remains unchanged


let names2: string[] = ["jabed", "habib", "sabbir", "shakil"];

let uppercase: string[]= names2.map((n:string)=>n.toUpperCase());

// console.log(uppercase);


// filter() 
// method is used to create a new array with all elements that pass the test implemented by the provided function.


let arr1: number[] = [32, 45, 67, 12, 89, 23];

let events: number[] = arr1.filter((n: number) => n > 40);

// console.log(events);


interface member{
  id: number,
  name : string,
}
let member: User[] = [
  { id: 1, name: "rafsan" },
  { id: 2, name: "rabit" },
  { id: 3, name: "rabit" },
  { id: 4, name: "rabit" },
  { id: 5, name: "rabit" }
  
];

let filteredName: string[] = member.filter((u: User) => u.id == 3);

// console.log(filteredName);


// forEach()
//  method is used to execute a provided function once for each array element.


const arr2: number[] = [23, 43, 26, 47, 86, 33, 32];

arr2.forEach((n: number, index: number)=> {
  // console.log(`Index ${index}: ${n}`);
})


// reduce()
//  method is used to execute a reducer function on each element of the array, resulting in a single output value.

let arr3:(string|number)[] = [23, 43, 23, 53, 23, 5, 34, 3];

arr3.push("hello")
arr3.pop()
arr3.shift()

arr3.unshift("me and bro")
let findArr = arr3.find((n: String | number) => {
  return typeof n === "number" && n > 20;
})

// console.log(arr3);
// console.log(findArr);



// findIndex()
// is used to find the index of the first element in an array that satisfies a provided testing function. It returns the index of the first matching element, or -1 if no match is found.


let arr4: number[] = [32, 52, 52, 64, 23, 64, 21];

let indexFor = arr4.findIndex((n: number) => n === 20)

// console.log(indexFor);

//includes()
// method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate.

let fruits: string[] = ["apple", "banana", "mango", "orange"]

let hasFruits = fruits.includes("apple")

console.log(hasFruits);


// .indexOf()
//  method is used to return the first index at which a given element can be found in the array, or -1 if it is not present.

let arr5: number[] = [2, 43, 23, 53, 23, 5, 34, 3];

console.log(arr5.indexOf(5));


// .some()
//  method is used to test whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

let arr6: number[] = [23, 43, 23, 53, 23, 5, 34, 3];
let hasGreaterThan50 = arr6.some((n: number) => n > 50);

console.log(hasGreaterThan50);

// .EVERY()
//  method is used to test whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let arr7: number[] = [2,4,6,8,10];
let allEven = arr7.every((n: number) => n % 2 === 0);

console.log(allEven);

