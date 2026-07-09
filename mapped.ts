// mapped


const arrayOfNum: number[] = [2, 3, 4, 3]

const arrayOfString: string[] = ['raf', 'dan', 'nam']


const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

const user = {
  id:122
}

type Area<T> = {
  [key in keyof T]: T[key];
}

const area1: Area<{
  height: string,
  width:boolean
}> = {
  height: '50',
  width: false
}











export default {}

