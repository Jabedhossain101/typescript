
// static type 


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





class counting{
  counted: number = 0;

  increment() {
   
  }
  
}