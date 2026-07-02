//nullable types

const getUsers = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log('from db all users ');
  }
};

// getUsers(null);

//unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === 'number') {
    const discount = input * 0.1;
    console.log(`Discount: ${discount}`);
  } else if (typeof input === 'string') {
    const [discount] = input.split(' ');
    console.log(Number(discount) * 0.1);
  } else {
    console.log('Invalid input');
  }
};
discountCalculator(100);
discountCalculator('100 discount');

// void

const throwError = (message: string) :never=> {
  throw new Error(message);
};

throwError('This is an error message');
