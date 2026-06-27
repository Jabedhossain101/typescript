const User: {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
} = {
  firstName: 'John',
  middleName: 'William',
  lastName: 'Doe',
  age: 30,
};

// console.log(User.firstName);
// console.log(User);


interface UserInterface{

  name: string;
  mobile?: number; //optional value
  address: string;
}

const user1: UserInterface = {
  name: 'John Doe',
  // mobile: 1234567890,
  address: '123 Main St, City, Country',
};

// console.log(user1);

const user2: {
  readonly name: string; // access modifier (value cannot be changed)
  mobile?: number; // optional value
  address: string;
  country: string;
} = {
  name: 'Jane Smith',
  address: '456 Elm St, City, Country',
  country: 'USA',   

}

user2.mobile = 1234567890; 

// console.log(user2);



//nested object using interface

interface Person {
  name: string;
  age: number;
  mobile: number;

}

interface phone{
  name: string;

}

let person: Person = {
  name: "rafsan",
  age: 23,
  mobile: 2323,
  phone : {
    name: "samsung",

  }
}

console.log(person.phone.name);


// object with function method


interface calculator {
  value: number;
  add(n: number): number;
  subtract: (n: number)=> number;
}

let calc: calculator = {
  value: 0,
  add(n: number): number {
    this.value += n;
    return this.value;
  },
  subtract: (n: number): number => {
    calc.value -= n;
    return calc.value;
  },
};    

console.log(calc.add(5));
console.log(calc.subtract(3));


//object destructuring

interface User {
  name: string;
  age: number;
  email: string;
}

let user: User = { name: 'Rahim', age: 25, email: 'rahim@mail.com' };

// Destructuring
let { name, age } = user;
console.log(name, age); 



