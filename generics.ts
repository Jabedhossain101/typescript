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
