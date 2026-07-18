
class Counter{
   count: number = 0;


  increment() {
    return(this.count=this.count+1)
  }
  decrement() {
    return(this.count=this.count-1)
  }
}

const instance1 = new Counter();


console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());




// static use kore //ekta memory te store hoy
class counting{
  static counted: number = 0;

  static increment() {
   return(counting.counted= counting.counted+1)
  }

  static decrement() {
    return(counting.counted= counting.counted-1)
  }
  
}


// const instance2 = new counting();
// const distance = new counting();

// console.log(instance2.increment());


console.log(counting.increment());