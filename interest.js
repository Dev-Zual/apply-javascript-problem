function getInterest(money, time, rate) {
  const monthly = (money / 100) * rate;
  const total = monthly * time;
  return total;
}
const totalMoney = 1000;
const duration = 1;
const interestRate = 5;
const totalInterest = getInterest(totalMoney, duration, interestRate);
console.log(totalInterest);
