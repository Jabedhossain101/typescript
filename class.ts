/* class Animal{

  name: string;
  species: string;
  sound: string;
  
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making ${this.sound}`);
  }

} */



// parameter property

class Animal{

  name: string;
  species: string;
  sound: string;
  
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making ${this.sound}`);
  }

}

const dog = new Animal('doges vai', 'dog spis', 'gew gew')


const cat= new Animal('cat vai','Cat','mew mew')

console.log(dog.name);

console.log(dog, cat.name, cat.sound);

cat.makeSound();
dog.makeSound();

