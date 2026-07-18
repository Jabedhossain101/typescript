//polymorphism : Bohurupi

class Person{
  getSleep() {
    console.log(`I am a normal person. I sleep for 8 hours`);
  }
}

class student extends Person {
  getSleep() {
    console.log(`I am a student . I sleep 7 hours`);
  }
}

class NextLevelDeveloper extends Person{
  getSleep(): void {
      console.log(`I am a next level developer . I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
}

const person1= new Person()
const person2= new student()
const person3 = new NextLevelDeveloper();

getSleepingHours(person1)
getSleepingHours(person2);


class Shape{
  getArea() {
    return 0;
  }
}

class Circle extends Shape{
  // area = pie*r*r
  
  radius: number;
  constructor(radius: number) {
    super()
    this.radius=radius
  }
  getArea(): number {
      return Math.PI*this.radius*this.radius
  }
}

class RecAngle extends Shape{
  // area= height*width
  
  height: number;
  width: number;

  constructor(height: number, width: number) {

    super()
    this.height = height;
    this.width = width
    
  }
  getArea(): number{
return this.height* this.width
  }
}

const getArea = (param: Shape) => {
  
  console.log(param.getArea());
}

const Shape1 = new Shape;
const Shape2 = new Circle(10);
const Shape3= new RecAngle(20,30)

getArea(Shape1)
getArea(Shape2)
getArea(Shape3)