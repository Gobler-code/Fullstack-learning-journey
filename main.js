// main.js

// 1. Importing the calculator functions (as an object)
const calc = require('./calculator'); 

// 2. Importing the single greeting string (the variable 'greeting' IS the string)
const greeting = require('./messages'); 

// Task 3: Use the imported modules
console.log(greeting); 
console.log('Addition result:', calc.add(10, 5)); // <-- Correct function call
console.log('Subtraction result:', calc.subtract(100, 25)); // <-- Correct function call


// --- Task 4: Mini Real-World Task - Module Caching ---
// The module loader checks if ./calculator has been loaded. It has.
// Therefore, it returns the EXACT SAME object reference.
const anotherCalc = require('./calculator');
console.log('Task 4 Caching Test: Are the two calculator objects the same?', anotherCalc === calc);