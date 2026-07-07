//constraint: strict rules thakbe

const courseStudent = <T extends {
  name: string
  ,id: number
}>(studentInfo: T) => {

  return {
    course: 'Next level',
    ...studentInfo
  }
  
}

const student1 = {
  id: 12,
  name: 'ALif',
  Subject: 'English'

}
const student2= {
  id: 22,
  name: 'rabi',
  Subject: 'Bangla'
  
}
const student3 = {
  name: 'hell',
  Class: 'Ten',
  department: 'SCIENCE',
  id:8,
  
}

const result = courseStudent(student3);
console.log(result);



//--------keyof Constraint Operation: type operator---------

type RichPeopleVehicle = {
  car: string,
  bike: string,
  boat: string
}

type MyVehicle1 = 'bike' | 'car' | 'boat';
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle1 = 'car';


interface User{
  id: number,
  name: string,
  address: {
    city: string,
    houseCode: number
  }
  
}
const user : User = {
  id: 22,
  name: 'rafsan',
  address: {
    city: 'Dhaka',
    houseCode: 232,
  },
};

const myId = user['id'];
const myname = user['name']
const myAddress = user['address']

console.log('hello', myname, myId, 'amar',myAddress);

const getPro = <X>(obj: X, key: keyof X)=>{
return obj[key]
}

const res = getPro(user, "name");

console.log(res);

const product = {
  brand: 'hp'
}

const student = {
  id: 2323,
  name: 'rahat',
  age: 32
  
}


const result2 = getPro(product, 'brand')

const rahResult = getPro(student, 'name')

console.log(result2, rahResult);