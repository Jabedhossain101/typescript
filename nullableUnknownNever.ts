//nullable types

const getUsers = (input: string | null) =>
{
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("from db all users ");
  }
}

getUsers(null);


//unknown type

const discountCalculator = (input: unknown) => {
  
}