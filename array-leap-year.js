const leapYear = [2023, 2024, 2025, 2028, 2030];

function isLeapYear(years) {
  let leapYears = [];
  let notLeapYears = [];
  for (const year of years) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          leapYears.push(year);
        } else {
          notLeapYears.push(year);
        }
      } else {
        leapYears.push(year);
      }
    } else {
      notLeapYears.push(year);
    }
  }
  return [leapYears, notLeapYears];
}

const year = isLeapYear(leapYear);
console.log(year);
