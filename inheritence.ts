class Parent {
  id: number; //common
  name: string; //common
  age: number; //common
  address: string; //common

  constructor(id: number, name: string, age: number, address: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeData() {
    console.log(
      `${this.name} is a brilliant student, who is ${this.age} years old`,
    );
  }

  getSleep(numOfHour: number) {
    console.log(`${this.name} ${numOfHour} hour ghumay`);
  }
  
}


class student extends Parent {


  roll: number;

  constructor(name: string, id: number, age: number, address: string, roll: number) {
    
    super(id, name, age, address);
    this.roll= roll

  }
  
}

const student1 = new student(23, 'alice', 53, 'dhaka',33);

student1.getSleep(8);




class Teacher extends Parent{
  designation: string;

  constructor(id: number,name: string,age:number,address: string,designation: string) {
  super(id, name, age, address);
    this.designation = designation;
  }


  // own method
  takeClass(classTime: number) {
    console.log(`${this.name} ${classTime} eto ghonta class ney`);
  }
}

const teacher1=new Teacher(12,'Mr. Abdullah',32,'Chittagong','senior teacher')

teacher1.takeClass(7);
