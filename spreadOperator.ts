let original: number[] = [1, 2, 3, 4, 5];

let newArray: number[] = [...original, 6, 7, 8];

// console.log(original);
// console.log(newArray);

const friends: string[] = ["John", "Jane", "Bob"];

const schoolFriends: string[] = ["Alice", "Charlie"];

const collegeFriends: string[] = ["David", "Eve"];

const allFriends: string[] = [ ...collegeFriends, ...schoolFriends, ...friends ]

// console.log(allFriends);


let ron: number[] = [2, 4, 5, 5];

let mon: string[] = ["Ali", "Osman", "Hossain"]

let raf: (string | number)[] = [...ron, ...mon,...allFriends]

console.log(raf);



