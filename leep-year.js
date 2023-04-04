function isLeapYear(year) {
  if (year % 4 === 0) {
    const message = `${year} is a leap year`;
    return message;
  } else {
    const message = `${year} is a not a leap year`;
    return message;
  }
}

const leapYear = isLeapYear(1963);
// console.log(leapYear);

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 == 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

const leap = isLeap(1999);
console.log(leap);
