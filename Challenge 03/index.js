// Challenge 03 Arrow Functions

// Convert the given function into an arrow function and store the returned value in a variable and log it to the console.

// function mathFunction(a, b) {
//   const addition = a + b;
//   const subtraction = a - b;
//   const multiplication = a * b;
//   const division = a / b;
//   return { addition, subtraction, multiplication, division };
// }

const mathFunction = (a, b) => {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return console.log(`addition : ${addition}, subtraction : ${subtraction}, multiplication : ${multiplication}, division : ${division}`);
}

mathFunction(2, 2);