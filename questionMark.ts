// ? : ternary operator: decision making

// ?? : nullish coalecing operators

// ?. optional chaining

const userAge = 21;

const biyerJonnoEligible = (age: number) => {
  
  const result = age >= 22 ? "biyer jono hobe" : 'biye hobena'
  
  console.log(result);
}

biyerJonnoEligible(21);

// if (userAge >= 21) {
//   console.log('you are eligible');
// }

