//Object destructuring


//normal rules
const user = {
  id: 123,
  name: {
    firstName: "rafsan",
    middleName: "ahmed",
    lastName: "jabed"
  },
  gender: "male",
  favoriteColor:"red"

};

// const gen = user.gender;
// const nam = user.name.firstName;
// console.log(gen);
// console.log(nam);

// destructuring rule

const { favoriteColor} = user;
// console.log(favoriteColor);

// name elias

const { favoriteColor: myFavoriteColor,name:{middleName:myMiddleName}} = user;
// console.log(myMiddleName);


// array destructuring

// normal array
const friend = ['karim', 'rahim', 'hasan']

const myBestFriend = friend[1]
// console.log(myBestFriend);

// destructuring array

const friends = ['karim', 'rahim', 'hasan']

const [A, myBestfriend, C] = friends;

console.log(myBestfriend);
console.log(C);



const [x = 10, y = 20] = [];
console.log(x, y);

const person = {
  name: 'Tania',
  address: { city: 'Dhaka', zip: '1207' },
};

const {
  address: { city, zip },
} = person;
console.log(city, zip);










export default {};
