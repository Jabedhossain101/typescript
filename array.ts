let bazarList: string[] = ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Mangoes'];

//splice() method is used to add or remove elements from an array.
bazarList.push('Pineapples');

bazarList.splice(2, 1); // Removes "Oranges" from the list

// console.log(bazarList);

// shift() method is used to remove the first element from an array and returns that removed element.

let nums: number[] = [1, 2, 3, 4, 5];

let del: number | undefined = nums.shift();

// console.log(nums);

// console.log(del);

// unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array.

let bazarList2: string[] = ['Apples', 'Bananas'];

bazarList2.unshift('Pineapples', 'Strawberries');
console.log(bazarList2);

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




