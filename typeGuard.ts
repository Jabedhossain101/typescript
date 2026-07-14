
//type guard

//in typeof


type Alpha= string | number;
const add = (num1:Alpha, num2: Alpha) => {
  if (typeof num1 === 'number' && 
    typeof num2 ==='number'
  ) {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
}

add(4,3)

const addition = add('4', '5')
console.log(addition);

console.log(add('6', '2'));


// typeGuard

type normalUser = {
  name: string;
}

type AdminUser = {
  name: string;
  role: 'Admin';
}

const getUserInfo = (user: normalUser | AdminUser)=>{

  if ("role" in user) {
    
    console.log(`This ${user.name} and his role is ${user.role}`)

  } else {
    
    console.log(`${user.name}`);
  }

}

getUserInfo({name:'normal', role: "Admin"})