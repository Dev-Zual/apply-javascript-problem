// write a function which is take hours and return minutes value
function hourToMinute(hours) {
  const minute = hours * 60;
  return `${hours} hours = ${minute} minutes`;
}
const minutes = hourToMinute(1.5);
console.log(minutes);

// write a function which is take minutes in input and return to hours
function minutesToHour(minutes) {
  const hours = minutes / 60;
  return `${minutes} minutes = ${hours} hours`;
}
const minute = minutesToHour(90);
console.log(minute);
