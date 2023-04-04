function factorialNumbers(number) {
  let m = 1;
  for (let i = number; i >= 1; i--) {
    m *= i;
  }
  return m;
}

const result = factorialNumbers(6);
console.log(result);
