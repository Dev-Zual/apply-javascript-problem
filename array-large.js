const numbers = [35, 4, 56, 21, 100, 98];
const min = Math.min(...numbers);
const large = Math.max(...numbers);
const remove = numbers.splice(numbers.indexOf(large), 1);
const second = Math.max(...numbers);
// console.log(remove);
// console.log(large);
console.log(second);
console.log(min);
