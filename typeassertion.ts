
let anything: any;

anything = "Hello, World! ";

(anything as string).toUpperCase();

const kgToGramConverter = (input: string | number) => {
  if (typeof input === 'number') {
    return input * 1000;
  }
};
const result1 = kgToGramConverter(5);
const result2 = kgToGramConverter("6 kg");