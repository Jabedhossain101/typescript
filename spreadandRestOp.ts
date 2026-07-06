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

// console.log(raf);


//rest operator

const sentInvite = (friend1: string, friend2: string, friend3: string) => {
  
  console.log(`sent Invitation to ${friend1}`);
  console.log(`sent Invitation to ${friend2}`);
  console.log(`sent Invitation to ${friend3}`);
}

sentInvite("Ali", "Osman", "Hossain");

// rest operator using foreach loop

const sentInvite2 = (...friends: string[]) => {
  friends.forEach((friend) => {
    console.log(`sent Invitation to ${friend}`);
  });
}

sentInvite2("Ali", "Osman", "Hossain", "Rafsan", "Rafsan2", "Rafsan3");




const myStd: (string | number)[] = ['naim', 23, 'asif', 'nazrul']


const first = myStd[2];
console.log(first);

const person: (string | number)[] = [...myStd,23,34,54];

console.log(person);