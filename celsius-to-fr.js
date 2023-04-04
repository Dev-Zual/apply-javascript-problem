function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const faren = celsiusToFahrenheit(10);
console.log(faren);

// fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
const cel = fahrenheitToCelsius(50);
console.log(cel);
