
let number = Number(prompt("Enter a number:"));

if (isNaN(number) || number === 0) {
  console.log("Invalid input: please enter a number");
} else if (!Number.isInteger(number) || number < 1) {
  console.log("Please enter a positive whole number");
} else {
  for (let i = number - 1; i >= 1; i--) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}