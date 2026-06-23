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

console.log(user2);