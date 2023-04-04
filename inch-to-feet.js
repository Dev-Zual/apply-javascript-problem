function inchToFeet(inchInput) {
  const feet = inchInput / 12;
  return feet;
}

const result = inchToFeet(20);
console.log("feet", result);
