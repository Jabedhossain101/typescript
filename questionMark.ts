// ? : ternary operator: decision making

// ?? : nullish coalecing operators------ use for null or undefined values

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



// nullish coalecing operator

const userTheme = null;

const selectedTheme = userTheme ?? 'light';

console.log(selectedTheme);

