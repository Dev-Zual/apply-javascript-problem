const numbers = [2, 43, 52, 55, 32, 21, 78, 90];

function oddSum(numArray) {
  let sum = 0;
  for (const num of numArray) {
    if (num % 2 != 0) {
      sum += num;
    }
  }
  return sum;
}
const sumOdd = oddSum(numbers);
console.log(sumOdd);
