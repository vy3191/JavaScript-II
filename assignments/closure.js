// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outFunction() {
	let age = 28;
	function innerFunction() {
		let name = 'venky';
		console.log(`My name is ${name} and my age is ${age}`);
	}
	return innerFunction;
}

const myDetails = outFunction();
myDetails();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
     let count = 0;
     const increamentCounter = () => {
     	 count ++;
     	 return count;
     }
     return increamentCounter;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
newCounter();
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
   return {
     increment: function() {
     	 count++;
     	 return count;
     },
     decrement: function() {
     	 count--;
     	 return count;
     }
   }
};

const objectCount = counterFactory();
objectCount.increment();
objectCount.increment();
objectCount.increment();
objectCount.increment();
objectCount.decrement();


