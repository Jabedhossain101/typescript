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



//keyof : type operator

type RichPeopleVehicle = {
  car: string,
  bike: string,
  boat: string
}

type MyVehicle1 = 'bike' | 'car' | 'boat';
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle1 = 'car';


const user = {
  id: 22,
  name: 'rafsan',
  city: 'Dhaka'
}

const myId = user['id'];
const myname = user['name']

console.log('hello', myname, myId);