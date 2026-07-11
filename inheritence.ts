class student {
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

  getSleep(numOfHour:number) {
    console.log(`${this.name} ${numOfHour} hour ghumay`);
  }
}

const student1 = new student(12, 'alice', 53, 'dhaka');

student1.getSleep(8);




class Teacher {
  id: number; //common
  name: string; //common
  age: number; //common
  address: string; //common

  designation: string; //common

  constructor(id: number, name: string, age: number, address: string, designation: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation= designation
  }

  makeData() {
    console.log(
      `${this.name} is a brilliant student, who is ${this.age} years old`,
    );
  }

  //common

  getSleep(numOfHour:number) {
    console.log(`${this.name} ${numOfHour} hour ghumay`);
  }


  // own method
  takeClass(classTime: number) {
    console.log(`${this.name} ${classTime} eto ghonta class ney`);
  }
}

const teacher1=new Teacher(12,'Mr. Abdullah',32,'Chittagong','senior teacher')

teacher1.takeClass(7);
