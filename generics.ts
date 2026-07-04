// generics

// const friends: string[] = ["Alice", "Bob", "Charlie"];

// method 1

type genericArray = Array<string>;
type genericArrNum = Array<number>;
type genericArrBool = Array<boolean>;

const friends: genericArray = ['Alice', 'Bob', 'Charlie'];

const rollNumbers: genericArrNum = [1, 2, 3, 4, 5];

const isEligible: genericArrBool = [true, false, true];

// method 2

type generic<value> = Array<value>;

const friend: generic<string> = ['Alice', 'Bob', 'Charlie'];

const rollNumber: generic<number> = [1, 2, 3, 4, 5];

const isEligibles: generic<boolean> = [true, false, true];

// method 3
type Coordinates<x, y> = [x, y];
const coordinates: Coordinates<string, number> = ['Hello', 30];

// array of objet use

const userList: Array<{ name: string; age: number }> = [
  {
    name: 'rafsan',
    age: 23,
  },
];

// using interface


type user = {
  name: string,
  roll: number,
  location: string,
  mobile: number
}

const users: Array<user> = [
  {
    name: 'Rafsan',
    roll: 101,
    location: 'Dhaka',
    mobile: 1234567890,
  },
];


// ----------Interface Generics--------------

interface developer <T,Y>{
  name: string;
  salary: number,
  device: {
    brand: string,
    model: string,
    releasedYear: number,
  }
  smartwatch: T, 
  bike: Y
}

interface bikeDev{
  bikes: String,
  model: string,
  CC: number,
}

interface poorDev
  {
  heartRate: string,
  timer: boolean,
}

const poorDeveloper: developer<poorDev,bikeDev> = {
  name: ' mr poor',
  salary: 20,
  device: {
    brand: 'lenovo',
    model: '15 plus',
    releasedYear: 2024,
  },
  smartwatch: {
    heartRate: '200',
    timer: true,
  },
  bike: {
    bikes: "pulser",
    model: "150",
    CC: 250,

  }
}





interface devRich
{
  heartRate: string,
  timer: boolean,
  stopwatch: boolean,
  walkStep: boolean,
  calculator: boolean,
}

const richDeveloper: developer<devRich, bikeDev> = {
  name: ' mr rich',
  salary: 100,
  device: {
    brand: 'iphone',
    model: '15 pro',
    releasedYear: 2025,
  },
  smartwatch: {
    heartRate: '300',
    timer: true,
    stopwatch: true,
    walkStep: true,
    calculator: true,
  },
  bike: {
    bikes: 'Fz',
    model: '180',
    CC: 280,
  },
};

console.log(richDeveloper);