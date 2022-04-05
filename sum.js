// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// skeleton of my function
// create a function and pass values

// takes in an unlimited number of command line arguments
const args = process.argv.slice(2);
console.log('args:', args);

// arguments: numbers (1,2,3,4,5)
// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log('Please input at least 2 command-line arguments');
  process.exit();
}

// for (let i=0; i<args.length; i++) {
//   args[i]
// }

// we need an accumulator for the sum
let total = 0;

// loop through the numbers
for (let nb of args) {
  // Edge case: If any argument is not a whole number, skip it
  // if (Number(nb) % 1 === 0) {
  
  // Edge case: If any argument is not a number, output an error message.

  if (isNaN(Number(nb))) {
    console.log("Error: Please input only numbers");
    process.exit();
  }

  if (Number.isInteger(Number(nb))) {
    // add the numbers
    // Number => typecasting
    total += Number(nb);
  }

  console.log('Nb:', nb, 'total:', total);
}

// add the numbers

// print out the sum
console.log('Sum:', total);
