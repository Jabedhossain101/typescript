function mergeSort(arr: number[]): number[]{
  if (arr.length <= 1) {
    return arr;
  }

  const mid= Math.floor(arr.length / 2);
  const left= mergeSort(arr.slice(0, mid));
  const right= mergeSort(arr.slice(mid));

  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}

const numbers = [38, 34, 65, 37, 8, 76, 2, 66];
console.log("original array", numbers);

const sortedNumbers = mergeSort(numbers);
console.log("Sorted Array", sortedNumbers);
